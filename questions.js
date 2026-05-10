// GoRush — question bank
// Format: { id, difficulty (1=Easy 2=Medium 3=Hard), topic, code, question, options[], answer (0-indexed), explanation }
// Want to contribute? Add a question to this array and open a PR!

const QUESTIONS = [

  // ─── Tier 1: Easy ───────────────────────────────────────────────

  {
    id: 1,
    difficulty: 1,
    topic: "Zero Values",
    code: `package main

func main() {
	var x int
	println(x)
}`,
    question: "What does this program print?",
    options: ["0", "nil", "undefined", "compile error"],
    answer: 0,
    explanation: "Every variable in Go is initialized to its zero value. The zero value for <code>int</code> is <code>0</code>."
  },

  {
    id: 2,
    difficulty: 1,
    topic: "Zero Values",
    code: `package main

func main() {
	var b bool
	println(b)
}`,
    question: "What does this program print?",
    options: ["true", "false", "0", "compile error"],
    answer: 1,
    explanation: "The zero value for <code>bool</code> is <code>false</code>."
  },

  {
    id: 3,
    difficulty: 1,
    topic: "Multiple Assignment",
    code: `package main

func main() {
	x, y := 1, 2
	x, y = y, x
	println(x, y)
}`,
    question: "What does this program print?",
    options: ["1 2", "2 1", "1 1", "compile error"],
    answer: 1,
    explanation: "Go evaluates all right-hand side expressions before any assignment. The swap is atomic — no temporary variable needed."
  },

  {
    id: 4,
    difficulty: 1,
    topic: "String Length",
    code: `package main

func main() {
	s := "hello"
	println(len(s))
}`,
    question: "What does this program print?",
    options: ["4", "5", "6", "compile error"],
    answer: 1,
    explanation: "<code>len(s)</code> returns the number of <em>bytes</em>, not characters. <code>\"hello\"</code> is 5 bytes."
  },

  {
    id: 5,
    difficulty: 1,
    topic: "Constants",
    code: `package main

func main() {
	const x = 10
	println(x * 2)
}`,
    question: "What does this program print?",
    options: ["10", "20", "x * 2", "compile error"],
    answer: 1,
    explanation: "Constants are evaluated at compile time. <code>x * 2 = 10 * 2 = 20</code>."
  },

  {
    id: 6,
    difficulty: 1,
    topic: "For Loop",
    code: `package main

func main() {
	sum := 0
	for i := 1; i <= 5; i++ {
		sum += i
	}
	println(sum)
}`,
    question: "What does this program print?",
    options: ["10", "15", "20", "25"],
    answer: 1,
    explanation: "1 + 2 + 3 + 4 + 5 = 15."
  },

  // ─── Tier 2: Medium ─────────────────────────────────────────────

  {
    id: 7,
    difficulty: 2,
    topic: "Defer Order",
    code: `package main

func main() {
	defer println("a")
	defer println("b")
	defer println("c")
}`,
    question: "What does this program print?",
    options: ["a\nb\nc", "c\nb\na", "a b c", "c b a"],
    answer: 1,
    explanation: "Deferred calls run in LIFO order — the last <code>defer</code> registered runs first."
  },

  {
    id: 8,
    difficulty: 2,
    topic: "Defer Arguments",
    code: `package main

func main() {
	x := 1
	defer println(x)
	x = 2
	println(x)
}`,
    question: "What does this program print?",
    options: ["1\n2", "2\n1", "2\n2", "1\n1"],
    answer: 1,
    explanation: "Defer arguments are evaluated <em>immediately</em> when the defer statement executes — <code>x</code> is 1 at that point. The deferred call is delayed, not the argument."
  },

  {
    id: 9,
    difficulty: 2,
    topic: "Closures",
    code: `package main

func main() {
	x := 10
	f := func() { println(x) }
	x = 20
	f()
}`,
    question: "What does this program print?",
    options: ["10", "20", "0", "compile error"],
    answer: 1,
    explanation: "Closures capture variables by <em>reference</em>, not by value. When <code>f()</code> runs, <code>x</code> is already 20."
  },

  {
    id: 10,
    difficulty: 2,
    topic: "Named Returns",
    code: `package main

func f() (result int) {
	result = 42
	return
}

func main() {
	println(f())
}`,
    question: "What does this program print?",
    options: ["0", "42", "compile error", "runtime panic"],
    answer: 1,
    explanation: "Named return variables are pre-declared. A bare <code>return</code> returns their current values — here <code>result = 42</code>."
  },

  {
    id: 11,
    difficulty: 2,
    topic: "Maps",
    code: `package main

func main() {
	m := map[string]int{"a": 1, "b": 2}
	m["c"] = m["a"] + m["b"]
	println(m["c"])
}`,
    question: "What does this program print?",
    options: ["0", "1", "3", "compile error"],
    answer: 2,
    explanation: "<code>m[\"a\"] + m[\"b\"] = 1 + 2 = 3</code>, assigned to key <code>\"c\"</code>."
  },

  {
    id: 12,
    difficulty: 2,
    topic: "Functions as Values",
    code: `package main

func apply(f func(int) int, x int) int {
	return f(x)
}

func double(x int) int { return x * 2 }

func main() {
	println(apply(double, 5))
}`,
    question: "What does this program print?",
    options: ["5", "10", "25", "compile error"],
    answer: 1,
    explanation: "<code>apply</code> calls <code>f(x)</code> where <code>f = double</code> and <code>x = 5</code>. <code>double(5) = 5 * 2 = 10</code>."
  },

  {
    id: 13,
    difficulty: 2,
    topic: "Switch",
    code: `package main

func f() bool {
	return false
}

func main() {
	switch f()
	{
	case true:
		println(1)
	case false:
		println(0)
	}
}`,
    question: "What does this program print?",
    options: ["0", "1", "compile error", "runtime panic"],
    answer: 1,
    explanation: "Go inserts a semicolon after <code>f()</code> at end-of-line, making it an init statement. With no switch expression, it defaults to <code>true</code> — so <code>case true</code> matches."
  },

  // ─── Tier 3: Hard ───────────────────────────────────────────────

  {
    id: 14,
    difficulty: 3,
    topic: "Nil Interface",
    code: `package main

import "fmt"

type MyError struct{}

func (e *MyError) Error() string { return "oops" }

func getError() error {
	var e *MyError
	return e
}

func main() {
	fmt.Println(getError() == nil)
}`,
    question: "What does this program print?",
    options: ["true", "false", "compile error", "runtime panic"],
    answer: 1,
    explanation: "An interface is nil only when both its type and value are nil. Here the <code>error</code> interface holds <code>(type=*MyError, value=nil)</code> — a non-nil interface wrapping a nil pointer."
  },

  {
    id: 15,
    difficulty: 3,
    topic: "Nil Map Read",
    code: `package main

func main() {
	var m map[string]int
	println(m["key"])
}`,
    question: "What does this program print?",
    options: ["0", "runtime panic", "compile error", "<nil>"],
    answer: 0,
    explanation: "Reading from a nil map is safe — it returns the zero value (<code>0</code> for int). <em>Writing</em> to a nil map would panic."
  },

  {
    id: 16,
    difficulty: 3,
    topic: "Iota",
    code: `package main

const (
	a = iota + 1
	b
	c
)

func main() {
	println(a, b, c)
}`,
    question: "What does this program print?",
    options: ["0 1 2", "1 2 3", "1 1 1", "compile error"],
    answer: 1,
    explanation: "<code>iota</code> starts at 0 and increments per constant. The expression <code>iota+1</code> is reused implicitly for each line: a=1, b=2, c=3."
  },

  {
    id: 17,
    difficulty: 3,
    topic: "Unicode & len()",
    code: `package main

import "fmt"

func main() {
	s := "日本語"
	fmt.Println(len(s))
}`,
    question: "What does this program print?",
    options: ["3", "6", "9", "12"],
    answer: 2,
    explanation: "<code>len()</code> counts bytes, not Unicode characters. Each Japanese character is 3 bytes in UTF-8: 3 × 3 = 9. Use <code>len([]rune(s))</code> to count characters."
  },

  {
    id: 18,
    difficulty: 3,
    topic: "Slice Internals",
    code: `package main

func main() {
	s := []int{1, 2, 3}
	t := s
	t[0] = 99
	println(s[0])
}`,
    question: "What does this program print?",
    options: ["1", "99", "compile error", "runtime panic"],
    answer: 1,
    explanation: "A slice is a header (pointer, length, capacity) pointing at a backing array. <code>t := s</code> copies the header — both <code>s</code> and <code>t</code> share the same array. Mutating <code>t[0]</code> changes <code>s[0]</code> too."
  },

  {
    id: 19,
    difficulty: 3,
    topic: "Named Return + Defer",
    code: `package main

func f() (result int) {
	defer func() { result++ }()
	return 1
}

func main() {
	println(f())
}`,
    question: "What does this program print?",
    options: ["1", "2", "0", "compile error"],
    answer: 1,
    explanation: "<code>return 1</code> sets the named return variable <code>result = 1</code>. The deferred closure then runs and increments it to 2. Deferred closures can mutate named return values."
  },

  {
    id: 20,
    difficulty: 3,
    topic: "Defer in Loop",
    code: `package main

func main() {
	for i := 0; i < 3; i++ {
		defer println(i)
	}
}`,
    question: "What does this program print?",
    options: ["0\n1\n2", "2\n1\n0", "2\n2\n2", "compile error"],
    answer: 1,
    explanation: "Defer arguments are evaluated immediately — each call captures the current value of <code>i</code> (0, 1, 2). Defers run LIFO, so the output is reversed: 2, 1, 0."
  },

];
