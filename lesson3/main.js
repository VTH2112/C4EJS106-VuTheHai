let movies = ["Spiderman","Batman","Hitman"];
console.log(movies);
// CREATE
movies.push("Superman");
console.log(movies);
movies.unshift("Wonderwoman");
console.log(movies);
console.log("--------------------------------------------------------");
let list = ["A","B","C","D"];
while(true){
    let ans = prompt("Co them khong ? (Y/N)");
if(ans == "Y" || ans =="y"){
    let nextStudent = prompt("Ten cua hoc sinh");
    list.push(nextStudent);
}
else{
    console.log(list);
    break;
}
}
let a=0 ;
while(a < movies.length){
    console.log(movies[a]);
    a++;
}

for (let i of movies){
    console.log(i);

} 

for (let i in movies){
    console.log(i);

}
movies.splice(1,movies.length-1);
console.log(movies);