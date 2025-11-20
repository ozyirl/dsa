function SelectionSort(nums:number[]):number[]{
    const result:number[]=[]

    for(let i = 0;i<nums.length;i++){
       let minimum = i

       for(let j = i+1;j<nums.length;j++){
        if (nums[j] < nums[minimum]) {
            
                
                minimum = j;
            }
       }
       
       let temp = nums[i];
        nums[i] = nums[minimum];
        nums[minimum] = temp;
    }
   return nums
}

const sorts = [3,1,2,4]

console.log(SelectionSort(sorts))