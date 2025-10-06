package main

import "fmt"




func twoSum(nums []int, target int) (int, int) {
    seen := make(map[int]int) 

    for i, x := range nums {
        comp := target - x

        if j, ok := seen[comp]; ok {
            return j, i 
        }

        seen[x] = i
    }
    return -1, -1 
}

	

func main() {
    nums := []int{2, 7, 11, 15}
    target := 9

    i, j := twoSum(nums, target)
    fmt.Println("Indices:", i, j) 
}