function longestSubstringUnique(str) {
    const strSet = new Set();
    let currentMax = "";
    let finalMax = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            currentMax+=str.substring(i,j+1);
            if(currentMax.length>finalMax.length){
                finalMax=currentMax;
            }
            currentMax="";
        }
    }
    return finalMax;
};
console.log(longestSubstringUnique("HELLO"));


const str1 = new Set();
str1.add("h");
console.log(str1)