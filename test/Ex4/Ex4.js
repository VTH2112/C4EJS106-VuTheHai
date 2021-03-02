let a = Number(prompt("Enter a"));
let b = Number(prompt("Enter b"));
let c= Number(prompt("Enter c"));

console.log(`PT : ${a}x^2 \+ ${b}x \+${c} = 0`);

let da = b*b - 4*a*c;

if(da < 0 ){
        console.log("PT vo nghiem");

}else if(da == 0 ){
    console.log("PT co 2 nghiem x1 = x2 =" + (-b/2*a) );
}else{
    if(da > 0) {
        var x1 = (-b+Math.sqrt(da))/(2*a);
        var x2 = (-b-Math.sqrt(da))/(2*a);
        alert('Nghiem thu nhat x1 = '+x1+'\n Nghiem thu hai x2 = '+x2);
    } else if ( da == 0) {
        var sum = -b/2*a
        alert('Phuong trinh co nghiem kep: x1 = x2 = '+sum);
    } else {
        alert('Phuong trinh vo nghiem');
    }
}