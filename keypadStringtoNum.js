function keypadstringtonum(str) {
    let nums = ["2", "22", "222", "3", "33", "333",
        "4", "44", "444", "5", "55", "555",
        "6", "66", "666", "7", "77", "777",
        "7777", "8", "88", "888", "9", "99",
        "999", "9999"];
    let number = "";
    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) - 65;
        number += nums[index];
    }
    return number;
}
console.log(keypadstringtonum("AKASH"));
