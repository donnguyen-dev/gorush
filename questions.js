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

  // ─── Tier 1: Easy (ids 21–60) ───────────────────────────────────

  {
    id: 21,
    difficulty: 1,
    topic: "Zero Values",
    code: `package main

func main() {
	var s string
	println(s == "")
}`,
    question: "What does this program print?",
    options: ["true", "false", "compile error", "runtime panic"],
    answer: 0,
    explanation: "The zero value for <code>string</code> is the empty string <code>\"\"</code>, so <code>s == \"\"</code> is <code>true</code>."
  },

  {
    id: 22,
    difficulty: 1,
    topic: "Zero Values",
    code: `package main

func main() {
	var p *int
	println(p == nil)
}`,
    question: "What does this program print?",
    options: ["true", "false", "0", "compile error"],
    answer: 0,
    explanation: "The zero value for any pointer type is <code>nil</code>. An uninitialized <code>*int</code> equals <code>nil</code>."
  },

  {
    id: 23,
    difficulty: 1,
    topic: "Zero Values",
    code: `package main

import "fmt"

func main() {
	var s []int
	fmt.Println(s == nil)
}`,
    question: "What does this program print?",
    options: ["true", "false", "[]", "compile error"],
    answer: 0,
    explanation: "The zero value for a slice is <code>nil</code>. A <code>var</code>-declared slice without initialization is a nil slice."
  },

  {
    id: 24,
    difficulty: 1,
    topic: "Short Declaration",
    code: `package main

func main() {
	x := 42
	println(x)
}`,
    question: "What does this program print?",
    options: ["0", "42", "x", "compile error"],
    answer: 1,
    explanation: "<code>:=</code> is the short variable declaration. It declares and initializes <code>x</code> to <code>42</code> in one step."
  },

  {
    id: 25,
    difficulty: 1,
    topic: "Short Declaration",
    code: null,
    question: "Which of the following is true about short variable declaration (:=)?",
    options: [
      "It can be used at package level",
      "It can only be used inside functions",
      "It requires an explicit type annotation",
      "It cannot declare multiple variables at once"
    ],
    answer: 1,
    explanation: "<code>:=</code> is only valid inside functions. Package-level variables must be declared with <code>var</code>."
  },

  {
    id: 26,
    difficulty: 1,
    topic: "Type Conversion",
    code: `package main

func main() {
	x := 3.9
	println(int(x))
}`,
    question: "What does this program print?",
    options: ["3", "4", "3.9", "compile error"],
    answer: 0,
    explanation: "Converting a float to int in Go truncates toward zero — the decimal part is dropped, giving <code>3</code>, not rounded to <code>4</code>."
  },

  {
    id: 27,
    difficulty: 1,
    topic: "Type Conversion",
    code: `package main

func main() {
	println(string(65))
}`,
    question: "What does this program print?",
    options: ["65", "A", "\"65\"", "compile error"],
    answer: 1,
    explanation: "<code>string(65)</code> converts the integer <code>65</code> to its Unicode code point — the character <code>A</code>."
  },

  {
    id: 28,
    difficulty: 1,
    topic: "Type Conversion",
    code: `package main

import "fmt"

func main() {
	var i int = 7
	fmt.Println(float64(i) / 2)
}`,
    question: "What does this program print?",
    options: ["3", "3.5", "3.500000", "compile error"],
    answer: 1,
    explanation: "After converting <code>i</code> to <code>float64</code>, the division is floating-point: 7.0 / 2 = 3.5. <code>fmt.Println</code> formats it as <code>3.5</code>."
  },

  {
    id: 29,
    difficulty: 1,
    topic: "Basic Arithmetic",
    code: `package main

func main() {
	println(10 / 3)
}`,
    question: "What does this program print?",
    options: ["3", "3.33", "4", "compile error"],
    answer: 0,
    explanation: "Integer division in Go truncates toward zero. <code>10 / 3 = 3</code> (remainder discarded)."
  },

  {
    id: 30,
    difficulty: 1,
    topic: "Basic Arithmetic",
    code: `package main

func main() {
	println(10 % 3)
}`,
    question: "What does this program print?",
    options: ["0", "1", "2", "3"],
    answer: 1,
    explanation: "The modulo operator <code>%</code> returns the remainder. <code>10 = 3 × 3 + 1</code>, so <code>10 % 3 = 1</code>."
  },

  {
    id: 31,
    difficulty: 1,
    topic: "Boolean Operators",
    code: `package main

func main() {
	println(true && false)
}`,
    question: "What does this program print?",
    options: ["true", "false", "1", "compile error"],
    answer: 1,
    explanation: "<code>&&</code> is logical AND. It is <code>true</code> only when both operands are true. <code>true && false</code> evaluates to <code>false</code>."
  },

  {
    id: 32,
    difficulty: 1,
    topic: "Boolean Operators",
    code: `package main

func main() {
	x := 5
	println(x > 3 || x > 10)
}`,
    question: "What does this program print?",
    options: ["true", "false", "compile error", "runtime panic"],
    answer: 0,
    explanation: "<code>||</code> is logical OR. <code>x > 3</code> is already <code>true</code>, so the whole expression is <code>true</code> (short-circuit evaluation)."
  },

  {
    id: 33,
    difficulty: 1,
    topic: "Boolean Operators",
    code: `package main

func main() {
	println(!true)
}`,
    question: "What does this program print?",
    options: ["true", "false", "0", "compile error"],
    answer: 1,
    explanation: "<code>!</code> is the logical NOT operator. It negates a boolean: <code>!true</code> is <code>false</code>."
  },

  {
    id: 34,
    difficulty: 1,
    topic: "String Operations",
    code: `package main

func main() {
	s := "hello"
	println(s[0])
}`,
    question: "What does this program print?",
    options: ["h", "104", "72", "compile error"],
    answer: 1,
    explanation: "Indexing a string in Go returns a <code>byte</code> (uint8), not a character. The ASCII value of <code>'h'</code> is <code>104</code>."
  },

  {
    id: 35,
    difficulty: 1,
    topic: "String Operations",
    code: `package main

func main() {
	a := "foo"
	b := "bar"
	println(a + b)
}`,
    question: "What does this program print?",
    options: ["foo bar", "foobar", "barfoo", "compile error"],
    answer: 1,
    explanation: "The <code>+</code> operator concatenates strings in Go. <code>\"foo\" + \"bar\"</code> produces <code>\"foobar\"</code>."
  },

  {
    id: 36,
    difficulty: 1,
    topic: "String Operations",
    code: `package main

func main() {
	s := "gopher"
	println(len(s))
}`,
    question: "What does this program print?",
    options: ["5", "6", "7", "compile error"],
    answer: 1,
    explanation: "<code>len(s)</code> returns the number of bytes in the string. <code>\"gopher\"</code> has 6 ASCII characters, each 1 byte, so <code>len</code> is <code>6</code>."
  },

  {
    id: 37,
    difficulty: 1,
    topic: "Constants",
    code: `package main

const Pi = 3.14

func main() {
	println(Pi > 3)
}`,
    question: "What does this program print?",
    options: ["true", "false", "compile error", "runtime panic"],
    answer: 0,
    explanation: "Package-level constants are valid anywhere in the package. <code>Pi = 3.14 > 3</code> is <code>true</code>."
  },

  {
    id: 38,
    difficulty: 1,
    topic: "Constants",
    code: null,
    question: "Which of the following is true about typed constants in Go?",
    options: [
      "A typed constant can be assigned to any numeric variable without conversion",
      "A typed constant carries a specific type and must match that type in assignments",
      "Typed constants cannot be used in expressions",
      "Typed constants are always evaluated at runtime"
    ],
    answer: 1,
    explanation: "A typed constant (e.g. <code>const x int = 5</code>) carries its declared type. It must match the expected type in assignments and expressions, just like a regular variable."
  },

  {
    id: 39,
    difficulty: 1,
    topic: "Iota",
    code: `package main

const (
	A = iota
	B
	C
)

func main() {
	println(A, B, C)
}`,
    question: "What does this program print?",
    options: ["0 1 2", "1 2 3", "0 0 0", "compile error"],
    answer: 0,
    explanation: "<code>iota</code> starts at <code>0</code> in each <code>const</code> block and increments by 1 for each constant. A=0, B=1, C=2."
  },

  {
    id: 40,
    difficulty: 1,
    topic: "Iota",
    code: `package main

const (
	_  = iota
	KB = 1 << (10 * iota)
	MB
)

func main() {
	println(KB)
}`,
    question: "What does this program print?",
    options: ["10", "100", "1024", "compile error"],
    answer: 2,
    explanation: "The blank identifier <code>_</code> consumes iota=0. <code>KB</code> uses iota=1: <code>1 &lt;&lt; (10 * 1) = 1 &lt;&lt; 10 = 1024</code>."
  },

  {
    id: 41,
    difficulty: 1,
    topic: "Iota",
    code: null,
    question: "Which of the following is true about iota in Go?",
    options: [
      "iota resets to 0 at the start of each const block",
      "iota increments by 1 each time it is referenced in an expression",
      "iota can only be used with integer types",
      "iota is a built-in function"
    ],
    answer: 0,
    explanation: "<code>iota</code> resets to <code>0</code> at the beginning of each <code>const</code> block and increments by 1 for each ConstSpec (line) in the block, regardless of how many times it appears on a line."
  },

  {
    id: 42,
    difficulty: 1,
    topic: "If/Else",
    code: `package main

func main() {
	x := 10
	if x > 5 {
		println("big")
	} else {
		println("small")
	}
}`,
    question: "What does this program print?",
    options: ["big", "small", "compile error", "nothing"],
    answer: 0,
    explanation: "<code>x = 10 > 5</code> is true, so the <code>if</code> branch executes, printing <code>big</code>."
  },

  {
    id: 43,
    difficulty: 1,
    topic: "If/Else",
    code: `package main

func main() {
	if x := 4; x%2 == 0 {
		println("even")
	} else {
		println("odd")
	}
}`,
    question: "What does this program print?",
    options: ["even", "odd", "compile error", "4"],
    answer: 0,
    explanation: "An <code>if</code> statement can include a short init statement. <code>x = 4</code>, and <code>4 % 2 == 0</code> is true, so <code>even</code> is printed."
  },

  {
    id: 44,
    difficulty: 1,
    topic: "For Loop",
    code: `package main

func main() {
	i := 0
	for i < 3 {
		println(i)
		i++
	}
}`,
    question: "What does this program print?",
    options: ["0\n1\n2", "1\n2\n3", "0\n1\n2\n3", "compile error"],
    answer: 0,
    explanation: "A <code>for</code> loop with only a condition acts like a while loop. It prints 0, 1, 2 and stops when <code>i</code> reaches 3."
  },

  {
    id: 45,
    difficulty: 1,
    topic: "For Loop",
    code: `package main

func main() {
	for i := 0; i < 5; i++ {
		if i == 3 {
			break
		}
		println(i)
	}
}`,
    question: "What does this program print?",
    options: ["0\n1\n2\n3", "0\n1\n2", "1\n2\n3", "0\n1\n2\n3\n4"],
    answer: 1,
    explanation: "<code>break</code> exits the loop immediately when <code>i == 3</code>. Values 0, 1, and 2 are printed before that."
  },

  {
    id: 46,
    difficulty: 1,
    topic: "For Loop",
    code: `package main

func main() {
	for i := 0; i < 4; i++ {
		if i == 2 {
			continue
		}
		println(i)
	}
}`,
    question: "What does this program print?",
    options: ["0\n1\n2\n3", "0\n1\n3", "0\n2\n3", "1\n2\n3"],
    answer: 1,
    explanation: "<code>continue</code> skips the rest of the loop body for that iteration. When <code>i == 2</code>, the <code>println</code> is skipped, so only 0, 1, and 3 are printed."
  },

  {
    id: 47,
    difficulty: 1,
    topic: "Switch",
    code: `package main

func main() {
	x := 2
	switch x {
	case 1:
		println("one")
	case 2:
		println("two")
	case 3:
		println("three")
	}
}`,
    question: "What does this program print?",
    options: ["one", "two", "three", "compile error"],
    answer: 1,
    explanation: "The switch expression <code>x = 2</code> matches <code>case 2</code>, printing <code>two</code>. Unlike C, Go switch cases do not fall through by default."
  },

  {
    id: 48,
    difficulty: 1,
    topic: "Switch",
    code: `package main

func main() {
	x := 3
	switch x {
	case 1, 2:
		println("low")
	case 3, 4:
		println("high")
	default:
		println("other")
	}
}`,
    question: "What does this program print?",
    options: ["low", "high", "other", "compile error"],
    answer: 1,
    explanation: "A single <code>case</code> can list multiple values separated by commas. <code>x = 3</code> matches <code>case 3, 4</code>, printing <code>high</code>."
  },

  {
    id: 49,
    difficulty: 1,
    topic: "Switch",
    code: `package main

func main() {
	x := 7
	switch {
	case x < 5:
		println("small")
	case x < 10:
		println("medium")
	default:
		println("large")
	}
}`,
    question: "What does this program print?",
    options: ["small", "medium", "large", "compile error"],
    answer: 1,
    explanation: "A switch with no expression defaults to <code>true</code> and acts like an if-else chain. <code>x = 7</code>: the first case is false, the second (<code>7 &lt; 10</code>) is true, so <code>medium</code> is printed."
  },

  {
    id: 50,
    difficulty: 1,
    topic: "For-Range Slice",
    code: `package main

func main() {
	nums := []int{10, 20, 30}
	for i, v := range nums {
		println(i, v)
	}
}`,
    question: "What does this program print?",
    options: ["0 10\n1 20\n2 30", "10 20 30", "0 1 2", "compile error"],
    answer: 0,
    explanation: "<code>for i, v := range slice</code> yields the index and value of each element. The output is index and value on each line."
  },

  {
    id: 51,
    difficulty: 1,
    topic: "For-Range Slice",
    code: `package main

func main() {
	nums := []int{5, 10, 15}
	sum := 0
	for _, v := range nums {
		sum += v
	}
	println(sum)
}`,
    question: "What does this program print?",
    options: ["15", "30", "0", "compile error"],
    answer: 1,
    explanation: "The blank identifier <code>_</code> discards the index. The loop sums 5 + 10 + 15 = 30."
  },

  {
    id: 52,
    difficulty: 1,
    topic: "For-Range String",
    code: `package main

func main() {
	count := 0
	for range "hello" {
		count++
	}
	println(count)
}`,
    question: "What does this program print?",
    options: ["4", "5", "10", "compile error"],
    answer: 1,
    explanation: "Ranging over a string iterates over Unicode code points (runes), not bytes. <code>\"hello\"</code> has 5 ASCII characters = 5 runes, so <code>count</code> ends up as 5."
  },

  {
    id: 53,
    difficulty: 1,
    topic: "For-Range String",
    code: null,
    question: "Which of the following is true when using for-range over a string in Go?",
    options: [
      "It iterates over bytes, so len(s) iterations always occur",
      "It iterates over runes (Unicode code points), so multi-byte characters count as one iteration",
      "It panics on non-ASCII strings",
      "It returns the byte index and the byte value"
    ],
    answer: 1,
    explanation: "<code>for i, r := range s</code> decodes UTF-8 and yields each rune and its byte offset. A multi-byte character is a single iteration. Use a regular index loop to iterate over bytes."
  },

  {
    id: 54,
    difficulty: 1,
    topic: "Multiple Return Values",
    code: `package main

func minMax(a, b int) (int, int) {
	if a < b {
		return a, b
	}
	return b, a
}

func main() {
	lo, hi := minMax(7, 3)
	println(lo, hi)
}`,
    question: "What does this program print?",
    options: ["7 3", "3 7", "3 3", "compile error"],
    answer: 1,
    explanation: "<code>minMax(7, 3)</code>: since 7 is not less than 3, it returns <code>b, a = 3, 7</code>. So <code>lo = 3</code>, <code>hi = 7</code>."
  },

  {
    id: 55,
    difficulty: 1,
    topic: "Multiple Return Values",
    code: null,
    question: "Which of the following is true about multiple return values in Go?",
    options: [
      "Only the last return value can be used; the rest are discarded",
      "Functions can return multiple values, which must all be assigned or explicitly ignored with _",
      "Multiple return values are wrapped in a tuple type automatically",
      "Go only allows multiple returns if the function is variadic"
    ],
    answer: 1,
    explanation: "Go functions can return multiple values natively. At the call site, all returned values must either be assigned to variables or discarded with the blank identifier <code>_</code>."
  },

  {
    id: 56,
    difficulty: 1,
    topic: "Blank Identifier",
    code: `package main

func pair() (int, string) {
	return 42, "hello"
}

func main() {
	_, s := pair()
	println(s)
}`,
    question: "What does this program print?",
    options: ["42", "hello", "compile error", "42 hello"],
    answer: 1,
    explanation: "The blank identifier <code>_</code> discards the first return value (<code>42</code>). Only <code>s = \"hello\"</code> is kept, so <code>hello</code> is printed."
  },

  {
    id: 57,
    difficulty: 1,
    topic: "Variadic Functions",
    code: `package main

func sum(nums ...int) int {
	total := 0
	for _, n := range nums {
		total += n
	}
	return total
}

func main() {
	println(sum(1, 2, 3, 4))
}`,
    question: "What does this program print?",
    options: ["6", "10", "0", "compile error"],
    answer: 1,
    explanation: "A variadic function collects extra arguments into a slice. <code>sum(1, 2, 3, 4)</code> computes 1+2+3+4 = 10."
  },

  {
    id: 58,
    difficulty: 1,
    topic: "Variadic Functions",
    code: `package main

import "fmt"

func join(sep string, parts ...string) string {
	result := ""
	for i, p := range parts {
		if i > 0 {
			result += sep
		}
		result += p
	}
	return result
}

func main() {
	fmt.Println(join("-", "a", "b", "c"))
}`,
    question: "What does this program print?",
    options: ["a b c", "a-b-c", "abc", "compile error"],
    answer: 1,
    explanation: "The variadic <code>parts</code> receives <code>[\"a\", \"b\", \"c\"]</code>. The function joins them with <code>sep = \"-\"</code>, producing <code>a-b-c</code>."
  },

  {
    id: 59,
    difficulty: 1,
    topic: "Package-Level Variables",
    code: `package main

var greeting = "Hello, Go!"

func main() {
	println(greeting)
}`,
    question: "What does this program print?",
    options: ["Hello, Go!", "", "nil", "compile error"],
    answer: 0,
    explanation: "Package-level variables are initialized before <code>main</code> runs. <code>greeting</code> is set to <code>\"Hello, Go!\"</code> and is accessible from <code>main</code>."
  },

  {
    id: 60,
    difficulty: 1,
    topic: "Exported Names",
    code: null,
    question: "Which of the following is true about exported and unexported names in Go?",
    options: [
      "Names starting with a lowercase letter are exported and visible to other packages",
      "Names starting with an uppercase letter are exported and visible to other packages",
      "All names are exported by default; the underscore prefix makes them unexported",
      "Exported vs unexported only applies to functions, not variables or types"
    ],
    answer: 1,
    explanation: "In Go, a name is exported (visible outside its package) if it begins with an uppercase letter. Lowercase names are package-private. This applies to functions, types, variables, and constants."
  },

  {
    id: 61,
    difficulty: 1,
    topic: "Array Value Semantics",
    code: `package main

func main() {
	a := [3]int{1, 2, 3}
	b := a
	b[0] = 99
	println(a[0])
}`,
    question: "What does this program print?",
    options: ["1", "99", "compile error", "runtime panic"],
    answer: 0,
    explanation: "Arrays in Go are value types. <code>b := a</code> copies the entire array. Modifying <code>b[0]</code> does not affect <code>a</code>, so <code>a[0]</code> remains <code>1</code>."
  },

  {
    id: 62,
    difficulty: 1,
    topic: "Array Value Semantics",
    code: null,
    question: "Which of the following is true about arrays in Go?",
    options: [
      "Arrays are reference types; assigning an array copies a pointer to the backing data",
      "Arrays are value types; assigning an array copies all its elements",
      "Arrays grow automatically when you append to them",
      "Array length can be changed after declaration"
    ],
    answer: 1,
    explanation: "Unlike slices, Go arrays are value types. Assignment copies every element. The length is fixed at compile time and is part of the type (<code>[3]int</code> and <code>[4]int</code> are different types)."
  },

  {
    id: 63,
    difficulty: 1,
    topic: "Pointer Basics",
    code: `package main

func main() {
	x := 10
	p := &x
	*p = 20
	println(x)
}`,
    question: "What does this program print?",
    options: ["10", "20", "compile error", "runtime panic"],
    answer: 1,
    explanation: "<code>&x</code> gives the address of <code>x</code>. <code>*p = 20</code> dereferences the pointer and stores <code>20</code> at that address. <code>x</code> is now <code>20</code>."
  },

  {
    id: 64,
    difficulty: 1,
    topic: "Pointer Basics",
    code: `package main

func increment(p *int) {
	*p++
}

func main() {
	n := 5
	increment(&n)
	println(n)
}`,
    question: "What does this program print?",
    options: ["5", "6", "compile error", "runtime panic"],
    answer: 1,
    explanation: "<code>&n</code> passes the address of <code>n</code> to <code>increment</code>. Inside, <code>*p++</code> dereferences and increments the original variable. <code>n</code> becomes <code>6</code>."
  },

  // ─── Tier 2: Medium ─────────────────────────────────────────────

  {
    id: 65,
    difficulty: 2,
    topic: "Slice Append",
    code: `package main

import "fmt"

func main() {
	s := []int{1, 2, 3}
	t := append(s, 4)
	fmt.Println(len(s), len(t))
}`,
    question: "What does this program print?",
    options: ["3 4", "4 4", "3 3", "compile error"],
    answer: 0,
    explanation: "<code>append</code> returns a <em>new slice header</em>. The original <code>s</code> is unchanged (len=3); <code>t</code> holds the new slice with len=4. The slice header <code>s</code> is never modified by <code>append</code>."
  },

  {
    id: 66,
    difficulty: 2,
    topic: "Slice of Slice",
    code: `package main

import "fmt"

func main() {
	s := []int{10, 20, 30, 40, 50}
	t := s[1:3]
	fmt.Println(len(t), cap(t))
}`,
    question: "What does this program print?",
    options: ["2 4", "2 5", "2 2", "3 4"],
    answer: 0,
    explanation: "<code>t := s[1:3]</code> has len=2 (elements at indices 1 and 2). Capacity counts from the low index (1) to the end of the backing array (index 4): cap = 5 - 1 = 4."
  },

  {
    id: 67,
    difficulty: 2,
    topic: "copy()",
    code: `package main

import "fmt"

func main() {
	src := []int{1, 2, 3, 4, 5}
	dst := make([]int, 3)
	n := copy(dst, src)
	fmt.Println(n, dst)
}`,
    question: "What does this program print?",
    options: ["3 [1 2 3]", "5 [1 2 3 4 5]", "3 [1 2 3 4 5]", "5 [1 2 3]"],
    answer: 0,
    explanation: "<code>copy</code> copies <code>min(len(dst), len(src))</code> elements — here min(3, 5) = 3. It returns the count of copied elements (3). <code>dst</code> becomes <code>[1 2 3]</code>."
  },

  {
    id: 68,
    difficulty: 2,
    topic: "Nil Slice",
    code: `package main

import "fmt"

func main() {
	var s []int
	fmt.Println(s == nil, len(s))
	s = append(s, 1)
	fmt.Println(s == nil, len(s))
}`,
    question: "What does this program print?",
    options: ["true 0\nfalse 1", "false 0\nfalse 1", "true 0\ntrue 1", "runtime panic"],
    answer: 0,
    explanation: "A nil slice has len=0 and compares equal to nil. <code>append</code> on a nil slice is safe — it allocates a new backing array and returns a non-nil slice with len=1."
  },

  {
    id: 69,
    difficulty: 2,
    topic: "make() Slice",
    code: `package main

import "fmt"

func main() {
	s := make([]int, 3, 5)
	fmt.Println(len(s), cap(s), s)
}`,
    question: "What does this program print?",
    options: ["3 5 [0 0 0]", "5 5 [0 0 0 0 0]", "3 3 [0 0 0]", "0 5 []"],
    answer: 0,
    explanation: "<code>make([]int, 3, 5)</code> creates a slice with len=3 and cap=5. The three accessible elements are zero-initialized. The extra 2 slots of capacity are reserved but not yet accessible."
  },

  {
    id: 70,
    difficulty: 2,
    topic: "Shared Backing Array",
    code: `package main

import "fmt"

func main() {
	s := make([]int, 3, 6)
	t := append(s, 99)
	t[0] = 42
	fmt.Println(s[0], t[0])
}`,
    question: "What does this program print?",
    options: ["0 42", "42 42", "0 99", "42 99"],
    answer: 1,
    explanation: "Since <code>s</code> has len=3 and cap=6, appending to produce <code>t</code> does NOT allocate a new array — both share the same backing array. Setting <code>t[0] = 42</code> therefore also changes <code>s[0]</code>."
  },

  {
    id: 71,
    difficulty: 2,
    topic: "Spread Append",
    code: `package main

import "fmt"

func main() {
	a := []int{1, 2}
	b := []int{3, 4, 5}
	c := append(a, b...)
	fmt.Println(c)
}`,
    question: "What does this program print?",
    options: ["[1 2 [3 4 5]]", "[1 2 3 4 5]", "compile error", "[3 4 5 1 2]"],
    answer: 1,
    explanation: "The <code>...</code> operator unpacks slice <code>b</code> into individual arguments for <code>append</code>. The result is a new slice containing all elements of <code>a</code> followed by all elements of <code>b</code>."
  },

  {
    id: 72,
    difficulty: 2,
    topic: "Map ok Idiom",
    code: `package main

import "fmt"

func main() {
	m := map[string]int{"a": 1}
	v, ok := m["b"]
	fmt.Println(v, ok)
}`,
    question: "What does this program print?",
    options: ["0 false", "0 true", "<nil> false", "runtime panic"],
    answer: 0,
    explanation: "When a key doesn't exist, the two-value map lookup returns the zero value for the value type (<code>0</code> for int) and <code>false</code> for the ok boolean. This is the idiomatic way to distinguish a missing key from a key whose value happens to be zero."
  },

  {
    id: 73,
    difficulty: 2,
    topic: "delete()",
    code: `package main

import "fmt"

func main() {
	m := map[string]int{"a": 1, "b": 2}
	delete(m, "a")
	delete(m, "z")
	fmt.Println(len(m))
}`,
    question: "What does this program print?",
    options: ["1", "2", "0", "runtime panic"],
    answer: 0,
    explanation: "<code>delete(m, \"a\")</code> removes the key <code>\"a\"</code>, leaving one entry. <code>delete</code> on a non-existent key (<code>\"z\"</code>) is a no-op — it does not panic. So <code>len(m)</code> is 1."
  },

  {
    id: 74,
    difficulty: 2,
    topic: "Map Reference",
    code: `package main

import "fmt"

func addKey(m map[string]int) {
	m["x"] = 99
}

func main() {
	m := map[string]int{}
	addKey(m)
	fmt.Println(m["x"])
}`,
    question: "What does this program print?",
    options: ["99", "0", "compile error", "runtime panic"],
    answer: 0,
    explanation: "Maps are reference types. Passing a map to a function passes a reference to the same underlying hash table. Modifications inside <code>addKey</code> are visible to <code>main</code> — the result is 99."
  },

  {
    id: 75,
    difficulty: 2,
    topic: "Struct Literals",
    code: `package main

import "fmt"

type Point struct {
	X, Y int
}

func main() {
	p := Point{Y: 10}
	fmt.Println(p.X, p.Y)
}`,
    question: "What does this program print?",
    options: ["0 10", "10 0", "0 0", "compile error"],
    answer: 0,
    explanation: "Named struct literals initialize only specified fields; unspecified fields receive their zero values. <code>X</code> is not given, so it is 0. <code>Y</code> is explicitly set to 10."
  },

  {
    id: 76,
    difficulty: 2,
    topic: "Value Receiver",
    code: `package main

import "fmt"

type Counter struct{ n int }

func (c Counter) Inc() { c.n++ }

func main() {
	c := Counter{n: 0}
	c.Inc()
	fmt.Println(c.n)
}`,
    question: "What does this program print?",
    options: ["0", "1", "2", "compile error"],
    answer: 0,
    explanation: "<code>Inc</code> has a <em>value receiver</em> — it operates on a copy of <code>c</code>. Incrementing <code>c.n</code> inside <code>Inc</code> only modifies the local copy. The original <code>c.n</code> stays 0."
  },

  {
    id: 77,
    difficulty: 2,
    topic: "Pointer Receiver",
    code: `package main

import "fmt"

type Counter struct{ n int }

func (c *Counter) Inc() { c.n++ }

func main() {
	c := Counter{n: 0}
	c.Inc()
	fmt.Println(c.n)
}`,
    question: "What does this program print?",
    options: ["0", "1", "2", "compile error"],
    answer: 1,
    explanation: "<code>Inc</code> has a <em>pointer receiver</em> — it receives the address of <code>c</code> and modifies the original struct. Go automatically takes the address when calling: <code>(&c).Inc()</code>. So <code>c.n</code> becomes 1."
  },

  {
    id: 78,
    difficulty: 2,
    topic: "Embedded Struct",
    code: `package main

import "fmt"

type Animal struct{ Name string }

func (a Animal) Speak() string { return a.Name + " speaks" }

type Dog struct{ Animal }

func main() {
	d := Dog{Animal: Animal{Name: "Rex"}}
	fmt.Println(d.Speak())
}`,
    question: "What does this program print?",
    options: ["Rex speaks", " speaks", "compile error", "runtime panic"],
    answer: 0,
    explanation: "Embedding <code>Animal</code> in <code>Dog</code> promotes <code>Animal</code>'s fields and methods onto <code>Dog</code>. <code>d.Speak()</code> is shorthand for <code>d.Animal.Speak()</code>, which returns <code>\"Rex speaks\"</code>."
  },

  {
    id: 79,
    difficulty: 2,
    topic: "Struct Comparison",
    code: `package main

import "fmt"

type Point struct{ X, Y int }

func main() {
	p1 := Point{1, 2}
	p2 := Point{1, 2}
	fmt.Println(p1 == p2)
}`,
    question: "What does this program print?",
    options: ["true", "false", "compile error", "runtime panic"],
    answer: 0,
    explanation: "Structs are comparable with <code>==</code> if all fields are comparable types. Two struct values are equal when all corresponding fields are equal. Here both fields match, so the result is <code>true</code>."
  },

  {
    id: 80,
    difficulty: 2,
    topic: "Method on Named Type",
    code: `package main

import "fmt"

type MyInt int

func (m MyInt) Double() MyInt { return m * 2 }

func main() {
	var x MyInt = 7
	fmt.Println(x.Double())
}`,
    question: "What does this program print?",
    options: ["7", "14", "compile error", "runtime panic"],
    answer: 1,
    explanation: "You can define methods on any named type, not just structs. <code>MyInt</code> is a named type based on <code>int</code>. <code>Double()</code> returns <code>7 * 2 = 14</code>."
  },

  {
    id: 81,
    difficulty: 2,
    topic: "Interface Satisfaction",
    code: `package main

import "fmt"

type Greeter interface {
	Greet() string
}

type English struct{}

func (e English) Greet() string { return "Hello" }

func sayHi(g Greeter) {
	fmt.Println(g.Greet())
}

func main() {
	sayHi(English{})
}`,
    question: "What does this program print?",
    options: ["Hello", "compile error", "runtime panic", "Greet"],
    answer: 0,
    explanation: "Interface satisfaction in Go is implicit — no <code>implements</code> keyword is needed. <code>English</code> has a <code>Greet() string</code> method, so it automatically satisfies <code>Greeter</code> and can be passed to <code>sayHi</code>."
  },

  {
    id: 82,
    difficulty: 2,
    topic: "Empty Interface",
    code: `package main

import "fmt"

func main() {
	var i interface{} = 42
	fmt.Println(i)
	i = "hello"
	fmt.Println(i)
}`,
    question: "What does this program print?",
    options: ["42\nhello", "int\nstring", "interface{}\ninterface{}", "compile error"],
    answer: 0,
    explanation: "<code>interface{}</code> (also written <code>any</code>) can hold any value. Assigning a new value to <code>i</code> replaces the old one. <code>fmt.Println</code> prints the concrete value, not the type."
  },

  {
    id: 83,
    difficulty: 2,
    topic: "Type Assertion",
    code: `package main

import "fmt"

func main() {
	var i interface{} = "hello"
	s, ok := i.(string)
	n, ok2 := i.(int)
	fmt.Println(s, ok, n, ok2)
}`,
    question: "What does this program print?",
    options: ["hello true 0 false", "hello true <nil> false", "compile error", "runtime panic"],
    answer: 0,
    explanation: "The comma-ok type assertion <code>v, ok := i.(T)</code> never panics. When the assertion succeeds <code>ok=true</code> and <code>v</code> holds the value. When it fails <code>ok=false</code> and <code>v</code> is the zero value for T (<code>0</code> for int)."
  },

  {
    id: 84,
    difficulty: 2,
    topic: "Type Switch",
    code: `package main

import "fmt"

func whatIs(i interface{}) string {
	switch i.(type) {
	case int:
		return "int"
	case string:
		return "string"
	default:
		return "other"
	}
}

func main() {
	fmt.Println(whatIs(3))
	fmt.Println(whatIs("go"))
	fmt.Println(whatIs(true))
}`,
    question: "What does this program print?",
    options: ["int\nstring\nother", "3\ngo\ntrue", "compile error", "runtime panic"],
    answer: 0,
    explanation: "A type switch inspects the dynamic type of an interface value. <code>3</code> matches <code>case int</code>, <code>\"go\"</code> matches <code>case string</code>, <code>true</code> falls through to <code>default</code>."
  },

  {
    id: 85,
    difficulty: 2,
    topic: "Closure Capture",
    code: `package main

import "fmt"

func main() {
	funcs := make([]func(), 3)
	for i := 0; i < 3; i++ {
		i := i
		funcs[i] = func() { fmt.Println(i) }
	}
	funcs[0]()
	funcs[1]()
	funcs[2]()
}`,
    question: "What does this program print?",
    options: ["0\n1\n2", "2\n2\n2", "0\n0\n0", "compile error"],
    answer: 0,
    explanation: "<code>i := i</code> inside the loop creates a new variable scoped to each iteration. Each closure captures its own copy of <code>i</code>, so they print 0, 1, 2 in order. Without the shadowing line, all closures would capture the same loop variable and print 2, 2, 2."
  },

  {
    id: 86,
    difficulty: 2,
    topic: "Closure Factory",
    code: `package main

import "fmt"

func makeAdder(x int) func(int) int {
	return func(y int) int { return x + y }
}

func main() {
	add5 := makeAdder(5)
	add10 := makeAdder(10)
	fmt.Println(add5(3), add10(3))
}`,
    question: "What does this program print?",
    options: ["8 13", "3 3", "5 10", "compile error"],
    answer: 0,
    explanation: "<code>makeAdder</code> returns a closure that captures <code>x</code>. <code>add5</code> captures x=5, <code>add10</code> captures x=10. Calling each with argument 3: 5+3=8 and 10+3=13."
  },

  {
    id: 87,
    difficulty: 2,
    topic: "IIFE",
    code: `package main

import "fmt"

func main() {
	result := func(a, b int) int {
		return a * b
	}(6, 7)
	fmt.Println(result)
}`,
    question: "What does this program print?",
    options: ["42", "13", "compile error", "0"],
    answer: 0,
    explanation: "This is an immediately invoked function expression (IIFE). The function literal is defined and called in one step with arguments (6, 7). The result is 6 × 7 = 42, assigned to <code>result</code>."
  },

  {
    id: 88,
    difficulty: 2,
    topic: "init() Function",
    code: `package main

import "fmt"

var msg string

func init() {
	msg = "initialized"
}

func main() {
	fmt.Println(msg)
}`,
    question: "What does this program print?",
    options: ["initialized", "", "compile error", "runtime panic"],
    answer: 0,
    explanation: "<code>init()</code> runs automatically before <code>main()</code>, after all package-level variables are set up. It assigns <code>msg = \"initialized\"</code>, so <code>main</code> prints that string."
  },

  {
    id: 89,
    difficulty: 2,
    topic: "Defer LIFO Pattern",
    code: `package main

import "fmt"

func cleanup(s string) { fmt.Println("closing:", s) }

func main() {
	defer cleanup("file")
	defer cleanup("db")
	defer cleanup("conn")
	fmt.Println("working")
}`,
    question: "What does this program print?",
    options: [
      "working\nclosing: conn\nclosing: db\nclosing: file",
      "working\nclosing: file\nclosing: db\nclosing: conn",
      "closing: conn\nclosing: db\nclosing: file\nworking",
      "compile error"
    ],
    answer: 0,
    explanation: "Deferred calls run in LIFO order after the function returns. <code>main</code> prints <code>working</code>, then defers execute in reverse registration order: conn → db → file."
  },

  {
    id: 90,
    difficulty: 2,
    topic: "Defer Arg Immediate",
    code: `package main

import "fmt"

func main() {
	s := "start"
	defer fmt.Println(s)
	s = "end"
	fmt.Println(s)
}`,
    question: "What does this program print?",
    options: ["end\nstart", "start\nend", "end\nend", "start\nstart"],
    answer: 0,
    explanation: "The argument to <code>defer fmt.Println(s)</code> is evaluated <em>immediately</em> at the defer statement — <code>s</code> is <code>\"start\"</code> then. Later <code>fmt.Println(s)</code> (with s=\"end\") runs first, then the deferred call prints <code>\"start\"</code>."
  },

  {
    id: 91,
    difficulty: 2,
    topic: "Named Return + Defer",
    code: `package main

import "fmt"

func double() (result int) {
	defer func() {
		result *= 2
	}()
	result = 5
	return
}

func main() {
	fmt.Println(double())
}`,
    question: "What does this program print?",
    options: ["5", "10", "0", "compile error"],
    answer: 1,
    explanation: "The bare <code>return</code> sets the named return <code>result = 5</code>. The deferred closure then runs and doubles it: <code>result = 5 * 2 = 10</code>. Deferred closures can read and modify named return values."
  },

  {
    id: 92,
    difficulty: 2,
    topic: "Recover from Panic",
    code: `package main

import "fmt"

func safeDiv(a, b int) (result int, err error) {
	defer func() {
		if r := recover(); r != nil {
			err = fmt.Errorf("recovered: %v", r)
		}
	}()
	return a / b, nil
}

func main() {
	result, err := safeDiv(10, 0)
	fmt.Println(result, err != nil)
}`,
    question: "What does this program print?",
    options: ["0 true", "10 false", "runtime panic", "0 false"],
    answer: 0,
    explanation: "Division by zero causes a panic. The deferred function calls <code>recover()</code>, stopping the panic propagation and returning the panic value. <code>err</code> is set to a non-nil error, so the output is <code>0 true</code>."
  },

  {
    id: 93,
    difficulty: 2,
    topic: "errors.New",
    code: `package main

import (
	"errors"
	"fmt"
)

func divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, errors.New("division by zero")
	}
	return a / b, nil
}

func main() {
	_, err := divide(5, 0)
	fmt.Println(err)
}`,
    question: "What does this program print?",
    options: ["division by zero", "<nil>", "0", "compile error"],
    answer: 0,
    explanation: "<code>errors.New</code> creates an error value with the given message string. When printed, <code>fmt.Println</code> calls the error's <code>Error() string</code> method, producing <code>division by zero</code>."
  },

  {
    id: 94,
    difficulty: 2,
    topic: "Error nil Check",
    code: `package main

import (
	"errors"
	"fmt"
)

func mayFail(fail bool) error {
	if fail {
		return errors.New("oops")
	}
	return nil
}

func main() {
	if err := mayFail(false); err != nil {
		fmt.Println("error:", err)
	} else {
		fmt.Println("ok")
	}
}`,
    question: "What does this program print?",
    options: ["ok", "error: oops", "compile error", "runtime panic"],
    answer: 0,
    explanation: "<code>mayFail(false)</code> returns <code>nil</code>. The <code>err != nil</code> check is false, so the <code>else</code> branch runs and prints <code>ok</code>. This is idiomatic Go error handling: check for nil before using the error."
  },

  {
    id: 95,
    difficulty: 2,
    topic: "Custom Error Type",
    code: `package main

import "fmt"

type ValidationError struct {
	Field   string
	Message string
}

func (e *ValidationError) Error() string {
	return e.Field + ": " + e.Message
}

func main() {
	err := &ValidationError{Field: "email", Message: "invalid"}
	fmt.Println(err)
}`,
    question: "What does this program print?",
    options: ["email: invalid", "&{email invalid}", "compile error", "runtime panic"],
    answer: 0,
    explanation: "<code>fmt.Println</code> checks if the value implements the <code>error</code> interface (has an <code>Error() string</code> method). It does, so it calls <code>Error()</code> which returns <code>\"email: invalid\"</code>."
  },

  {
    id: 96,
    difficulty: 2,
    topic: "strconv",
    code: `package main

import (
	"fmt"
	"strconv"
)

func main() {
	n, err := strconv.Atoi("123")
	fmt.Println(n, err)
	s := strconv.Itoa(456)
	fmt.Println(s)
}`,
    question: "What does this program print?",
    options: ["123 <nil>\n456", "\"123\" <nil>\n456", "compile error", "runtime panic"],
    answer: 0,
    explanation: "<code>strconv.Atoi</code> parses a string as a base-10 integer. <code>\"123\"</code> succeeds, giving <code>123</code> and a nil error, printed as <code>123 &lt;nil&gt;</code>. <code>strconv.Itoa</code> converts an int to a string, giving <code>\"456\"</code>."
  },

  {
    id: 97,
    difficulty: 2,
    topic: "strings Package",
    code: `package main

import (
	"fmt"
	"strings"
)

func main() {
	s := "go,is,fun"
	parts := strings.Split(s, ",")
	fmt.Println(len(parts), strings.Join(parts, "-"))
}`,
    question: "What does this program print?",
    options: ["3 go-is-fun", "2 go-is-fun", "3 go,is,fun", "compile error"],
    answer: 0,
    explanation: "<code>strings.Split(\"go,is,fun\", \",\")</code> produces the slice <code>[\"go\", \"is\", \"fun\"]</code> — 3 elements. <code>strings.Join</code> with separator <code>\"-\"</code> reassembles it as <code>\"go-is-fun\"</code>."
  },

  {
    id: 98,
    difficulty: 2,
    topic: "fmt.Sprintf",
    code: `package main

import "fmt"

func main() {
	name := "Go"
	version := 1.22
	s := fmt.Sprintf("Hello, %s %.2f!", name, version)
	fmt.Println(s)
}`,
    question: "What does this program print?",
    options: ["Hello, Go 1.22!", "Hello, %s %.2f!", "Hello, Go 1.2200!", "compile error"],
    answer: 0,
    explanation: "<code>fmt.Sprintf</code> formats a string without printing it. <code>%s</code> inserts the string <code>\"Go\"</code>, and <code>%.2f</code> formats the float with exactly 2 decimal places (<code>1.22</code>), giving <code>\"Hello, Go 1.22!\"</code>."
  },

  {
    id: 99,
    difficulty: 2,
    topic: "sort.Ints",
    code: `package main

import (
	"fmt"
	"sort"
)

func main() {
	s := []int{5, 2, 8, 1, 9}
	sort.Ints(s)
	fmt.Println(s)
}`,
    question: "What does this program print?",
    options: ["[1 2 5 8 9]", "[9 8 5 2 1]", "[5 2 8 1 9]", "compile error"],
    answer: 0,
    explanation: "<code>sort.Ints</code> sorts a slice of ints in ascending order, modifying the slice in place. The result is <code>[1 2 5 8 9]</code>."
  },

  {
    id: 100,
    difficulty: 2,
    topic: "strings.Builder",
    code: `package main

import (
	"fmt"
	"strings"
)

func main() {
	var b strings.Builder
	for _, w := range []string{"Go", "is", "great"} {
		b.WriteString(w)
		b.WriteByte(' ')
	}
	fmt.Println(strings.TrimSpace(b.String()))
}`,
    question: "What does this program print?",
    options: ["Go is great", "Go is great ", "Goisgreat", "compile error"],
    answer: 0,
    explanation: "<code>strings.Builder</code> efficiently builds strings. Each word and a trailing space are written, producing <code>\"Go is great \"</code>. <code>strings.TrimSpace</code> removes the trailing space, giving <code>\"Go is great\"</code>."
  },

  {
    id: 101,
    difficulty: 2,
    topic: "Pointer vs Value Receiver",
    code: null,
    question: "When should you prefer a pointer receiver over a value receiver for a method?",
    options: [
      "Always use pointer receivers for better performance regardless of whether the method modifies the struct",
      "Use a pointer receiver when the method needs to modify the receiver, or when the struct is large and copying is expensive",
      "Use a pointer receiver only when the struct contains a pointer field",
      "Value receivers and pointer receivers have identical behavior in all cases"
    ],
    answer: 1,
    explanation: "Pointer receivers are preferred when: (1) the method must modify the receiver, (2) the struct is large and copying is expensive, or (3) consistency — if some methods need pointer receivers, use them for all methods on that type. Small, immutable structs can use value receivers."
  },

  {
    id: 102,
    difficulty: 2,
    topic: "Interface nil Trap",
    code: null,
    question: "An interface value in Go is nil only when:",
    options: [
      "The underlying concrete value is nil",
      "Both the dynamic type and dynamic value stored in the interface are nil",
      "The interface variable has not been assigned",
      "The interface has no methods defined"
    ],
    answer: 1,
    explanation: "An interface value is internally a pair: (type, value). It is nil only when <em>both</em> components are nil. Storing a nil concrete pointer in an interface gives (type=*MyStruct, value=nil) — a non-nil interface. This is a common Go gotcha when returning typed nil pointers as errors."
  },

  {
    id: 103,
    difficulty: 2,
    topic: "Map Iteration Order",
    code: null,
    question: "What is the iteration order of keys when using `for k, v := range m` over a map in Go?",
    options: [
      "Alphabetical/ascending order by key",
      "Insertion order — first inserted, first iterated",
      "Random — not guaranteed to be consistent between iterations or runs",
      "Sorted by value"
    ],
    answer: 2,
    explanation: "Map iteration order in Go is intentionally randomized to prevent programs from depending on a specific order. The Go specification explicitly states the iteration order is not defined. If you need deterministic order, collect keys into a slice, sort it, then iterate the slice."
  },

  {
    id: 104,
    difficulty: 2,
    topic: "Goroutines",
    code: null,
    question: "Which statement best describes goroutines compared to OS threads?",
    options: [
      "Goroutines are identical to OS threads — one goroutine always maps to exactly one OS thread",
      "Goroutines are user-space constructs multiplexed onto a small pool of OS threads by the Go runtime scheduler",
      "Goroutines always run sequentially — the runtime runs only one at a time",
      "Each goroutine requires an explicit 8 MB stack allocation, same as an OS thread"
    ],
    answer: 1,
    explanation: "Goroutines are lightweight user-space concurrency units managed by the Go runtime (not the OS). They start with a small stack (~2–4 KB) that grows on demand. The runtime scheduler multiplexes many goroutines onto a pool of OS threads controlled by <code>GOMAXPROCS</code>, making them far cheaper to create than OS threads."
  },

  {
    id: 105,
    difficulty: 2,
    topic: "Buffered Channels",
    code: null,
    question: "What is the key difference between a buffered channel `make(chan int, 3)` and an unbuffered channel `make(chan int)`?",
    options: [
      "Buffered channels can store multiple types; unbuffered channels are single-type only",
      "A send on a buffered channel blocks only when the buffer is full; a send on an unbuffered channel blocks until a receiver is ready",
      "Unbuffered channels cannot be closed; buffered channels can be closed",
      "Buffered channels internally spawn extra goroutines"
    ],
    answer: 1,
    explanation: "An unbuffered channel requires both a sender and receiver to be ready at the same time (synchronous handoff). A buffered channel acts like a queue — a send only blocks when the buffer is full, and a receive only blocks when the buffer is empty. This decouples the sender from the receiver."
  },

  {
    id: 106,
    difficulty: 2,
    topic: "Closed Channel",
    code: `package main

import "fmt"

func main() {
	ch := make(chan int, 2)
	ch <- 10
	close(ch)
	v1, ok1 := <-ch
	v2, ok2 := <-ch
	fmt.Println(v1, ok1, v2, ok2)
}`,
    question: "What does this program print?",
    options: ["10 true 0 false", "10 false 0 false", "10 true 0 true", "runtime panic"],
    answer: 0,
    explanation: "Receiving from a closed buffered channel first drains any remaining values. The first receive gets <code>10, true</code>. The second receive — with the buffer empty and channel closed — returns <code>0, false</code> (zero value plus false to signal closure)."
  },

  {
    id: 107,
    difficulty: 2,
    topic: "sync.Mutex",
    code: `package main

import (
	"fmt"
	"sync"
)

type SafeCounter struct {
	mu sync.Mutex
	n  int
}

func (c *SafeCounter) Inc() {
	c.mu.Lock()
	c.n++
	c.mu.Unlock()
}

func main() {
	c := SafeCounter{}
	var wg sync.WaitGroup
	for i := 0; i < 5; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			c.Inc()
		}()
	}
	wg.Wait()
	fmt.Println(c.n)
}`,
    question: "What does this program print?",
    options: ["5", "a non-deterministic value between 1 and 5", "0", "compile error"],
    answer: 0,
    explanation: "The <code>sync.Mutex</code> ensures only one goroutine increments <code>n</code> at a time, preventing data races. <code>sync.WaitGroup</code> waits for all 5 goroutines to finish. The result is deterministically 5."
  },

  {
    id: 108,
    difficulty: 2,
    topic: "Append Allocation",
    code: null,
    question: "When does `append` allocate a new backing array?",
    options: [
      "Every time append is called, regardless of capacity",
      "Only when the slice's length equals its capacity — there is no room for the new elements",
      "Only when the slice is nil",
      "When the slice grows beyond 1024 elements"
    ],
    answer: 1,
    explanation: "If <code>len(s) &lt; cap(s)</code>, <code>append</code> extends the length in place without allocating. A new backing array is only allocated when <code>len == cap</code> and there is no room for the new elements. This means a sub-slice and the original can silently share memory until an append forces reallocation."
  },

  {
    id: 109,
    difficulty: 2,
    topic: "Array vs Slice",
    code: null,
    question: "Which statement correctly describes the difference between arrays and slices in Go?",
    options: [
      "Arrays and slices are interchangeable — slices are just shorter arrays",
      "Arrays have a fixed size that is part of their type; slices are dynamically-sized descriptors over an underlying array",
      "Slices are value types; arrays are reference types",
      "Arrays can be nil; slices cannot be nil"
    ],
    answer: 1,
    explanation: "An array's size is part of its type — <code>[3]int</code> and <code>[4]int</code> are distinct types. Arrays are value types and are copied on assignment. Slices are three-word descriptors (pointer, length, capacity) that reference a backing array and can grow via <code>append</code>. A slice can be nil; an array value cannot."
  },

  {
    id: 110,
    difficulty: 2,
    topic: "range Returns",
    code: null,
    question: "What values does `range` return when iterating over a slice vs a map?",
    options: [
      "Slice: (value only); Map: (key only)",
      "Slice: (index int, value T); Map: (key K, value V)",
      "Both slices and maps return (index, value) only",
      "Slice: (key, value); Map: (index, value)"
    ],
    answer: 1,
    explanation: "For slices: <code>for i, v := range slice</code> yields an integer index and the element value. For maps: <code>for k, v := range m</code> yields the key and value. In both cases you can use <code>_</code> to discard either variable, or omit the second to get only the index/key."
  },

  {
    id: 111,
    difficulty: 2,
    topic: "Panic vs Error",
    code: null,
    question: "When should you use `panic` instead of returning an `error` in Go?",
    options: [
      "Whenever a function can fail — panic is simpler than propagating errors",
      "For unrecoverable programmer bugs and invariant violations; return errors for expected, recoverable failures",
      "Only for network and I/O failures",
      "Panic and error are interchangeable — choose whichever is more convenient"
    ],
    answer: 1,
    explanation: "<code>error</code> is for expected, recoverable failures callers should handle (file not found, invalid input, timeouts). <code>panic</code> is reserved for programming errors and violated invariants — situations that must never occur if the code is correct (nil dereference, out-of-bounds access). Libraries should rarely panic."
  },

  {
    id: 112,
    difficulty: 2,
    topic: "Package Init Order",
    code: null,
    question: "In which order does Go initialize a package?",
    options: [
      "init() functions first, then package-level variables, then main()",
      "Package-level variables (in declaration order), then init() functions (in source order), then main()",
      "main() first, then init() functions, then package-level variables",
      "All three are initialized concurrently"
    ],
    answer: 1,
    explanation: "Go's initialization order: (1) imported packages are fully initialized first, (2) package-level variables are initialized in declaration order (with dependency analysis), (3) all <code>init()</code> functions in a package run in the order they appear across source files, (4) finally <code>main()</code> runs. A file can have multiple <code>init()</code> functions."
  },

  {
    id: 113,
    difficulty: 2,
    topic: "Method Sets",
    code: null,
    question: "If type T has value receiver methods and *T has pointer receiver methods, which statement is true?",
    options: [
      "Both T and *T can call all methods in all contexts",
      "A value of type T can call both value and pointer receiver methods; *T can only call pointer receiver methods",
      "A *T can call both value and pointer receiver methods; a value T can only call value receiver methods",
      "Value and pointer receivers have the same method set in all contexts"
    ],
    answer: 2,
    explanation: "The method set of <code>*T</code> includes all methods with value <em>or</em> pointer receivers. The method set of <code>T</code> includes only value receiver methods. An addressable <code>T</code> value can call pointer receiver methods syntactically (Go auto-takes the address), but when assigned to an interface, the formal method set applies — so an interface holding a <code>T</code> value cannot satisfy an interface requiring pointer receiver methods."
  },

  {
    id: 114,
    difficulty: 2,
    topic: "strings.TrimSpace",
    code: `package main

import (
	"fmt"
	"strings"
)

func main() {
	s := strings.TrimSpace("  hello world  ")
	fmt.Println(len(s))
}`,
    question: "What does this program print?",
    options: ["9", "11", "15", "compile error"],
    answer: 1,
    explanation: "<code>strings.TrimSpace</code> removes leading and trailing whitespace. <code>\"hello world\"</code> is 11 bytes, so <code>len(s) = 11</code>."
  },

  // ─── Tier 3: Hard (extended) ────────────────────────────────────

  {
    id: 115,
    difficulty: 3,
    topic: "Buffered Channels",
    code: `package main

import "fmt"

func main() {
	ch := make(chan int, 3)
	ch <- 10
	ch <- 20
	ch <- 30
	fmt.Println(<-ch)
	fmt.Println(<-ch)
}`,
    question: "What does this program print?",
    options: ["10\n20", "30\n20", "10\n30", "20\n30"],
    answer: 0,
    explanation: "A buffered channel acts as a FIFO queue. The first receive returns <code>10</code>, the second returns <code>20</code>."
  },

  {
    id: 116,
    difficulty: 3,
    topic: "select with default",
    code: `package main

import "fmt"

func main() {
	ch := make(chan string, 1)
	select {
	case msg := <-ch:
		fmt.Println("received:", msg)
	default:
		fmt.Println("no message")
	}
}`,
    question: "What does this program print?",
    options: ["received: ", "no message", "received: <nil>", "deadlock"],
    answer: 1,
    explanation: "The channel is empty. <code>select</code>'s <code>default</code> fires immediately when no other case is ready."
  },

  {
    id: 117,
    difficulty: 3,
    topic: "Close + for-range",
    code: `package main

import "fmt"

func main() {
	ch := make(chan int, 3)
	ch <- 1
	ch <- 2
	ch <- 3
	close(ch)
	for v := range ch {
		fmt.Println(v)
	}
}`,
    question: "What does this program print?",
    options: ["1\n2\n3", "1\n2\n3\n0", "panic: send on closed channel", "deadlock"],
    answer: 0,
    explanation: "<code>for range</code> on a closed buffered channel drains all remaining values then terminates — the zero value is not emitted after close."
  },

  {
    id: 118,
    difficulty: 3,
    topic: "Receive from Closed Empty Channel",
    code: `package main

import "fmt"

func main() {
	ch := make(chan int, 2)
	close(ch)
	v, ok := <-ch
	fmt.Println(v, ok)
}`,
    question: "What does this program print?",
    options: ["0 true", "0 false", "panic: receive from closed channel", "deadlock"],
    answer: 1,
    explanation: "Receiving from a closed, empty channel returns the zero value of the element type and <code>false</code>."
  },

  {
    id: 119,
    difficulty: 3,
    topic: "Receive from Closed Non-Empty Channel",
    code: `package main

import "fmt"

func main() {
	ch := make(chan string, 2)
	ch <- "hello"
	close(ch)
	v, ok := <-ch
	fmt.Println(v, ok)
}`,
    question: "What does this program print?",
    options: ["hello false", "hello true", " false", "panic"],
    answer: 1,
    explanation: "Closing a buffered channel does not discard its buffered values. Receiving from a closed but non-empty channel returns the next value and <code>true</code>."
  },

  {
    id: 120,
    difficulty: 3,
    topic: "Channel Direction",
    code: `package main

import "fmt"

func send(ch chan<- int, v int) { ch <- v }
func recv(ch <-chan int) int    { return <-ch }

func main() {
	ch := make(chan int, 1)
	send(ch, 42)
	fmt.Println(recv(ch))
}`,
    question: "What does this program print?",
    options: ["42", "0", "compile error: cannot convert ch", "deadlock"],
    answer: 0,
    explanation: "A bidirectional <code>chan int</code> is assignable to both <code>chan<-</code> and <code><-chan</code> directional types. The send and receive work as expected."
  },

  {
    id: 121,
    difficulty: 3,
    topic: "sync.WaitGroup",
    code: `package main

import (
	"fmt"
	"sync"
)

func main() {
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println("worker")
	}()
	wg.Wait()
	fmt.Println("done")
}`,
    question: "What does this program print?",
    options: ["done", "worker\ndone", "done\nworker", "worker"],
    answer: 1,
    explanation: "<code>wg.Wait()</code> blocks until the counter reaches zero. The goroutine prints <code>\"worker\"</code> and calls <code>wg.Done()</code> before <code>wg.Wait()</code> unblocks and <code>\"done\"</code> is printed."
  },

  {
    id: 122,
    difficulty: 3,
    topic: "sync.Once",
    code: `package main

import (
	"fmt"
	"sync"
)

func main() {
	var once sync.Once
	for i := 0; i < 4; i++ {
		once.Do(func() { fmt.Println("init") })
	}
	fmt.Println("end")
}`,
    question: "What does this program print?",
    options: ["init\nend", "init\ninit\ninit\ninit\nend", "end", "init\ninit\nend"],
    answer: 0,
    explanation: "<code>sync.Once.Do</code> guarantees the function runs exactly once regardless of how many times <code>Do</code> is called."
  },

  {
    id: 123,
    difficulty: 3,
    topic: "sync.Mutex",
    code: `package main

import (
	"fmt"
	"sync"
)

func main() {
	var mu sync.Mutex
	x := 0
	mu.Lock()
	x = 42
	mu.Unlock()
	fmt.Println(x)
}`,
    question: "What does this program print?",
    options: ["0", "42", "deadlock", "compile error"],
    answer: 1,
    explanation: "<code>mu.Lock()</code> acquires the mutex, the assignment runs, <code>mu.Unlock()</code> releases it. Sequential in a single goroutine — straightforward."
  },

  {
    id: 124,
    difficulty: 3,
    topic: "Goroutine Leak",
    code: null,
    question: "Which best describes a goroutine leak?",
    options: [
      "A goroutine panics without recover, crashing the program",
      "A goroutine is blocked forever on a channel that will never be sent to or closed, keeping it alive indefinitely",
      "A goroutine runs after main() returns and causes a data race",
      "A goroutine consumes 100% CPU due to a tight loop"
    ],
    answer: 1,
    explanation: "A goroutine leak occurs when a goroutine is blocked indefinitely — typically waiting on a channel nobody will ever send to or close. It stays allocated in memory for the lifetime of the process."
  },

  {
    id: 125,
    difficulty: 3,
    topic: "Deadlock",
    code: null,
    question: "Which scenario causes Go's runtime to detect a deadlock and panic?",
    options: [
      "Two goroutines each hold a Mutex and try to lock the other's Mutex",
      "All goroutines are blocked and none can proceed",
      "A goroutine sends to a buffered channel that still has capacity",
      "A goroutine calls fmt.Println while another goroutine is running"
    ],
    answer: 1,
    explanation: "Go's runtime detects a deadlock when every goroutine is blocked and no goroutine is runnable. It panics with <code>all goroutines are asleep - deadlock!</code>. Note: two goroutines holding each other's mutexes causes this, but it's the total-blockage that the runtime detects."
  },

  {
    id: 126,
    difficulty: 3,
    topic: "Generic Map Function",
    code: `package main

import "fmt"

func MapSlice[T any, U any](s []T, f func(T) U) []U {
	result := make([]U, len(s))
	for i, v := range s {
		result[i] = f(v)
	}
	return result
}

func main() {
	nums := []int{1, 2, 3}
	doubled := MapSlice(nums, func(n int) int { return n * 2 })
	fmt.Println(doubled)
}`,
    question: "What does this program print?",
    options: ["[2 4 6]", "[1 2 3]", "[2 4 6 0]", "compile error"],
    answer: 0,
    explanation: "The generic <code>MapSlice</code> applies the doubling function to each element, producing <code>[2 4 6]</code>. <code>fmt.Println</code> on a slice uses square brackets with space separators."
  },

  {
    id: 127,
    difficulty: 3,
    topic: "Generic Constraint — Union",
    code: `package main

import "fmt"

type Number interface{ int | float64 }

func Double[T Number](v T) T { return v * 2 }

func main() {
	fmt.Println(Double(3))
	fmt.Println(Double(1.5))
}`,
    question: "What does this program print?",
    options: ["6\n3", "6\n3.0", "6\n3.0000000000", "compile error"],
    answer: 0,
    explanation: "<code>Double[int](3) = 6</code> and <code>Double[float64](1.5) = 3.0</code>. <code>fmt.Println</code> formats <code>float64(3.0)</code> as <code>3</code> — no trailing zeros for whole numbers."
  },

  {
    id: 128,
    difficulty: 3,
    topic: "comparable Constraint",
    code: `package main

import "fmt"

func Contains[T comparable](s []T, v T) bool {
	for _, e := range s {
		if e == v {
			return true
		}
	}
	return false
}

func main() {
	fmt.Println(Contains([]string{"a", "b", "c"}, "b"))
	fmt.Println(Contains([]int{1, 2, 3}, 4))
}`,
    question: "What does this program print?",
    options: ["true\nfalse", "false\ntrue", "true\ntrue", "compile error"],
    answer: 0,
    explanation: "The <code>comparable</code> constraint allows <code>==</code> inside the generic function. <code>\"b\"</code> is found → <code>true</code>; <code>4</code> is not → <code>false</code>."
  },

  {
    id: 129,
    difficulty: 3,
    topic: "Generic Filter",
    code: `package main

import "fmt"

func Filter[T any](s []T, keep func(T) bool) []T {
	var out []T
	for _, v := range s {
		if keep(v) {
			out = append(out, v)
		}
	}
	return out
}

func main() {
	evens := Filter([]int{1, 2, 3, 4, 5, 6}, func(n int) bool { return n%2 == 0 })
	fmt.Println(evens)
}`,
    question: "What does this program print?",
    options: ["[2 4 6]", "[1 3 5]", "[1 2 3 4 5 6]", "[]"],
    answer: 0,
    explanation: "<code>Filter</code> keeps only elements for which the predicate returns <code>true</code>. Even numbers 2, 4, 6 pass, producing <code>[2 4 6]</code>."
  },

  {
    id: 130,
    difficulty: 3,
    topic: "Type Parameter Inference",
    code: `package main

import "fmt"

func First[T any](s []T) T { return s[0] }

func main() {
	fmt.Println(First([]string{"go", "rust", "zig"}))
	fmt.Println(First([]int{100, 200, 300}))
}`,
    question: "What does this program print?",
    options: ["go\n100", "zig\n300", "go\n300", "compile error: must supply type argument"],
    answer: 0,
    explanation: "Go infers the type parameter from the argument type. No explicit <code>[string]</code> or <code>[int]</code> needed — the compiler figures it out."
  },

  {
    id: 131,
    difficulty: 3,
    topic: "Constraints vs Interfaces",
    code: null,
    question: "Which statement correctly describes type constraints vs regular interfaces in Go generics?",
    options: [
      "Constraints and interfaces are completely interchangeable in all contexts",
      "Constraints use union elements (e.g. int | string) valid only in type parameter lists; regular interfaces without union elements can also be used as value types",
      "Constraints can only contain methods; interfaces can contain union type elements",
      "A constraint must embed at least one concrete type"
    ],
    answer: 1,
    explanation: "Interface types containing union elements (<code>int | string</code>) or <code>~T</code> terms are valid only as type constraints — they cannot be used as regular value types. Interfaces without those elements work as both value types and constraints."
  },

  {
    id: 132,
    difficulty: 3,
    topic: "Three-Index Slice",
    code: `package main

import "fmt"

func main() {
	s := []int{0, 1, 2, 3, 4, 5}
	t := s[1:3:4]
	fmt.Println(len(t), cap(t))
}`,
    question: "What does this program print?",
    options: ["2 4", "2 3", "2 5", "3 4"],
    answer: 1,
    explanation: "<code>s[low:high:max]</code>: <code>len = high - low = 3 - 1 = 2</code>, <code>cap = max - low = 4 - 1 = 3</code>. The third index limits how far the slice can grow without reallocating."
  },

  {
    id: 133,
    difficulty: 3,
    topic: "sort.Slice",
    code: `package main

import (
	"fmt"
	"sort"
)

func main() {
	words := []string{"banana", "apple", "cherry", "date"}
	sort.Slice(words, func(i, j int) bool {
		return len(words[i]) < len(words[j])
	})
	fmt.Println(words[0])
}`,
    question: "What does this program print?",
    options: ["apple", "date", "banana", "cherry"],
    answer: 1,
    explanation: "<code>sort.Slice</code> sorts by ascending string length. <code>\"date\"</code> has length 4 — the shortest — so it ends up first."
  },

  {
    id: 134,
    difficulty: 3,
    topic: "errors.Is — Wrapped Error",
    code: `package main

import (
	"errors"
	"fmt"
)

var ErrNotFound = errors.New("not found")

func lookup(id int) error {
	if id == 0 {
		return fmt.Errorf("lookup: %w", ErrNotFound)
	}
	return nil
}

func main() {
	fmt.Println(errors.Is(lookup(0), ErrNotFound))
}`,
    question: "What does this program print?",
    options: ["true", "false", "not found", "compile error"],
    answer: 0,
    explanation: "<code>fmt.Errorf</code> with <code>%w</code> wraps <code>ErrNotFound</code>. <code>errors.Is</code> unwraps the chain and finds a match, returning <code>true</code>."
  },

  {
    id: 135,
    difficulty: 3,
    topic: "errors.As",
    code: `package main

import (
	"errors"
	"fmt"
)

type ValidationError struct{ Field string }

func (e *ValidationError) Error() string { return "invalid: " + e.Field }

func validate(name string) error {
	if name == "" {
		return fmt.Errorf("validate: %w", &ValidationError{Field: "name"})
	}
	return nil
}

func main() {
	var ve *ValidationError
	if errors.As(validate(""), &ve) {
		fmt.Println(ve.Field)
	}
}`,
    question: "What does this program print?",
    options: ["name", "invalid: name", "validate: invalid: name", "nothing is printed"],
    answer: 0,
    explanation: "<code>errors.As</code> unwraps the chain looking for a <code>*ValidationError</code>. It finds and assigns it to <code>ve</code>. We then print <code>ve.Field</code> = <code>\"name\"</code>."
  },

  {
    id: 136,
    difficulty: 3,
    topic: "Named Return + Defer Mutation",
    code: `package main

import "fmt"

func divide(a, b float64) (result float64, err error) {
	defer func() {
		if err == nil && result > 100 {
			result = 100
		}
	}()
	if b == 0 {
		err = fmt.Errorf("division by zero")
		return
	}
	result = a / b
	return
}

func main() {
	r, _ := divide(500, 2)
	fmt.Println(r)
}`,
    question: "What does this program print?",
    options: ["250", "100", "0", "500"],
    answer: 1,
    explanation: "<code>divide(500, 2)</code> sets <code>result = 250</code>. The deferred closure clamps it to <code>100</code> because <code>err == nil && result > 100</code>. Named returns let defers mutate the actual return value."
  },

  {
    id: 137,
    difficulty: 3,
    topic: "iota Bit Shifts",
    code: `package main

import "fmt"

const (
	Read    = 1 << iota
	Write
	Execute
)

func main() {
	fmt.Println(Read, Write, Execute)
}`,
    question: "What does this program print?",
    options: ["1 2 3", "1 2 4", "0 1 2", "2 4 8"],
    answer: 1,
    explanation: "<code>iota</code> starts at 0. <code>Read = 1 << 0 = 1</code>, <code>Write = 1 << 1 = 2</code>, <code>Execute = 1 << 2 = 4</code>. Classic bitmask/permission pattern."
  },

  {
    id: 138,
    difficulty: 3,
    topic: "iota Resets Per Block",
    code: `package main

import "fmt"

const (
	A = iota
	B
	C
)

const (
	X = iota
	Y
)

func main() {
	fmt.Println(A, B, C, X, Y)
}`,
    question: "What does this program print?",
    options: ["0 1 2 3 4", "0 1 2 0 1", "1 2 3 1 2", "0 1 2 2 3"],
    answer: 1,
    explanation: "<code>iota</code> resets to <code>0</code> at the start of each <code>const</code> block. First block: A=0, B=1, C=2. Second block starts fresh: X=0, Y=1."
  },

  {
    id: 139,
    difficulty: 3,
    topic: "Interface Embedding",
    code: `package main

import "fmt"

type Reader interface{ Read() string }
type Writer interface{ Write(s string) }
type ReadWriter interface {
	Reader
	Writer
}

type Buffer struct{ data string }

func (b *Buffer) Read() string    { return b.data }
func (b *Buffer) Write(s string)  { b.data = s }

func process(rw ReadWriter) {
	rw.Write("hello")
	fmt.Println(rw.Read())
}

func main() { process(&Buffer{}) }`,
    question: "What does this program print?",
    options: ["hello", "", "compile error: Buffer does not implement ReadWriter", "panic"],
    answer: 0,
    explanation: "<code>ReadWriter</code> embeds both <code>Reader</code> and <code>Writer</code>. <code>*Buffer</code> implements both methods, satisfying <code>ReadWriter</code>. <code>process</code> writes then reads <code>\"hello\"</code>."
  },

  {
    id: 140,
    difficulty: 3,
    topic: "Type Alias vs Type Definition",
    code: null,
    question: "Given `type Celsius float64` and `type Alias = float64`, which statement is correct?",
    options: [
      "Both require explicit conversion to/from float64",
      "Celsius is a distinct type requiring explicit conversion; Alias is identical to float64 and interchangeable without conversion",
      "Alias is the distinct type; Celsius is interchangeable with float64",
      "Both are interchangeable with float64 without conversion"
    ],
    answer: 1,
    explanation: "A type <em>definition</em> (<code>type Celsius float64</code>) creates a new named type — explicit conversion required. A type <em>alias</em> (<code>type Alias = float64</code>) is just another name for the same type — fully interchangeable."
  },

  {
    id: 141,
    difficulty: 3,
    topic: "Stringer Interface",
    code: `package main

import "fmt"

type Color int

const (
	Red Color = iota
	Green
	Blue
)

func (c Color) String() string {
	return [...]string{"Red", "Green", "Blue"}[c]
}

func main() {
	fmt.Println(Red)
	fmt.Println(Blue)
}`,
    question: "What does this program print?",
    options: ["0\n2", "Red\nBlue", "Red\n2", "Color(0)\nColor(2)"],
    answer: 1,
    explanation: "When a type implements <code>fmt.Stringer</code> (has <code>String() string</code>), <code>fmt.Println</code> calls it automatically. <code>Red.String()</code> = <code>\"Red\"</code>, <code>Blue.String()</code> = <code>\"Blue\"</code>."
  },

  {
    id: 142,
    difficulty: 3,
    topic: "Empty Interface Comparison",
    code: `package main

import "fmt"

func main() {
	var a interface{} = 42
	var b interface{} = 42
	var c interface{} = "42"
	fmt.Println(a == b)
	fmt.Println(a == c)
}`,
    question: "What does this program print?",
    options: ["true\ntrue", "true\nfalse", "false\nfalse", "false\ntrue"],
    answer: 1,
    explanation: "Two interface values are equal when both their dynamic type and value match. <code>a</code> and <code>b</code> hold <code>(int, 42)</code> → equal. <code>a</code> holds <code>(int, 42)</code>, <code>c</code> holds <code>(string, \"42\")</code> → different types → not equal."
  },

  {
    id: 143,
    difficulty: 3,
    topic: "String Immutability + []byte",
    code: `package main

import "fmt"

func main() {
	s := "hello"
	b := []byte(s)
	b[0] = 'H'
	fmt.Println(s)
	fmt.Println(string(b))
}`,
    question: "What does this program print?",
    options: ["Hello\nHello", "hello\nHello", "Hello\nhello", "compile error"],
    answer: 1,
    explanation: "Strings in Go are immutable. <code>[]byte(s)</code> creates a <em>copy</em>. Mutating <code>b[0]</code> does not affect <code>s</code>. <code>s</code> stays <code>\"hello\"</code>; <code>string(b)</code> is <code>\"Hello\"</code>."
  },

  {
    id: 144,
    difficulty: 3,
    topic: "Rune Count vs Byte Count",
    code: `package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	s := "héllo"
	fmt.Println(len(s))
	fmt.Println(utf8.RuneCountInString(s))
}`,
    question: "What does this program print?",
    options: ["5\n5", "6\n5", "5\n4", "6\n6"],
    answer: 1,
    explanation: "<code>é</code> (U+00E9) is 2 bytes in UTF-8. <code>\"héllo\"</code> has 6 bytes but 5 runes. <code>len(s)</code> counts bytes → 6. <code>utf8.RuneCountInString(s)</code> counts runes → 5."
  },

  {
    id: 145,
    difficulty: 3,
    topic: "Done Channel Pattern",
    code: `package main

import (
	"fmt"
	"sync"
)

func worker(done <-chan struct{}, wg *sync.WaitGroup) {
	defer wg.Done()
	<-done
	fmt.Println("worker stopped")
}

func main() {
	done := make(chan struct{})
	var wg sync.WaitGroup
	wg.Add(1)
	go worker(done, &wg)
	close(done)
	wg.Wait()
	fmt.Println("main done")
}`,
    question: "What does this program print?",
    options: ["main done", "worker stopped\nmain done", "worker stopped", "deadlock"],
    answer: 1,
    explanation: "<code>close(done)</code> unblocks all receivers. The goroutine receives from the closed channel, prints <code>\"worker stopped\"</code>, calls <code>wg.Done()</code>. Then <code>wg.Wait()</code> unblocks and <code>\"main done\"</code> is printed."
  },

  {
    id: 146,
    difficulty: 3,
    topic: "Generic Sum",
    code: `package main

import "fmt"

type Numeric interface{ ~int | ~float64 }

func Sum[T Numeric](vals []T) T {
	var total T
	for _, v := range vals {
		total += v
	}
	return total
}

func main() {
	fmt.Println(Sum([]int{1, 2, 3, 4, 5}))
}`,
    question: "What does this program print?",
    options: ["10", "15", "0", "compile error"],
    answer: 1,
    explanation: "<code>Sum</code> accumulates values using the <code>+=</code> operator, which is valid for any type matching <code>~int | ~float64</code>. 1+2+3+4+5 = 15."
  },

  {
    id: 147,
    difficulty: 3,
    topic: "GOMAXPROCS",
    code: null,
    question: "What does GOMAXPROCS control in a Go program?",
    options: [
      "The maximum number of goroutines that can exist simultaneously",
      "The maximum number of OS threads that can execute Go code in parallel",
      "The maximum number of channels that can be open at once",
      "The priority level assigned to the Go process by the OS"
    ],
    answer: 1,
    explanation: "<code>GOMAXPROCS</code> sets the maximum number of OS threads that simultaneously execute Go code. It defaults to the number of logical CPUs. It does not cap the total number of goroutines."
  },

  {
    id: 148,
    difficulty: 3,
    topic: "Panic + Recover",
    code: `package main

import "fmt"

func safeDiv(a, b int) (result int, err error) {
	defer func() {
		if r := recover(); r != nil {
			err = fmt.Errorf("recovered: %v", r)
		}
	}()
	result = a / b
	return
}

func main() {
	r, err := safeDiv(10, 0)
	fmt.Println(r, err != nil)
}`,
    question: "What does this program print?",
    options: ["0 true", "10 true", "0 false", "panic: runtime error"],
    answer: 0,
    explanation: "Division by zero panics. The deferred function recovers it and sets the named return <code>err</code>. <code>result</code> is never assigned → stays <code>0</code>. <code>err != nil</code> is <code>true</code>."
  },

  {
    id: 149,
    difficulty: 3,
    topic: "Sentinel Errors",
    code: `package main

import (
	"errors"
	"fmt"
)

var ErrEmpty = errors.New("empty")

func peek(s []int) (int, error) {
	if len(s) == 0 {
		return 0, ErrEmpty
	}
	return s[0], nil
}

func main() {
	_, err := peek([]int{})
	fmt.Println(errors.Is(err, ErrEmpty))
}`,
    question: "What does this program print?",
    options: ["true", "false", "empty", "compile error"],
    answer: 0,
    explanation: "<code>peek</code> returns <code>ErrEmpty</code> directly (not wrapped). <code>errors.Is</code> compares by identity and finds a match → <code>true</code>."
  },

  {
    id: 150,
    difficulty: 3,
    topic: "Context Cancellation",
    code: null,
    question: "What is the primary purpose of context.WithCancel in Go?",
    options: [
      "To set a deadline after which an HTTP request automatically retries",
      "To create a derived context with a cancel function that signals all holders of that context to stop work",
      "To prevent goroutines from running until the cancel function is called",
      "To cancel a pending fmt.Println call before it completes"
    ],
    answer: 1,
    explanation: "<code>context.WithCancel</code> returns a child context and a <code>CancelFunc</code>. Calling <code>cancel()</code> closes <code>ctx.Done()</code>, signalling goroutines that select on it to exit cleanly — enabling cooperative cancellation across API boundaries."
  },

  // ─── React: Tier 1 — Easy ────────────────────────────────────────

  {
    id: 151,
    difficulty: 1,
    lang: "react",
    topic: "useState Initial Value",
    code: `function Counter() {
  const [count, setCount] = React.useState(5);
  return <span>{count}</span>;
}`,
    question: "What does Counter render initially?",
    options: ["0", "5", "undefined", "null"],
    answer: 1,
    explanation: "<code>useState(5)</code> initializes <code>count</code> to <code>5</code>. The component renders that value directly."
  },

  {
    id: 152,
    difficulty: 1,
    lang: "react",
    topic: "Props",
    code: `function Greet({ name }) {
  return <p>Hello, {name}!</p>;
}

// rendered as: <Greet name="Alice" />`,
    question: "What text does this component render?",
    options: ["Hello, !", "Hello, name!", "Hello, Alice!", "Hello, {name}!"],
    answer: 2,
    explanation: "The <code>name</code> prop is destructured from the props object. <code>{name}</code> in JSX interpolates the string <code>\"Alice\"</code>."
  },

  {
    id: 153,
    difficulty: 1,
    lang: "react",
    topic: "JSX Expression",
    code: `function App() {
  const x = 2 + 3;
  return <div>{x}</div>;
}`,
    question: "What does this component render?",
    options: ["2 + 3", "x", "5", "undefined"],
    answer: 2,
    explanation: "JavaScript expressions inside <code>{}</code> in JSX are evaluated. <code>2 + 3</code> evaluates to <code>5</code>, which is then rendered as text."
  },

  {
    id: 154,
    difficulty: 1,
    lang: "react",
    topic: "Conditional Rendering",
    code: `function App() {
  const show = false;
  return <div>{show && <span>visible</span>}</div>;
}`,
    question: "What does this component render?",
    options: ["visible", "false", "An empty div", "nothing — it errors"],
    answer: 2,
    explanation: "When the left side of <code>&&</code> is <code>false</code>, React skips rendering the right side. The <code>div</code> renders with no children — an empty div."
  },

  {
    id: 155,
    difficulty: 1,
    lang: "react",
    topic: "List Rendering",
    code: `function List() {
  const items = ["a", "b", "c"];
  return (
    <ul>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}`,
    question: "How many <li> elements does this render?",
    options: ["0", "1", "2", "3"],
    answer: 3,
    explanation: "<code>items.map</code> produces one <code>&lt;li&gt;</code> for each element in the array. The array has 3 elements, so 3 list items are rendered."
  },

  {
    id: 156,
    difficulty: 1,
    lang: "react",
    topic: "Event Handler",
    code: `function Btn() {
  function handleClick() {
    console.log("clicked");
  }
  return <button onClick={handleClick}>Click me</button>;
}`,
    question: "What is logged when the button is clicked?",
    options: ["handleClick", "clicked", "undefined", "nothing — it errors"],
    answer: 1,
    explanation: "<code>onClick={handleClick}</code> passes the function reference. When clicked, React calls <code>handleClick()</code>, which logs <code>\"clicked\"</code>."
  },

  {
    id: 157,
    difficulty: 1,
    lang: "react",
    topic: "JSX Rules",
    code: `function App() {
  return (
    <div>
      <p>First</p>
      <p>Second</p>
    </div>
  );
}`,
    question: "Why is the outer <div> required here?",
    options: [
      "div is the only valid JSX wrapper element",
      "JSX expressions must have a single root element",
      "React requires div for styling purposes",
      "It is not required — two root elements are fine"
    ],
    answer: 1,
    explanation: "JSX must return a single root element. Without a wrapper, returning two sibling <code>&lt;p&gt;</code> tags would be a syntax error. A <code>React.Fragment</code> (<code>&lt;&gt;&lt;/&gt;</code>) is an alternative to <code>&lt;div&gt;</code>."
  },

  {
    id: 158,
    difficulty: 1,
    lang: "react",
    topic: "Default Props",
    code: `function Label({ text = "default" }) {
  return <span>{text}</span>;
}

// rendered as: <Label />`,
    question: "What does this component render?",
    options: ["(nothing)", "undefined", "default", "text"],
    answer: 2,
    explanation: "When <code>text</code> is not supplied, the destructuring default <code>\"default\"</code> is used. The component renders the string <code>default</code>."
  },

  {
    id: 159,
    difficulty: 1,
    lang: "react",
    topic: "useState Setter",
    code: `function Counter() {
  const [n, setN] = React.useState(0);
  return (
    <button onClick={() => setN(n + 1)}>
      {n}
    </button>
  );
}`,
    question: "What does the button display initially?",
    options: ["n", "1", "0", "undefined"],
    answer: 2,
    explanation: "<code>useState(0)</code> sets the initial state to <code>0</code>. Before any click, the button renders <code>0</code>."
  },

  {
    id: 160,
    difficulty: 1,
    lang: "react",
    topic: "Boolean Rendering",
    code: `function App() {
  return <div>{true}</div>;
}`,
    question: "What does this component render?",
    options: ["true", "1", "An empty div", "compile error"],
    answer: 2,
    explanation: "React does not render <code>true</code>, <code>false</code>, <code>null</code>, or <code>undefined</code> as visible text. The result is an empty <code>&lt;div&gt;</code>."
  },

  {
    id: 161,
    difficulty: 1,
    lang: "react",
    topic: "Ternary Rendering",
    code: `function App({ isLoggedIn }) {
  return <div>{isLoggedIn ? "Welcome" : "Log in"}</div>;
}

// rendered as: <App isLoggedIn={true} />`,
    question: "What text does this render?",
    options: ["Log in", "Welcome", "true", "isLoggedIn"],
    answer: 1,
    explanation: "With <code>isLoggedIn={true}</code>, the ternary evaluates to <code>\"Welcome\"</code>."
  },

  {
    id: 162,
    difficulty: 1,
    lang: "react",
    topic: "Fragment",
    code: `function App() {
  return (
    <>
      <span>A</span>
      <span>B</span>
    </>
  );
}`,
    question: "What does <> ... </> represent in JSX?",
    options: [
      "An HTML template tag",
      "A React.Fragment — a wrapper that adds no DOM node",
      "A syntax error in older React versions",
      "A shorthand for <div>"
    ],
    answer: 1,
    explanation: "<code>&lt;&gt;&lt;/&gt;</code> is shorthand for <code>&lt;React.Fragment&gt;</code>. It lets you return multiple elements without adding an extra DOM node."
  },

  {
    id: 163,
    difficulty: 1,
    lang: "react",
    topic: "Prop Types",
    code: `function Square({ size }) {
  return <div style={{ width: size, height: size }} />;
}

// rendered as: <Square size={40} />`,
    question: "What width does the rendered div have?",
    options: ["'40'", "40", "40px", "undefined"],
    answer: 1,
    explanation: "The <code>size</code> prop receives the number <code>40</code>. The style object uses that number directly as <code>width: 40</code>, which browsers interpret as <code>40px</code>. The value stored in the object is the number <code>40</code>."
  },

  {
    id: 164,
    difficulty: 1,
    lang: "react",
    topic: "className vs class",
    code: null,
    question: "Which of the following is true about JSX attribute naming?",
    options: [
      "Use class= for CSS classes in JSX",
      "Use className= for CSS classes in JSX because class is a reserved word in JavaScript",
      "Both class= and className= work in JSX",
      "CSS classes are applied via the style= attribute in JSX"
    ],
    answer: 1,
    explanation: "JSX is compiled to JavaScript, so reserved words like <code>class</code> cannot be used as attribute names. React uses <code>className</code> instead, which maps to the DOM <code>class</code> attribute."
  },

  {
    id: 165,
    difficulty: 1,
    lang: "react",
    topic: "Number Rendering",
    code: `function App() {
  return <div>{0}</div>;
}`,
    question: "What does this component render?",
    options: ["An empty div", "0", "false", "nothing — it errors"],
    answer: 1,
    explanation: "Unlike <code>false</code>, <code>null</code>, and <code>undefined</code>, the number <code>0</code> <em>is</em> rendered by React. The div displays the text <code>0</code>. This is a common bug when using <code>{count && &lt;Component /&gt;}</code> with a zero count."
  },

  // ─── React: Tier 2 — Medium ──────────────────────────────────────

  {
    id: 166,
    difficulty: 2,
    lang: "react",
    topic: "useEffect Timing",
    code: `function App() {
  console.log("render");
  React.useEffect(() => {
    console.log("effect");
  }, []);
  return <div />;
}`,
    question: "In what order are the logs printed on first mount?",
    options: ["effect\nrender", "render\neffect", "render\nrender\neffect", "effect only"],
    answer: 1,
    explanation: "The component body (including <code>console.log(\"render\")</code>) runs first during the render phase. <code>useEffect</code> fires <em>after</em> the DOM has been painted — always after render."
  },

  {
    id: 167,
    difficulty: 2,
    lang: "react",
    topic: "useState Functional Update",
    code: `function Counter() {
  const [n, setN] = React.useState(0);

  function triple() {
    setN(prev => prev + 1);
    setN(prev => prev + 1);
    setN(prev => prev + 1);
  }

  return <button onClick={triple}>{n}</button>;
}`,
    question: "What does the button display after one click?",
    options: ["0", "1", "2", "3"],
    answer: 3,
    explanation: "Functional updates (<code>prev => prev + 1</code>) chain on the <em>latest queued state</em>, not the captured snapshot. Each call receives the result of the previous, so the state becomes <code>0→1→2→3</code> within the same event."
  },

  {
    id: 168,
    difficulty: 2,
    lang: "react",
    topic: "Stale Closure in Handler",
    code: `function Counter() {
  const [n, setN] = React.useState(0);

  function triple() {
    setN(n + 1);
    setN(n + 1);
    setN(n + 1);
  }

  return <button onClick={triple}>{n}</button>;
}`,
    question: "What does the button display after one click?",
    options: ["0", "1", "2", "3"],
    answer: 1,
    explanation: "All three <code>setN(n + 1)</code> calls close over the <em>same</em> <code>n</code> (which is <code>0</code>). React batches them and applies the last value — <code>0 + 1 = 1</code>. To get <code>3</code>, use the functional form <code>setN(prev => prev + 1)</code>."
  },

  {
    id: 169,
    difficulty: 2,
    lang: "react",
    topic: "Controlled Input",
    code: `function Form() {
  const [val, setVal] = React.useState("");
  return (
    <input
      value={val}
      onChange={e => setVal(e.target.value)}
    />
  );
}`,
    question: "What makes this a controlled input?",
    options: [
      "The use of useState",
      "The value prop is bound to React state and changes are handled via onChange",
      "The onChange prop uses an arrow function",
      "The input has no defaultValue"
    ],
    answer: 1,
    explanation: "A controlled input has its <code>value</code> driven by React state. Every keystroke triggers <code>onChange</code>, which calls <code>setVal</code>, which re-renders the input with the new value. React is the single source of truth."
  },

  {
    id: 170,
    difficulty: 2,
    lang: "react",
    topic: "useRef",
    code: `function App() {
  const ref = React.useRef(0);
  ref.current += 1;
  return <span>{ref.current}</span>;
}`,
    question: "What is true about this component?",
    options: [
      "It increments and re-renders on every update",
      "It renders 1, and mutating ref.current does not trigger a re-render",
      "It throws because ref.current is read-only",
      "It renders undefined because refs are not renderable"
    ],
    answer: 1,
    explanation: "<code>useRef</code> returns a mutable object whose <code>.current</code> property persists across renders but does <em>not</em> trigger re-renders when mutated. The component renders <code>1</code> on the first paint; subsequent renders would show higher values only if something else causes them."
  },

  {
    id: 171,
    difficulty: 2,
    lang: "react",
    topic: "Key Prop",
    code: null,
    question: "Which of the following best describes the purpose of the key prop in a list?",
    options: [
      "It provides an accessible label for screen readers",
      "It controls the tab order of elements",
      "It helps React identify which items changed, were added, or removed between renders",
      "It is required by the browser to render lists efficiently"
    ],
    answer: 2,
    explanation: "React uses <code>key</code> to match elements across renders. A stable, unique key lets React reuse DOM nodes for unchanged items and only update those that changed — avoiding unnecessary re-mounts."
  },

  {
    id: 172,
    difficulty: 2,
    lang: "react",
    topic: "useEffect Dependency",
    code: `function App({ id }) {
  React.useEffect(() => {
    console.log("fetch", id);
  }, [id]);
  return <div>{id}</div>;
}`,
    question: "When does the effect re-run?",
    options: [
      "Once on mount only",
      "Every render",
      "When id changes between renders",
      "Never — useEffect with a dep array runs only on unmount"
    ],
    answer: 2,
    explanation: "An effect with a dependency array re-runs whenever any dependency changes (using <code>Object.is</code> comparison). Here, the effect re-runs each time <code>id</code> receives a new value."
  },

  {
    id: 173,
    difficulty: 2,
    lang: "react",
    topic: "Lifting State",
    code: `function Parent() {
  const [val, setVal] = React.useState("");
  return (
    <>
      <Child value={val} onChange={setVal} />
      <p>{val}</p>
    </>
  );
}

function Child({ value, onChange }) {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
}`,
    question: "What pattern does this code demonstrate?",
    options: [
      "Context API",
      "Lifting state up",
      "Render props",
      "Portal rendering"
    ],
    answer: 1,
    explanation: "The state lives in <code>Parent</code> and is shared downward via props. <code>Child</code> signals changes via the <code>onChange</code> callback. This is the <em>lifting state up</em> pattern — the parent becomes the single source of truth."
  },

  {
    id: 174,
    difficulty: 2,
    lang: "react",
    topic: "React.memo",
    code: `const Child = React.memo(function Child({ value }) {
  console.log("Child rendered");
  return <span>{value}</span>;
});

function Parent() {
  const [n, setN] = React.useState(0);
  return (
    <>
      <button onClick={() => setN(n + 1)}>inc</button>
      <Child value="hello" />
    </>
  );
}`,
    question: "How many times does 'Child rendered' log when the button is clicked 3 times?",
    options: ["0", "1", "3", "4"],
    answer: 1,
    explanation: "<code>React.memo</code> skips re-rendering when props are shallowly equal. <code>value=\"hello\"</code> never changes, so <code>Child</code> renders only once — on mount. Subsequent parent renders do not re-render the memoized child."
  },

  {
    id: 175,
    difficulty: 2,
    lang: "react",
    topic: "useEffect No Deps",
    code: `function App() {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    console.log("effect", n);
  });
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}`,
    question: "When does the effect run?",
    options: [
      "Only on mount",
      "Only when n changes",
      "After every render",
      "Never"
    ],
    answer: 2,
    explanation: "A <code>useEffect</code> with <em>no</em> dependency array runs after <em>every</em> render — both on mount and after every update."
  },

  {
    id: 176,
    difficulty: 2,
    lang: "react",
    topic: "Event Object",
    code: `function Form() {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return <input onChange={handleChange} />;
}`,
    question: "What does console.log print when the user types 'hi' character by character?",
    options: ["hi (once)", "h\nhi", "h\ni", "e.target.value"],
    answer: 1,
    explanation: "<code>onChange</code> fires on every keystroke. When the user types <code>h</code> then <code>i</code>, <code>e.target.value</code> is the full current value of the input: first <code>\"h\"</code>, then <code>\"hi\"</code>."
  },

  {
    id: 177,
    difficulty: 2,
    lang: "react",
    topic: "useState Array Update",
    code: `function App() {
  const [items, setItems] = React.useState([1, 2, 3]);

  function add() {
    setItems([...items, 4]);
  }

  return <button onClick={add}>{items.length}</button>;
}`,
    question: "What does the button display after one click?",
    options: ["3", "4", "1,2,3,4", "[1,2,3,4]"],
    answer: 1,
    explanation: "The spread creates a new array <code>[1, 2, 3, 4]</code> and passes it to <code>setItems</code>. After the re-render, <code>items.length</code> is <code>4</code>."
  },

  {
    id: 178,
    difficulty: 2,
    lang: "react",
    topic: "Preventing Mutation",
    code: `function App() {
  const [list, setList] = React.useState([1, 2, 3]);

  function remove() {
    list.pop();          // mutates the array
    setList(list);       // passes same reference
  }

  return <button onClick={remove}>{list.length}</button>;
}`,
    question: "What happens when the button is clicked?",
    options: [
      "The list shortens and re-renders correctly",
      "React throws an error about immutability",
      "The UI may not update because the array reference did not change",
      "list.pop() is ignored because state is frozen"
    ],
    answer: 2,
    explanation: "React uses referential equality to detect state changes. <code>list.pop()</code> mutates the existing array in place. <code>setList(list)</code> passes the same reference, so React sees no change and may skip the re-render. Always create a new array: <code>setList(list.slice(0, -1))</code>."
  },

  {
    id: 179,
    difficulty: 2,
    lang: "react",
    topic: "useRef DOM Access",
    code: `function App() {
  const inputRef = React.useRef(null);

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </>
  );
}`,
    question: "What does inputRef.current hold after the component mounts?",
    options: ["null", "The React element object", "The underlying DOM input node", "A state snapshot of the input"],
    answer: 2,
    explanation: "When you attach a <code>ref</code> to a DOM element, React sets <code>ref.current</code> to the actual DOM node after mounting. This allows imperative operations like <code>.focus()</code> or <code>.scrollIntoView()</code>."
  },

  {
    id: 180,
    difficulty: 2,
    lang: "react",
    topic: "Derived State",
    code: `function Cart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return <p>Total: {total}</p>;
}`,
    question: "What is the recommended approach demonstrated here?",
    options: [
      "Storing total in useState so it persists across renders",
      "Computing derived values directly during render instead of storing them in state",
      "Using useEffect to recompute total when items changes",
      "Using useReducer for complex computations"
    ],
    answer: 1,
    explanation: "<code>total</code> can be derived from <code>items</code> on every render. Storing it in state would require synchronising two pieces of state. Computing it inline — <em>derived state</em> — is simpler and always in sync."
  },

  {
    id: 181,
    difficulty: 2,
    lang: "react",
    topic: "Inline Handler Pitfall",
    code: `function List({ items, onDelete }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={onDelete(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}`,
    question: "What is wrong with onClick={onDelete(item.id)}?",
    options: [
      "Nothing — it passes the return value of onDelete as the handler",
      "onDelete is called immediately during render, not on click",
      "item.id is not accessible inside map",
      "onClick does not support function calls — only references"
    ],
    answer: 1,
    explanation: "<code>onClick={onDelete(item.id)}</code> <em>calls</em> the function during render and assigns its return value as the handler. The fix is <code>onClick={() => onDelete(item.id)}</code>, which wraps it in a new function that is called only on click."
  },

  {
    id: 182,
    difficulty: 2,
    lang: "react",
    topic: "State Initialization",
    code: `function App() {
  const [data, setData] = React.useState(
    fetch("/api/items").then(r => r.json())
  );
  return <div>{String(data)}</div>;
}`,
    question: "What is the initial value of data?",
    options: ["The fetched JSON array", "undefined", "A Promise object", "null"],
    answer: 2,
    explanation: "<code>fetch(...).then(...)</code> returns a <code>Promise</code>. <code>useState</code> stores it as-is — it does not await Promises. The initial value is the Promise object, not the resolved data. Use <code>useEffect</code> to fetch asynchronously."
  },

  {
    id: 183,
    difficulty: 2,
    lang: "react",
    topic: "Multiple useState",
    code: `function Form() {
  const [name, setName] = React.useState("Alice");
  const [age, setAge] = React.useState(30);
  return <p>{name} is {age}</p>;
}`,
    question: "What does this component render?",
    options: ["Alice is 30", "name is age", "Alice is age", "undefined is undefined"],
    answer: 0,
    explanation: "Each <code>useState</code> call manages its own independent piece of state. <code>name</code> is <code>\"Alice\"</code> and <code>age</code> is <code>30</code>, so the output is <code>Alice is 30</code>."
  },

  {
    id: 184,
    difficulty: 2,
    lang: "react",
    topic: "Key Mutation",
    code: null,
    question: "What happens when you change the key prop of a component?",
    options: [
      "React updates the component in place",
      "React unmounts the old component and mounts a fresh one",
      "React logs a warning and keeps the existing component",
      "The key change has no effect — keys only matter for list order"
    ],
    answer: 1,
    explanation: "React treats elements with different <code>key</code> values as entirely different components. Changing <code>key</code> forces an unmount of the old instance and a mount of a new one — resetting all local state. This is a deliberate reset technique."
  },

  {
    id: 185,
    difficulty: 2,
    lang: "react",
    topic: "Lazy State Initializer",
    code: `function App() {
  const [n, setN] = React.useState(() => {
    console.log("init");
    return 42;
  });
  return <span>{n}</span>;
}`,
    question: "How many times does 'init' log across the component's lifetime (assume no re-mounts)?",
    options: ["Once — on first render only", "Once per render", "Never", "Twice — on mount and first update"],
    answer: 0,
    explanation: "When <code>useState</code> receives a <em>function</em>, it calls it only once — during the initial render — to compute the initial state. Subsequent renders ignore the initializer. This is the <em>lazy initializer</em> pattern, useful for expensive computations."
  },

  // ─── React: Tier 3 — Hard ────────────────────────────────────────

  {
    id: 186,
    difficulty: 3,
    lang: "react",
    topic: "useCallback",
    code: `const Child = React.memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [n, setN] = React.useState(0);

  const handleClick = () => setN(n + 1);

  return (
    <>
      <button onClick={() => setN(n + 1)}>Parent inc</button>
      <Child onClick={handleClick} />
    </>
  );
}`,
    question: "Why does Child re-render every time the Parent inc button is clicked, despite React.memo?",
    options: [
      "React.memo does not work with function props",
      "handleClick is a new function reference on every Parent render, so the prop changes",
      "console.log inside Child forces a re-render",
      "n + 1 causes a side effect that bypasses memoization"
    ],
    answer: 1,
    explanation: "Every time <code>Parent</code> re-renders, <code>handleClick</code> is recreated as a new function object. <code>React.memo</code> does a shallow comparison — the new function reference is not equal to the previous one, so <code>Child</code> re-renders. Wrapping <code>handleClick</code> in <code>useCallback</code> with <code>[n]</code> as deps would stabilize the reference."
  },

  {
    id: 187,
    difficulty: 3,
    lang: "react",
    topic: "useCallback",
    code: `function Parent() {
  const [n, setN] = React.useState(0);

  const inc = React.useCallback(() => {
    setN(n => n + 1);
  }, []);

  return <Child onClick={inc} count={n} />;
}`,
    question: "Why is the empty dependency array safe here even though inc updates n?",
    options: [
      "useCallback with [] never re-creates the function, so it is always stale",
      "The functional update form setN(n => n + 1) always receives the latest state, so the closure does not need to capture n",
      "React automatically adds n to the deps when setN is used",
      "Empty deps are never safe — this is a bug"
    ],
    answer: 1,
    explanation: "The functional update form <code>setN(n => n + 1)</code> receives the <em>current</em> state at the time of the call, not the captured closure value. Because <code>inc</code> does not read <code>n</code> directly, the empty dep array is safe and the callback reference stays stable across renders."
  },

  {
    id: 188,
    difficulty: 3,
    lang: "react",
    topic: "useMemo",
    code: `function App({ list }) {
  const sorted = React.useMemo(
    () => [...list].sort((a, b) => a - b),
    [list]
  );
  return <ul>{sorted.map(n => <li key={n}>{n}</li>)}</ul>;
}`,
    question: "What is the primary benefit of useMemo here?",
    options: [
      "It prevents sorted from being garbage-collected",
      "It ensures the sort runs asynchronously",
      "It skips re-sorting when list has not changed between renders",
      "It makes the component render in a separate thread"
    ],
    answer: 2,
    explanation: "<code>useMemo</code> caches the result of an expensive computation and recomputes it only when its dependencies change. Here, the sort is skipped on re-renders where <code>list</code> is the same reference, saving work proportional to the list length."
  },

  {
    id: 189,
    difficulty: 3,
    lang: "react",
    topic: "useContext",
    code: `const ThemeCtx = React.createContext("light");

function App() {
  return (
    <ThemeCtx.Provider value="dark">
      <Child />
    </ThemeCtx.Provider>
  );
}

function Child() {
  const theme = React.useContext(ThemeCtx);
  return <span>{theme}</span>;
}`,
    question: "What does Child render?",
    options: ["light", "dark", "undefined", "ThemeCtx"],
    answer: 1,
    explanation: "<code>useContext</code> reads from the nearest matching <code>Provider</code> above in the tree. <code>App</code> provides <code>\"dark\"</code>, so <code>Child</code> receives and renders <code>\"dark\"</code>. The default value <code>\"light\"</code> is only used when there is no Provider ancestor."
  },

  {
    id: 190,
    difficulty: 3,
    lang: "react",
    topic: "Custom Hook",
    code: `function useToggle(initial = false) {
  const [on, setOn] = React.useState(initial);
  const toggle = React.useCallback(() => setOn(v => !v), []);
  return [on, toggle];
}

function App() {
  const [isOpen, toggle] = useToggle();
  return <button onClick={toggle}>{isOpen ? "Close" : "Open"}</button>;
}`,
    question: "What does the button display initially?",
    options: ["Close", "Open", "false", "undefined"],
    answer: 1,
    explanation: "<code>useToggle()</code> is called with no argument, so <code>initial</code> defaults to <code>false</code>. <code>isOpen</code> starts as <code>false</code>, and the ternary renders <code>\"Open\"</code>."
  },

  {
    id: 191,
    difficulty: 3,
    lang: "react",
    topic: "useEffect Stale Closure",
    code: `function Timer() {
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      console.log(n);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <button onClick={() => setN(n + 1)}>{n}</button>;
}`,
    question: "After clicking the button 3 times, what does the interval log?",
    options: ["3", "0", "1\n2\n3", "It varies each second"],
    answer: 1,
    explanation: "The effect captures <code>n</code> at mount time (<code>0</code>) and is never re-run because the dep array is empty. The interval closure holds a stale reference to <code>n === 0</code> forever. The fix is to add <code>n</code> to deps or use a ref to hold the latest value."
  },

  {
    id: 192,
    difficulty: 3,
    lang: "react",
    topic: "useEffect Cleanup",
    code: `function App({ id }) {
  React.useEffect(() => {
    const controller = new AbortController();
    fetch(\`/api/\${id}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => console.log(data))
      .catch(() => {});
    return () => controller.abort();
  }, [id]);
  return <div>{id}</div>;
}`,
    question: "Why does the cleanup function call controller.abort()?",
    options: [
      "To cancel the fetch when the component unmounts or id changes before the previous fetch completes",
      "To force the fetch to retry on the next render",
      "To reset the id state to its initial value",
      "AbortController.abort() is required before any new fetch call"
    ],
    answer: 0,
    explanation: "When <code>id</code> changes, React runs the previous effect's cleanup before running the new effect. Calling <code>controller.abort()</code> cancels any in-flight fetch for the old <code>id</code>, preventing a race condition where a stale response could overwrite newer data."
  },

  {
    id: 193,
    difficulty: 3,
    lang: "react",
    topic: "Batched Updates",
    code: `function App() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function update() {
    setA(1);
    setB(2);
  }

  console.log("render");
  return <button onClick={update}>{a} {b}</button>;
}`,
    question: "How many times does 'render' log when the button is clicked once (React 18)?",
    options: ["0", "1", "2", "3"],
    answer: 1,
    explanation: "React 18 automatically batches all state updates within event handlers into a single re-render. Both <code>setA(1)</code> and <code>setB(2)</code> are processed together, producing one re-render and one <code>\"render\"</code> log."
  },

  {
    id: 194,
    difficulty: 3,
    lang: "react",
    topic: "Hook Rules",
    code: null,
    question: "Which of the following violates the Rules of Hooks?",
    options: [
      "Calling useState at the top level of a component",
      "Calling useEffect inside an if statement conditionally",
      "Calling a custom hook inside another custom hook",
      "Calling useState multiple times in the same component"
    ],
    answer: 1,
    explanation: "Hooks must be called in the same order on every render. Placing a hook inside an <code>if</code> statement can skip it on some renders, breaking React's internal call-order tracking. ESLint's <code>react-hooks/rules-of-hooks</code> plugin detects this."
  },

  {
    id: 195,
    difficulty: 3,
    lang: "react",
    topic: "Render vs Commit Phase",
    code: null,
    question: "Which of the following best describes the difference between the render phase and the commit phase in React?",
    options: [
      "The render phase writes to the DOM; the commit phase calls effects",
      "The render phase is pure computation (calling component functions); the commit phase applies changes to the DOM and runs effects",
      "The render phase runs in a Web Worker; the commit phase runs on the main thread",
      "The render phase handles user events; the commit phase handles network events"
    ],
    answer: 1,
    explanation: "During the <em>render phase</em>, React calls component functions and determines what changed — this must be pure and side-effect-free. During the <em>commit phase</em>, React applies those changes to the DOM and then runs <code>useLayoutEffect</code> and <code>useEffect</code> callbacks."
  },

  {
    id: 196,
    difficulty: 3,
    lang: "react",
    topic: "useContext Re-render",
    code: `const Ctx = React.createContext(0);

function Child() {
  const val = React.useContext(Ctx);
  console.log("Child rendered");
  return <span>{val}</span>;
}

function Parent() {
  const [n, setN] = React.useState(0);
  return (
    <Ctx.Provider value={n}>
      <button onClick={() => setN(n + 1)}>inc</button>
      <Child />
    </Ctx.Provider>
  );
}`,
    question: "What happens to Child when the button is clicked?",
    options: [
      "Child does not re-render because it is not a direct child of the button",
      "Child re-renders because the context value changed",
      "Child re-renders only if wrapped in React.memo",
      "Child throws because context values must be strings"
    ],
    answer: 1,
    explanation: "All components that call <code>useContext</code> re-render whenever the context <em>value</em> changes. Clicking the button updates <code>n</code>, which changes the Provider's <code>value</code>, which triggers a re-render of <code>Child</code> — regardless of <code>React.memo</code>."
  },

  {
    id: 197,
    difficulty: 3,
    lang: "react",
    topic: "Custom Hook Sharing",
    code: null,
    question: "Two components both call the same custom hook useFoo(). What is true about their state?",
    options: [
      "They share the same state instance, like a singleton",
      "Each component gets its own independent state instance",
      "State is shared only if both components are siblings in the tree",
      "State is shared only if useFoo uses useContext internally"
    ],
    answer: 1,
    explanation: "Custom hooks are just functions. Each call to <code>useFoo()</code> creates a new, independent closure with its own state. To share state between components, you need lifted state, Context, or an external store — not a shared custom hook."
  },

  {
    id: 198,
    difficulty: 3,
    lang: "react",
    topic: "useLayoutEffect",
    code: `function App() {
  React.useEffect(() => { console.log("effect"); });
  React.useLayoutEffect(() => { console.log("layout"); });
  return <div />;
}`,
    question: "In what order are the logs printed?",
    options: ["effect\nlayout", "layout\neffect", "They run in parallel", "layout only — useEffect is skipped when useLayoutEffect is present"],
    answer: 1,
    explanation: "<code>useLayoutEffect</code> fires synchronously <em>after</em> DOM mutations but <em>before</em> the browser paints. <code>useEffect</code> fires after the paint. So the order is always: <code>layout</code> → <code>effect</code>."
  },

  {
    id: 199,
    difficulty: 3,
    lang: "react",
    topic: "Derived State Anti-pattern",
    code: `function List({ items }) {
  const [localItems, setLocalItems] = React.useState(items);

  return (
    <ul>
      {localItems.map(i => <li key={i}>{i}</li>)}
    </ul>
  );
}`,
    question: "What problem does this pattern have?",
    options: [
      "useState cannot accept arrays as the initial value",
      "If the parent re-renders with a new items prop, localItems will not update because useState ignores subsequent initial values",
      "The component will re-render infinitely because localItems changes on every render",
      "map is not allowed inside JSX"
    ],
    answer: 1,
    explanation: "<code>useState(items)</code> uses <code>items</code> only for the <em>initial</em> state. If the parent passes a new <code>items</code> array later, <code>localItems</code> is stale. The fix is to use <code>items</code> directly from props (derived state), or add a <code>useEffect</code> to sync — though the former is preferred."
  },

  {
    id: 200,
    difficulty: 3,
    lang: "react",
    topic: "useReducer",
    code: `function reducer(state, action) {
  switch (action.type) {
    case "inc": return { count: state.count + 1 };
    case "dec": return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, { count: 10 });
  return (
    <>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </>
  );
}`,
    question: "What does the span display after clicking '-' twice then '+' once?",
    options: ["10", "9", "11", "8"],
    answer: 1,
    explanation: "Initial count is <code>10</code>. After two <code>dec</code> actions: <code>10 → 9 → 8</code>. After one <code>inc</code> action: <code>8 → 9</code>. The span displays <code>9</code>."
  },

  // ─── SQL ────────────────────────────────────────────────────────

  {
    id: 201,
    difficulty: 1,
    lang: "sql",
    topic: "COUNT",
    setup: `CREATE TABLE users (id INTEGER, name TEXT, age INTEGER);
INSERT INTO users VALUES (1, 'Alice', 30);
INSERT INTO users VALUES (2, 'Bob', 25);
INSERT INTO users VALUES (3, 'Carol', 35);`,
    code: `SELECT COUNT(*) FROM users;`,
    question: "What does this query return?",
    options: ["1", "2", "3", "0"],
    answer: 2,
    explanation: "<code>COUNT(*)</code> counts all rows regardless of NULL values. There are 3 rows in the table."
  },

  {
    id: 202,
    difficulty: 1,
    lang: "sql",
    topic: "SELECT + WHERE",
    setup: `CREATE TABLE users (id INTEGER, name TEXT, age INTEGER);
INSERT INTO users VALUES (1, 'Alice', 30);
INSERT INTO users VALUES (2, 'Bob', 25);
INSERT INTO users VALUES (3, 'Carol', 35);`,
    code: `SELECT name, age FROM users WHERE id = 2;`,
    question: "What does this query return?",
    options: ["Alice|30", "Bob|25", "Carol|35", "2|Bob"],
    answer: 1,
    explanation: "<code>WHERE id = 2</code> filters to the single row for Bob. sqlite3 outputs columns pipe-separated: <code>Bob|25</code>."
  },

  {
    id: 203,
    difficulty: 1,
    lang: "sql",
    topic: "WHERE comparison",
    setup: `CREATE TABLE products (id INTEGER, name TEXT, price REAL);
INSERT INTO products VALUES (1, 'Apple', 0.99);
INSERT INTO products VALUES (2, 'Banana', 0.49);
INSERT INTO products VALUES (3, 'Cherry', 2.99);`,
    code: `SELECT name FROM products WHERE price > 1.00;`,
    question: "What does this query return?",
    options: ["Apple", "Banana", "Cherry", "Apple\nCherry"],
    answer: 2,
    explanation: "Only Cherry (2.99) satisfies <code>price &gt; 1.00</code>. Apple (0.99) and Banana (0.49) are both below the threshold."
  },

  {
    id: 204,
    difficulty: 1,
    lang: "sql",
    topic: "ORDER BY",
    setup: `CREATE TABLE employees (id INTEGER, name TEXT, salary INTEGER);
INSERT INTO employees VALUES (1, 'Dan', 70000);
INSERT INTO employees VALUES (2, 'Eve', 50000);
INSERT INTO employees VALUES (3, 'Frank', 90000);`,
    code: `SELECT name FROM employees ORDER BY salary ASC;`,
    question: "What does this query return?",
    options: ["Dan\nEve\nFrank", "Eve\nDan\nFrank", "Frank\nDan\nEve", "Eve\nFrank\nDan"],
    answer: 1,
    explanation: "<code>ORDER BY salary ASC</code> sorts lowest to highest: Eve (50k) → Dan (70k) → Frank (90k)."
  },

  {
    id: 205,
    difficulty: 1,
    lang: "sql",
    topic: "ORDER BY + LIMIT",
    setup: `CREATE TABLE employees (id INTEGER, name TEXT, salary INTEGER);
INSERT INTO employees VALUES (1, 'Dan', 70000);
INSERT INTO employees VALUES (2, 'Eve', 50000);
INSERT INTO employees VALUES (3, 'Frank', 90000);`,
    code: `SELECT name FROM employees ORDER BY salary DESC LIMIT 1;`,
    question: "What does this query return?",
    options: ["Dan", "Eve", "Frank", "Dan\nFrank"],
    answer: 2,
    explanation: "<code>ORDER BY salary DESC</code> puts Frank (90k) first; <code>LIMIT 1</code> returns only that top row."
  },

  {
    id: 206,
    difficulty: 1,
    lang: "sql",
    topic: "DISTINCT",
    setup: `CREATE TABLE orders (id INTEGER, customer TEXT);
INSERT INTO orders VALUES (1, 'Alice');
INSERT INTO orders VALUES (2, 'Bob');
INSERT INTO orders VALUES (3, 'Alice');
INSERT INTO orders VALUES (4, 'Carol');`,
    code: `SELECT COUNT(DISTINCT customer) FROM orders;`,
    question: "What does this query return?",
    options: ["4", "2", "3", "1"],
    answer: 2,
    explanation: "<code>COUNT(DISTINCT customer)</code> counts unique names. Alice appears twice but is counted once. Three distinct customers → <code>3</code>."
  },

  {
    id: 207,
    difficulty: 1,
    lang: "sql",
    topic: "SELECT *",
    setup: `CREATE TABLE colors (id INTEGER, name TEXT);
INSERT INTO colors VALUES (1, 'Red');
INSERT INTO colors VALUES (2, 'Green');
INSERT INTO colors VALUES (3, 'Blue');`,
    code: `SELECT * FROM colors WHERE id = 3;`,
    question: "What does this query return?",
    options: ["Blue", "3|Blue", "3", "id|name"],
    answer: 1,
    explanation: "<code>SELECT *</code> returns all columns. sqlite3 outputs them pipe-separated with no headers in default mode: <code>3|Blue</code>."
  },

  {
    id: 208,
    difficulty: 1,
    lang: "sql",
    topic: "IS NULL",
    setup: `CREATE TABLE contacts (id INTEGER, name TEXT, phone TEXT);
INSERT INTO contacts VALUES (1, 'Alice', '555-1234');
INSERT INTO contacts VALUES (2, 'Bob', NULL);
INSERT INTO contacts VALUES (3, 'Carol', '555-5678');`,
    code: `SELECT name FROM contacts WHERE phone IS NULL;`,
    question: "What does this query return?",
    options: ["Alice", "Bob", "Carol", "NULL"],
    answer: 1,
    explanation: "<code>IS NULL</code> is the correct test for NULL — <code>= NULL</code> always evaluates to unknown. Only Bob has a NULL phone number."
  },

  {
    id: 209,
    difficulty: 2,
    lang: "sql",
    topic: "INNER JOIN",
    setup: `CREATE TABLE customers (id INTEGER, name TEXT);
INSERT INTO customers VALUES (1, 'Alice');
INSERT INTO customers VALUES (2, 'Bob');
CREATE TABLE orders (id INTEGER, customer_id INTEGER, amount INTEGER);
INSERT INTO orders VALUES (1, 1, 100);
INSERT INTO orders VALUES (2, 1, 200);`,
    code: `SELECT customers.name, orders.amount
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id;`,
    question: "What does this query return?",
    options: ["Alice|100\nAlice|200", "Alice|100\nBob|200", "Alice|100", "Alice|100\nAlice|200\nBob|"],
    answer: 0,
    explanation: "<code>INNER JOIN</code> returns only matched rows. Bob has no orders so he is excluded. Alice has two orders, producing <code>Alice|100</code> and <code>Alice|200</code>."
  },

  {
    id: 210,
    difficulty: 2,
    lang: "sql",
    topic: "LEFT JOIN",
    setup: `CREATE TABLE customers (id INTEGER, name TEXT);
INSERT INTO customers VALUES (1, 'Alice');
INSERT INTO customers VALUES (2, 'Bob');
CREATE TABLE orders (id INTEGER, customer_id INTEGER, amount INTEGER);
INSERT INTO orders VALUES (1, 1, 100);`,
    code: `SELECT COUNT(*) FROM customers LEFT JOIN orders ON customers.id = orders.customer_id;`,
    question: "What does this query return?",
    options: ["1", "2", "3", "0"],
    answer: 1,
    explanation: "<code>LEFT JOIN</code> keeps all left-table rows. Alice matches one order; Bob has no orders (1 row with NULLs). <code>COUNT(*)</code> counts both rows = <code>2</code>."
  },

  {
    id: 211,
    difficulty: 2,
    lang: "sql",
    topic: "GROUP BY + COUNT",
    setup: `CREATE TABLE orders (id INTEGER, customer TEXT, amount INTEGER);
INSERT INTO orders VALUES (1, 'Alice', 50);
INSERT INTO orders VALUES (2, 'Bob', 75);
INSERT INTO orders VALUES (3, 'Alice', 100);`,
    code: `SELECT customer, COUNT(*) FROM orders GROUP BY customer ORDER BY customer;`,
    question: "What does this query return?",
    options: ["Alice|1\nBob|1", "Alice|2\nBob|1", "Alice|1\nBob|2", "Alice|2\nBob|2"],
    answer: 1,
    explanation: "Alice appears in 2 rows, Bob in 1. Ordered alphabetically: <code>Alice|2</code> then <code>Bob|1</code>."
  },

  {
    id: 212,
    difficulty: 2,
    lang: "sql",
    topic: "HAVING",
    setup: `CREATE TABLE orders (id INTEGER, customer TEXT, amount INTEGER);
INSERT INTO orders VALUES (1, 'Alice', 50);
INSERT INTO orders VALUES (2, 'Bob', 75);
INSERT INTO orders VALUES (3, 'Alice', 100);`,
    code: `SELECT customer, COUNT(*) FROM orders GROUP BY customer HAVING COUNT(*) > 1;`,
    question: "What does this query return?",
    options: ["Bob|1", "Alice|2\nBob|1", "Alice|2", "No rows"],
    answer: 2,
    explanation: "<code>HAVING</code> filters groups after aggregation. Alice has 2 orders (passes); Bob has only 1 (excluded). Result: <code>Alice|2</code>."
  },

  {
    id: 213,
    difficulty: 2,
    lang: "sql",
    topic: "AVG",
    setup: `CREATE TABLE scores (id INTEGER, student TEXT, score INTEGER);
INSERT INTO scores VALUES (1, 'Alice', 80);
INSERT INTO scores VALUES (2, 'Bob', 90);
INSERT INTO scores VALUES (3, 'Carol', 70);`,
    code: `SELECT AVG(score) FROM scores;`,
    question: "What does this query return?",
    options: ["80", "80.0", "240", "70"],
    answer: 1,
    explanation: "(80+90+70)/3 = 80.0. SQLite returns <code>AVG</code> as floating-point, so the output is <code>80.0</code>, not the integer <code>80</code>."
  },

  {
    id: 214,
    difficulty: 2,
    lang: "sql",
    topic: "SUM with expression",
    setup: `CREATE TABLE items (id INTEGER, name TEXT, qty INTEGER, price REAL);
INSERT INTO items VALUES (1, 'Pen', 3, 1.5);
INSERT INTO items VALUES (2, 'Notebook', 2, 4.0);
INSERT INTO items VALUES (3, 'Eraser', 5, 0.5);`,
    code: `SELECT SUM(qty * price) FROM items;`,
    question: "What does this query return?",
    options: ["13.0", "14.5", "15.0", "16.5"],
    answer: 2,
    explanation: "Pen: 3×1.5=4.5, Notebook: 2×4.0=8.0, Eraser: 5×0.5=2.5. Sum = <code>15.0</code>."
  },

  {
    id: 215,
    difficulty: 2,
    lang: "sql",
    topic: "Subquery in WHERE",
    setup: `CREATE TABLE employees (id INTEGER, name TEXT, salary INTEGER);
INSERT INTO employees VALUES (1, 'Alice', 80000);
INSERT INTO employees VALUES (2, 'Bob', 60000);
INSERT INTO employees VALUES (3, 'Carol', 75000);`,
    code: `SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees)
ORDER BY name;`,
    question: "What does this query return?",
    options: ["Alice", "Alice\nCarol", "Bob", "Alice\nBob\nCarol"],
    answer: 1,
    explanation: "AVG = (80000+60000+75000)/3 ≈ 71667. Alice (80k) and Carol (75k) are above average; Bob (60k) is not."
  },

  {
    id: 216,
    difficulty: 2,
    lang: "sql",
    topic: "LIKE",
    setup: `CREATE TABLE products (id INTEGER, name TEXT);
INSERT INTO products VALUES (1, 'Apple Juice');
INSERT INTO products VALUES (2, 'Orange Juice');
INSERT INTO products VALUES (3, 'Apple Cider');`,
    code: `SELECT COUNT(*) FROM products WHERE name LIKE 'Apple%';`,
    question: "What does this query return?",
    options: ["1", "2", "3", "0"],
    answer: 1,
    explanation: "<code>LIKE 'Apple%'</code> matches any string starting with 'Apple'. Both 'Apple Juice' and 'Apple Cider' match → <code>2</code>."
  },

  {
    id: 217,
    difficulty: 2,
    lang: "sql",
    topic: "COALESCE",
    setup: `CREATE TABLE users (id INTEGER, name TEXT, nickname TEXT);
INSERT INTO users VALUES (1, 'Alice', 'Ali');
INSERT INTO users VALUES (2, 'Bob', NULL);
INSERT INTO users VALUES (3, 'Carol', NULL);`,
    code: `SELECT COALESCE(nickname, name) FROM users ORDER BY id;`,
    question: "What does this query return?",
    options: ["Ali\nNULL\nNULL", "Ali\nBob\nCarol", "Alice\nBob\nCarol", "Ali\n\n"],
    answer: 1,
    explanation: "<code>COALESCE</code> returns the first non-NULL argument. Alice has nickname 'Ali'; Bob and Carol fall back to <code>name</code>."
  },

  {
    id: 218,
    difficulty: 2,
    lang: "sql",
    topic: "BETWEEN",
    setup: `CREATE TABLE products (id INTEGER, name TEXT, price REAL);
INSERT INTO products VALUES (1, 'Apple', 0.99);
INSERT INTO products VALUES (2, 'Banana', 1.5);
INSERT INTO products VALUES (3, 'Cherry', 2.99);
INSERT INTO products VALUES (4, 'Date', 4.5);`,
    code: `SELECT COUNT(*) FROM products WHERE price BETWEEN 1.00 AND 3.00;`,
    question: "What does this query return?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "<code>BETWEEN</code> is inclusive. Banana (1.5) and Cherry (2.99) fall in range; Apple (0.99) and Date (4.5) do not → <code>2</code>."
  },

  {
    id: 219,
    difficulty: 2,
    lang: "sql",
    topic: "NULL in aggregates",
    setup: null,
    code: null,
    question: "Which of the following is true about NULL values in SQL aggregate functions?",
    options: [
      "COUNT(*) and COUNT(col) both skip NULL values",
      "AVG(col) treats NULL as zero when computing the average",
      "COUNT(*) counts all rows; COUNT(col) ignores rows where col is NULL",
      "SUM(col) returns 0 if all values are NULL"
    ],
    answer: 2,
    explanation: "<code>COUNT(*)</code> counts every row. <code>COUNT(col)</code> only counts non-NULL values. <code>AVG</code> and <code>SUM</code> also ignore NULLs — they never treat NULL as zero."
  },

  {
    id: 220,
    difficulty: 3,
    lang: "sql",
    topic: "Multiple JOINs",
    setup: `CREATE TABLE students (id INTEGER, name TEXT);
INSERT INTO students VALUES (1, 'Alice');
INSERT INTO students VALUES (2, 'Bob');
CREATE TABLE courses (id INTEGER, title TEXT);
INSERT INTO courses VALUES (1, 'Math');
INSERT INTO courses VALUES (2, 'Science');
CREATE TABLE enrollments (student_id INTEGER, course_id INTEGER);
INSERT INTO enrollments VALUES (1, 1);
INSERT INTO enrollments VALUES (1, 2);
INSERT INTO enrollments VALUES (2, 1);`,
    code: `SELECT students.name, courses.title
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id
ORDER BY students.name, courses.title;`,
    question: "What does this query return?",
    options: [
      "Alice|Math\nAlice|Science\nBob|Math",
      "Alice|Math\nBob|Math",
      "Alice|Math\nAlice|Science",
      "Alice|Math\nAlice|Science\nBob|Math\nBob|Science"
    ],
    answer: 0,
    explanation: "Chained INNER JOINs link students → enrollments → courses. Alice enrolled in Math and Science; Bob only in Math. Ordered alphabetically: 3 rows."
  },

  {
    id: 221,
    difficulty: 3,
    lang: "sql",
    topic: "Self JOIN",
    setup: `CREATE TABLE employees (id INTEGER, name TEXT, manager_id INTEGER);
INSERT INTO employees VALUES (1, 'Alice', NULL);
INSERT INTO employees VALUES (2, 'Bob', 1);
INSERT INTO employees VALUES (3, 'Carol', 1);`,
    code: `SELECT e.name, m.name
FROM employees e
INNER JOIN employees m ON e.manager_id = m.id
ORDER BY e.name;`,
    question: "What does this query return?",
    options: [
      "Alice|\nBob|Alice\nCarol|Alice",
      "Bob|Alice\nCarol|Alice",
      "Alice|NULL\nBob|Alice\nCarol|Alice",
      "Bob|Alice"
    ],
    answer: 1,
    explanation: "A self join matches each employee to their manager. Alice has <code>manager_id = NULL</code> — excluded by INNER JOIN. Bob and Carol both report to Alice."
  },

  {
    id: 222,
    difficulty: 3,
    lang: "sql",
    topic: "Correlated subquery",
    setup: `CREATE TABLE products (id INTEGER, name TEXT, category TEXT, price REAL);
INSERT INTO products VALUES (1, 'Apple', 'Fruit', 1.0);
INSERT INTO products VALUES (2, 'Banana', 'Fruit', 0.5);
INSERT INTO products VALUES (3, 'Carrot', 'Veggie', 0.8);
INSERT INTO products VALUES (4, 'Daikon', 'Veggie', 1.2);`,
    code: `SELECT name FROM products p
WHERE price = (SELECT MAX(price) FROM products WHERE category = p.category)
ORDER BY name;`,
    question: "What does this query return?",
    options: ["Apple\nDaikon", "Apple\nCarrot", "Daikon", "Apple"],
    answer: 0,
    explanation: "The correlated subquery computes the max price per category for each outer row. Apple is the priciest Fruit (1.0); Daikon is the priciest Veggie (1.2). Both match."
  },

  {
    id: 223,
    difficulty: 3,
    lang: "sql",
    topic: "ROW_NUMBER",
    setup: `CREATE TABLE scores (id INTEGER, name TEXT, score INTEGER);
INSERT INTO scores VALUES (1, 'Alice', 90);
INSERT INTO scores VALUES (2, 'Bob', 75);
INSERT INTO scores VALUES (3, 'Carol', 85);`,
    code: `SELECT name, ROW_NUMBER() OVER (ORDER BY score DESC) AS rn
FROM scores;`,
    question: "What does this query return?",
    options: [
      "Alice|1\nCarol|2\nBob|3",
      "Alice|1\nBob|2\nCarol|3",
      "Bob|1\nCarol|2\nAlice|3",
      "Alice|3\nCarol|2\nBob|1"
    ],
    answer: 0,
    explanation: "<code>ROW_NUMBER() OVER (ORDER BY score DESC)</code> ranks from highest score. Alice (90)→1, Carol (85)→2, Bob (75)→3."
  },

  {
    id: 224,
    difficulty: 3,
    lang: "sql",
    topic: "CTE",
    setup: `CREATE TABLE orders (id INTEGER, customer TEXT, amount INTEGER);
INSERT INTO orders VALUES (1, 'Alice', 100);
INSERT INTO orders VALUES (2, 'Bob', 200);
INSERT INTO orders VALUES (3, 'Alice', 150);`,
    code: `WITH totals AS (
  SELECT customer, SUM(amount) AS total FROM orders GROUP BY customer
)
SELECT customer, total FROM totals WHERE total > 200 ORDER BY customer;`,
    question: "What does this query return?",
    options: ["Alice|250\nBob|200", "Alice|250", "Bob|200", "No rows"],
    answer: 1,
    explanation: "The CTE computes totals: Alice=250, Bob=200. The outer query filters <code>total &gt; 200</code> (strict). Only Alice (250) qualifies — Bob's 200 does not satisfy the strict greater-than."
  },

  {
    id: 225,
    difficulty: 3,
    lang: "sql",
    topic: "UNION vs UNION ALL",
    setup: null,
    code: null,
    question: "Which of the following is true about UNION vs UNION ALL in SQL?",
    options: [
      "UNION ALL removes duplicate rows; UNION keeps them",
      "UNION deduplicates rows; UNION ALL keeps all rows including duplicates",
      "Both UNION and UNION ALL sort the result set automatically",
      "UNION ALL is slower than UNION because it does extra work"
    ],
    answer: 1,
    explanation: "<code>UNION</code> performs an implicit deduplication step, adding overhead. <code>UNION ALL</code> concatenates results as-is, keeping duplicates, and is generally faster. Neither guarantees ordering without an explicit <code>ORDER BY</code>."
  },

];

