let str = "MCMXCIV";
let num = 0;
for(let i of str){
    switch (i) {
        case "I":
            num += 1;
            break;
    
        case "V":
            num += 5;
            break;
    
        case "X":
            num += 10;
            break;
    
        case "L":
            num += 50;
            break;
    
        case "C":
            num += 100;
            break;
    
        case "D":
            num += 500;
            break;
    
        case "M":
            num += 1000;
            break;
    
        default:
            console.log("Invalid Input");
    };
}
console.log(num);

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.