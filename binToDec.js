function binToDecimal(n){
    let flag = n;
    let pow = 0;
    let ans = 0;
    while(flag>0){
        let rem = flag%10;
        ans = ans + rem * 2 ** pow;
        pow++;
        flag = parseInt(flag / 10);

    }
    return ans
};
console.log(binToDecimal(01));