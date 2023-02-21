// find the smallest number in array
let arr = [1,4,21,3,45,1];
let minNum = 0;

for(let i of arr){
    if(minNum > i){
        minNum = i;
    }
};

console.log(minNum);

// Time Complexity - > O(n) good
// O(logn) best 