let arr = [1,4,21,3,45,-9];
let newArr = [];
let newIndex = 0;
for(let i=0;i<arr.length;i+=2){
    newArr[newIndex] = arr[i] + arr[i+1];
    newIndex++;
}
console.log(newArr);