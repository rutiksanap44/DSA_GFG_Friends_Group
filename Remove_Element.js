let removeElement = (nums,val) => {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums.unshift();
        }
    }
    return nums;
} 
let arr1 = [0,1,2,2,3,0,4,2];
console.log(removeElement(arr1,2));
