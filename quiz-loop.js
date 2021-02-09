// Triangle easy(20-27)
// Triangle hard(39-54)
// Optional(1-19)
// Bonus quiz(58)

// 20
let i = 1;
while(i<6) {
    let j = 0;
    while(j<i) {
        process.stdout.write(i.toString());
        j++;
    }
    process.stdout.write("\n");
    i++
}

// 21
for(let i = 5; i>0; i--){
    for(let j = 0; j<i; j++){
        process.stdout.write(i.toString());
    }
    process.stdout.write("\n")
}
    
// 22
for(let i=1; i<6; i++){
    for(let j=6; j>i; j--){
        process.stdout.write(i.toString());
    }
    process.stdout.write("\n");
}

// 23
for(let i=5; i>0; i--){
    for(let j=6; j>i; j--){
        process.stdout.write(i.toString());
    }process.stdout.write("\n");
}

// 24
for(let i=2; i<7; i++){
    for(let j=1; j<i; j++){
        process.stdout.write(j.toString());
    }process.stdout.write("\n");
}

// 25
for(let i=6; i>1; i--){
    for(let j=1; j<i; j++){
        process.stdout.write(j.toString());
    }process.stdout.write("\n")
}

// 26
for(let i=1; i<6; i++){
    for(let j=i; j>0; j--){
        process.stdout.write(j.toString());
    }process.stdout.write("\n");
}

// 27
for(let i=5; i>0; i--){
    for(let j=i; j>0; j--){
        process.stdout.write(j.toString());
    }process.stdout.write("\n");
}

// 39
for(let i=1; i<10; i=i+2){
    for(let j=1; j<=i; j++){
        process.stdout.write(j.toString());
    }process.stdout.write("\n");
}

// 40
for(let i=1; i<=5; i++){
    if(i%2==1){
        for(let j=1; j<=i; j++){
            process.stdout.write(((2*j)-1).toString());
        }process.stdout.write("\n");
    }
    else{
        for(let k=1; k<=i; k++){
            process.stdout.write((2*k).toString());
        }process.stdout.write("\n");
    }
}

// 41
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(((2*j)-1).toString());
    }
    j=i
    while((j-1)>=1){
        process.stdout.write(((2*(j-1))-1).toString());
        j--;
    }process.stdout.write("\n")
}

// 42
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write((2*j).toString());
    }
    j=i
    while((j-1)>=1){
        process.stdout.write((2*(j-1)).toString());
        j--;
    }process.stdout.write("\n")
}

// 43
for(let i=1; i<6; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(j.toString());
    }
    j=i-1
    while(j>0){
        process.stdout.write(j.toString());
        j--;
    }process.stdout.write("\n")
}

// 44*****
for(let i=1; i<6; i++){
    for(let j=i+1; j<(2*i-1); j++){
        process.stdout.write(j.toString());
    }j=(2*i)-1;
    while(j>=i){
        process.stdout.write(j.toString());
        j--;
    }process.stdout.write("\n");
}

// 45**
let k=0;
for(let i=1; i<6; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write((j+k).toString()+ " ");
    }k=i+k;  // k=j+k -> but j is in the loop and the final value of j from the loop equals to i in the loop
    process.stdout.write("\n")
}

// 46
for(let i=1; i<6; i++){
    if(i%2==1){
        for(let j=1; j<=i; j++){
            process.stdout.write(j.toString());
        }process.stdout.write("\n");
    }else{
        for(let k=i; k>0; k--){
            process.stdout.write(k.toString());
        }process.stdout.write("\n")
    }
}

// 47**
let k=0
for(let i=1; i<6; i++){
    for(let j=0; j<(2**(i-1)); j++){
        process.stdout.write((((j+k)%9)+1).toString());
    }k=(2**(i-1))+k;
    process.stdout.write("\n");
}

// 48
for(let i=1; i<6; i++){
    for(let j=1; j<6; j++){
        if(j<=i){
            process.stdout.write(j.toString());
        }else{
            process.stdout.write(" ");
        }
    }for(let k=5; k>=1; k--){
        if(k<=i){
            process.stdout.write(k.toString());
        }else{
            process.stdout.write(" ");
        }
    }process.stdout.write("\n");
}

// 49****** extremely hard
for(let i=1; i<6; i++){
    let y=-4
    for(let j=0; j<i; j++){
        let x=4-j;
        y=y+x;
        process.stdout.write((i+j+y).toString()+" ")
    }process.stdout.write("\n")
}

// 49 2nd Solution by GG
const n = 5;
for(let i = 1; i <= n; i++) {
  let cal = i;
  process.stdout.write(`${i} `);
  for(let j = n - 1; j > n - i; j--) {
    cal += j;
    process.stdout.write(`${cal} `);
    // process.stdout.write(`${j} `);
  }
  process.stdout.write('\n');
}


// 50 ***
let k=0
let x=1
for(let i=1; i<6; i++){
    for(j=1; j<=i; j++){
        process.stdout.write(x.toString()+" ");
        k++;
        x=x+k;
    }process.stdout.write("\n")
}

// 51***
let x=0;
for(let i=1; i<=5; i++){
    if((i%2)==1){
        for(let j=1; j<=i; j++){
            process.stdout.write((j+x).toString()+" ");
        }x=i+x
    }else{
        for(let k=i; k>0; k--){
            process.stdout.write((x+k).toString()+" ");
        }x=i+x
    }process.stdout.write("\n");
}

// 52
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        if(i<=3){
            process.stdout.write(i.toString());
        }else{
            process.stdout.write((6-i).toString());
        }
    }process.stdout.write("\n");
}


// Coza Loza Woza
const n=110;
for(let i=1; i<=n; i++){
    if(i%3===0 & i%5===0){
        process.stdout.write("CozaLoza ");
    }else if(i%5===0){
        process.stdout.write("Loza ");
    }else if(i%7===0){
        process.stdout.write("Woza ");
    }else if(i%3===0){
        process.stdout.write("Coza ");
    }
    process.stdout.write(i.toString()+" ");
        if(i%11===0){
        process.stdout.write("\n");
    }
}
