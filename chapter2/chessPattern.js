var boardSize=8;

var board="";
for(var y=0;y<boardSize;y+=1){
    for(var x=0;x<boardSize;x+=1){
        if((x+y)%2==0)
            board+=" ";
        else
            board+="#";

    }
    board+="\n";
}
console.log(board);