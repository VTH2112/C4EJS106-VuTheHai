let a=0;
while(a<10){
if(a > 0  || a< 10){
    console.log( a);
}
a++;
}
console.log("______________________________________________");
let b=0;
while(b<100){
if(b > 9  && b%7==0){
    console.log( b);
}
b++;
}
console.log("______________________________________________");
let ac = Number(prompt("Enter a :"));
let bc = Number(prompt("Enter b :"));
let n = Number(prompt("Enter n :"));
while(ac<bc){
    if(ac%n==0){
        console.log( ac);
    }
    ac++;
    }
    console.log("______________________________________________");
let m = Number(prompt("Enter m :"));
let nd= Number(prompt("Enter n:"));
let sum = 0;
while(m<nd){
        sum += m;
        m++;
    }
    console.log(sum);
    console.log("______________________________________________");
    let mn = Number(prompt("Enter m!"));
    let nn = 1;
    while(m<nd){
        nn += m;
        m++;
    }
    console.log(nn);
