package main

import (
	"fmt"
)

func main() {
	n := 5
	fmt.Println("Pascal Triangle")
	pascalTriangle(n)

	fmt.Println()
	fmt.Println("Triangle Model 1")
	triangle1(n)

	fmt.Println()
	fmt.Println("Triangle Model 2")
	triangle2(n)

	fmt.Println()
	fmt.Println("Triangle Model 3")
	triangle3(n)

	fmt.Println()
	fmt.Println("Triangle Model 4")
	triangle4(n)

	fmt.Println()
	fmt.Println("Triangle Model 5")
	triangle5(n)

	fmt.Println()
	fmt.Println("Triangle Model 6")
	triangle6(n)

	fmt.Println()
	fmt.Println("Triangle Model 7")
	triangle7(n)

	fmt.Println()
	fmt.Println("Triangle Model 8")
	triangle8(n)
}

func factorial(num int) int {
	f := 1
	for i := 1; i < num; i++ {
		f *= i
	}

	return f
}

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
func pascalTriangle(n int) {
	for i := 0; i < n; i++ {
		for j := 0; j <= (n - i - 2); j++ {
			fmt.Print(" ")
		}

		for k := 0; k <= i; k++ {
			digit := factorial(i) / (factorial(k) * factorial(i-k))
			fmt.Print(digit)
			// process.stdout.write("*");
			fmt.Print(" ")
		}

		fmt.Println()
	}
}

// *
// * *
// * * *
// * * * *
// * * * * *
func triangle1(n int) {
	for i := 0; i < n; i++ {
		// for j := 0; j < (n - 1); j++ {
		// 	fmt.Print("  ")
		// }

		for k := 0; k <= i; k++ {
			fmt.Print("* ")
		}

		fmt.Println()
	}
}

// * * * * *
// * * * *
// * * *
// * *
// *
func triangle2(n int) {
	for i := 0; i < n; i++ {

		for j := 0; j < (n - i); j++ {
			fmt.Print("* ")
		}

		fmt.Println()
	}
}

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
func triangle3(n int) {
	for i := 0; i < n; i++ {
		for j := 0; j < (n - i - 1); j++ {
			fmt.Print("  ")
		}

		for k := 0; k <= i; k++ {
			fmt.Print("* ")
		}

		fmt.Println()
	}
}

// * * * * *
//   * * * *
//     * * *
//       * *
//         *
func triangle4(n int) {
	for i := 0; i < n; i++ {
		for j := 0; j < i; j++ {
			fmt.Print("  ")
		}

		for k := 0; k < (n - i); k++ {
			fmt.Print("* ")
		}

		fmt.Println()
	}
}

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
func triangle5(n int) {
	odd := 1
	for i := 0; i < n; i++ {
		for j := 0; j < (n - i - 1); j++ {
			fmt.Print("  ")
		}

		for k := 0; k < odd; k++ {
			fmt.Print("* ")
		}

		fmt.Println()
		odd += 2
	}
}

// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *
func triangle6(n int) {
	odd := (n * 2) - 1

	for i := 0; i < n; i++ {
		for j := 0; j < i; j++ {
			fmt.Print("  ")
		}

		for k := 0; k < odd; k++ {
			fmt.Print("* ")
		}

		fmt.Println()
		odd -= 2
	}
}

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//   * * * *
//     * * *
//       * *
//         *
func triangle7(n int) {
	odd := (n * 2) - 1

	for i := 0; i < odd; i++ {
		if i < n {
			for j := 0; j < (n - 1 - i); j++ {
				fmt.Print("  ")
			}

			for k := 0; k <= i; k++ {
				fmt.Print("* ")
			}
		} else {
			for j := 0; j <= (i - n); j++ {
				fmt.Print("  ")
			}

			for k := 0; k < (odd - i); k++ {
				fmt.Print("* ")
			}
		}

		fmt.Println()
	}
}

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
func triangle8(n int) {
	odd := (n * 2) - 1

	for i := 0; i < odd; i++ {
		if i < n {
			for j := 0; j <= i; j++ {
				fmt.Print("* ")
			}

			for k := 0; k < (n - 1 - i); k++ {
				fmt.Print("  ")
			}
		} else {
			for j := 0; j < (odd - i); j++ {
				fmt.Print("* ")
			}

			for k := 0; k <= (i - n); k++ {
				fmt.Print("  ")
			}
		}

		fmt.Println()
	}
}
