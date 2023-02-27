function anagram(s, t) {
    let arr1 = [];
    let arr2 = [];
    // storing the first string
    for (let i = 0; i < s.length; i++) {
        arr1.push(s.charAt(i));
    }
    // storing the second string
    for (let i = 0; i < t.length; i++) {
        arr2.push(t.charAt(i));
    }
    // sorting both the arrays
    arr1.sort();
    arr2.sort();
    let flag = true;
    for(i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            flag = false;
        }
    }
    return flag;
}
console.log(anagram("rat", "car"));
// anagram("Hello", "Helol");
