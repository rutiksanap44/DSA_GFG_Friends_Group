// find the largest in array
let arr = [1,2,3,99,-1,2,5,34];
let maxNum = -999;
for(let i of arr){
    maxNum = maxNum < i ? i : maxNum;
}
console.log(maxNum);
