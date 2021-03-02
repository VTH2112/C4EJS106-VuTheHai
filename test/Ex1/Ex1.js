let  name = prompt("Enter your name");
let math = prompt("Enter your Math point");
let literature = prompt("Enter your Literature point");
let english = prompt("Enter your English point");
let avg = (Number(math) + Number(literature) + Number(english))/3 ;

console.log(`Diem trung binh cua ${name} trong nam hoc vua roi :`+ "\n"+ "Toan :" +math + "\n"+ "Van :" + literature+ "\n" + "Anh :" + english);

alert(`Diem trung binh cua ${name} : ` + avg );

if(avg < 4){
    alert("Kem");
}else if(avg < 6 ){
    alert("trung binh");
}else if(avg < 8 ){
    alert("Kha");
}else{
    alert("Gioi");
}
