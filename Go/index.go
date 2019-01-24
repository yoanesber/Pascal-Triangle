package main

import (
	"fmt"
)

func main() {
	n := 5
	fmt.Println("Pascal Triangle")
	triangle1(n)
}

func factorial(num int) int {
	f := 1
	for i := 1; i < num; i++ {
		f *= i
	}

	return f
}

func triangle1(n int) {
	fmt.Println("*")
}
