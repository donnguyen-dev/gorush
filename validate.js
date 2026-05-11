#!/usr/bin/env node
// Validates questions.js by language:
//   Go    — runs with `go run`, compares stdout+stderr
//   SQL   — runs with `sqlite3 :memory:`, compares stdout
//   React — skipped (manually reviewed, no headless runner)
//   null code / conceptual — skipped

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const src = fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf-8');
const QUESTIONS = new Function(src + '; return QUESTIONS;')();

let passed = 0, failed = 0, skipped = 0, failedIds = [];

for (const q of QUESTIONS) {
  const lang = q.lang || 'go';

  // Skip conceptual (no code) and React (no headless runner)
  if (!q.code) {
    console.log(`⏭️  Q${q.id} [${q.topic}]: conceptual (skipped)`);
    skipped++;
    continue;
  }
  if (lang === 'react') {
    console.log(`⏭️  Q${q.id} [${q.topic}]: React (manual review)`);
    skipped++;
    continue;
  }

  const expected = q.options[q.answer];

  // ── SQL via sqlite3 ──────────────────────────────────────────────
  if (lang === 'sql') {
    const sql = (q.setup ? q.setup + '\n' : '') + q.code + '\n';
    const result = spawnSync('sqlite3', [':memory:'], {
      input: sql,
      encoding: 'utf-8',
      timeout: 10_000,
    });
    const actual = ((result.stdout ?? '') + (result.stderr ?? '')).trimEnd();
    if (actual === expected) {
      console.log(`✅ Q${q.id} [${q.topic}]: ${JSON.stringify(expected)}`);
      passed++;
    } else {
      console.log(`❌ Q${q.id} [${q.topic}]:`);
      console.log(`   expected: ${JSON.stringify(expected)}`);
      console.log(`   got:      ${JSON.stringify(actual)}`);
      failed++;
      failedIds.push(q.id);
    }
    continue;
  }

  // ── Go via go run ────────────────────────────────────────────────
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `devfathom-q${q.id}-`));
  const tmpFile = path.join(tmpDir, 'main.go');
  fs.writeFileSync(tmpFile, q.code);

  const result = spawnSync('go', ['run', tmpFile], {
    encoding: 'utf-8',
    timeout: 15_000,
  });

  fs.rmSync(tmpDir, { recursive: true, force: true });

  // println() → stderr, fmt.Println() → stdout; combine since each question uses one
  const actual = ((result.stdout ?? '') + (result.stderr ?? '')).trimEnd();

  if (expected === 'compile error') {
    if (result.status !== 0) {
      console.log(`✅ Q${q.id} [${q.topic}]: compile error (expected)`);
      passed++;
    } else {
      console.log(`❌ Q${q.id} [${q.topic}]: expected compile error but program ran`);
      console.log(`   got: ${JSON.stringify(actual)}`);
      failed++;
      failedIds.push(q.id);
    }
    continue;
  }

  if (actual === expected) {
    console.log(`✅ Q${q.id} [${q.topic}]: ${JSON.stringify(expected)}`);
    passed++;
  } else {
    console.log(`❌ Q${q.id} [${q.topic}]:`);
    console.log(`   expected: ${JSON.stringify(expected)}`);
    console.log(`   got:      ${JSON.stringify(actual)}`);
    failed++;
    failedIds.push(q.id);
  }
}

const runnable = QUESTIONS.length - skipped;
console.log(`\n${passed}/${runnable} runnable questions passed, ${skipped} skipped`);
if (failed > 0) {
  console.log(`Failed: ${failedIds.map(id => 'Q' + id).join(', ')}`);
  process.exit(1);
}
