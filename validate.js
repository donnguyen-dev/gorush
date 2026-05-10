#!/usr/bin/env node
// Validates every question in questions.js by running its code with `go run`
// and comparing actual output to the stored correct answer.
// Exit code 1 if any question fails — used by CI to gate PRs.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

// Load QUESTIONS from questions.js without a module system
const src = fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf-8');
const QUESTIONS = new Function(src + '; return QUESTIONS;')();

let passed = 0, failed = 0, failedIds = [];

for (const q of QUESTIONS) {
  const expected = q.options[q.answer];

  // Write code snippet to a temp file and run it
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `gorush-q${q.id}-`));
  const tmpFile = path.join(tmpDir, 'main.go');
  fs.writeFileSync(tmpFile, q.code);

  const result = spawnSync('go', ['run', tmpFile], {
    encoding: 'utf-8',
    timeout: 15_000,
  });

  fs.rmSync(tmpDir, { recursive: true, force: true });

  // println() writes to stderr; fmt.Println() writes to stdout.
  // Our questions use one or the other per snippet, so combining is safe.
  const actual = ((result.stdout ?? '') + (result.stderr ?? '')).trimEnd();

  // Special case: "compile error" answers are validated by non-zero exit
  if (expected === 'compile error') {
    if (result.status !== 0) {
      console.log(`✅ Q${q.id} [${q.topic}]: compile error (expected)`);
      passed++;
    } else {
      console.log(`❌ Q${q.id} [${q.topic}]: expected compile error but program succeeded`);
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

console.log(`\n${passed}/${QUESTIONS.length} passed`);
if (failed > 0) {
  console.log(`Failed: ${failedIds.map(id => 'Q' + id).join(', ')}`);
  process.exit(1);
}
