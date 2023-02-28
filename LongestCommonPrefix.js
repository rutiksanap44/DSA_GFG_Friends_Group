function LongestCommonPrefix(strs){
    if(strs.length == 1){
        return strs[0];
    }
    let flag = "";
    let currString = "";
    let finalString = "";
    let bool = false;
    for(let i=0;i<strs[0].length;i++){
        flag = strs[0].substring(0,i+1);
        for(let j=0;j<strs.length;j++){
            if(strs[j].includes(flag)){
                bool = true;
            }else{
                bool = false;
                break;
            }
        }
        if(bool){
            currString = flag;
        }
        if(currString.length>finalString.length){
            finalString = currString;
        }
        currString="";
    }
    return finalString;
}


let str = ["aaa","aa","aaa"];
console.log(LongestCommonPrefix(str));