function shortestPath(str){
    let x = 0;
    let y = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="n"){
            y++;
        }else if(str[i]=="e"){
            x++;
        }else if(str[i]=="s"){
            y--;
        }else if(str[i]=="w"){
            x--;
        }
    }
    return ((x**2)+(y**2))**(0.5);
}
console.log(shortestPath("wneenesennn"));