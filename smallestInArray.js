// find the smallest number in array
let arr = [1,4,21,3,45,-9];
arr.sort((a, b) => b - a);
console.log(arr[arr.length-1])