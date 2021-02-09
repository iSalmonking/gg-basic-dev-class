// Bonus 58
let a;
for(let i=0; i<=10; i++){
    if(i<=5){
        a=i;
    }else{
        a=10-i;
    }
    for(let j=0; j<=a; j++){
        if(j==0){
            process.stdout.write("*");
        }else{
            process.stdout.write(j.toString());
        }
    }for(let k=a-1; k>=0; k--){
        if(k==0){
            process.stdout.write("*");
        }else{
            process.stdout.write(k.toString());
        }
    }process.stdout.write("\n");
}