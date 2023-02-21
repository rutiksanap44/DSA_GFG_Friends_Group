let arr = [1,2,3,4,5,7];

function twoSum(arr, target){
    let arrNew = [];
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] == target){
                return [i,j];
            }
        }
    }
}

console.log(twoSum(arr,5));