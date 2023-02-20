// find the occurence of number in given array
function findOccurence(arr,target){
    let count = 0;
    for(let i of arr){
        if(target === i){
            count++;
        }
    }
    return count;
}
const occurence = findOccurence([1,2,3,3,3,4,1],1);
console.log(occurence);