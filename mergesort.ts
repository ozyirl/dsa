function MergeSort(nums:number[]):number[]{

    if(nums.length <= 1){
        return nums
    }

    const middle = Math.floor(nums.length / 2)
    const leftHalf = nums.slice(0, middle);
    const rightHalf = nums.slice(middle);

    return merge(MergeSort(leftHalf),MergeSort(rightHalf))
}

function merge(left:number[],right:number[]):number[]{

    let result:number[] = []
    let leftindex = 0 
    let rightindex = 0 

    while(leftindex < left.length && rightindex < right.length){
        if(left[leftindex] < right[rightindex]){
             result.push(left[leftindex]);
         
            leftindex++
 
        } else {
            result.push(right[rightindex])
            rightindex++
        }
    }
  

    result =  result.concat(left.slice(leftindex)).concat(right.slice(rightindex))

    return result
}


const array = [3,1,2,4]

console.log(MergeSort(array))