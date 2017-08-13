// To print fizz if number is divisible by 3
// else print buzz if number is divisible by 5
// else print fizzbuzz if number is divisible by both
// else print number
for(var x=1;x<=100;x+=1){
    var op = "";
    if(x%3==0)
        op+="fizz";
    if(x%5==0)
        op+="buzz";
    console.log(op||x);
}