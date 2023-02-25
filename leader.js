function leader(arr) {
    let newArr = [];
    let tempMax = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i == arr.length - 1) {
            newArr.push(arr[i]);
            tempMax = arr[i];
            continue;
        }
        if(arr[i]>=tempMax){
            tempMax = arr[i];
            newArr.unshift(tempMax);
        }
    }
    return newArr;
}
let arr = [1,2,3,4,0];
console.log(leader(arr));
