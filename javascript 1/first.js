/*console.log("hello world");
let name="darshan";
let age=22;
x=null;
y=undefined;
 console.log(x);
 let a;
 console.log(a);
 let isFollow=true;
 console.log(isFollow);

 const student = {
        name:"darshan",
        age:22,
        cgpa:6.8,
        isPass : true
 };
 console.log(student.name);
 console.log(student["name"])
student.age=student.age+1;
console.log(student.age);

const product = {
    name : "pen",
    rating : 4,
    offer : 5,
    price :200
};*/
/*let items = [250,254,374,354,435,453];

let idx =0;
for(let val of items){
    console.log('value at index ' + idx + ' = ' + val);
    idx++;
};*/

//  let foodItems = ['rice','dal','curry','apple','banana'];
//  console.log(foodItems);
// console.log("hello world");

// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// let age=22;
// console.log(typeof age); 
// const student = {
//     name:"darshan",
//     age:22,
//     cgpa:6.8,
//     isPass : true
// };
// console.log(student.name);
// console.log(student["name"])
// student.age=student.age+1;
// student["age"]=student["age"]+1;
// console.log(student.age);

// for(let key in student){
 
//     console.log(student[key]);
// }

// let num = 11;
// if(num % 2 == 0){
//     console.log(num, "is even");
// }
// else{
//     console.log(num,"is odd");
// }

// if(num>0){
//     console.log(num,"is positive");
// }
// else if(num<0){
//     console.log(num,"is negative");
// }
// else{
//     console.log(num,"is zero");
// }

// age=20;
// age>=18 ? console.log("eligible") : console.log("not eligible");

// const veg="potato";  
// switch(veg){
//     case "potato":
//         console.log("potato is a veg");
//         break;
//     case "apple":
//         console.log("apple is a fruit");
//         break;
//     default:
//         console.log("unknown");
// }
// let name=prompt("enter your name");
// console.log("hello",name);

// let n=prompt("enter a number");
// if(n%5==0){
//     console.log("divisible by 5");
// }
// else{
//     console.log("not divisible by 5");
// }

// //for-of loop it can used for strings and arrays
// let Name="darshan";
// let size=0;
// for(let val of Name){
//     console.log("char :",val);
//     size++;
// }
// console.log("size :", size);
// // for-in loop it can used for objects
// const student = {
//     name:"darshan",
//     age:22,
//     cgpa:6.8,
//     isPass : true
// }; 
// for(let key in student){
//     console.log(key,"=",student[key]);
// }
// const student = {
//     name:"darshan",
//     age:22,
//     cgpa:6.8,
//     isPass : true
// };
// let option= `the student name is ${student.name}`
// console.log(option);
// console.log(`the student name is ${student.name.toUpperCase()}`);

// str1 = "Darshan";
// str2 = "  O";
// console.log(str1.concat(str2));
// console.log(str1.replaceAll("a","x"));
// console.log(str1.charAt(0));
// console.log(str1.charCodeAt(0));
// console.log(str1.indexOf("a"));
// console.log(str1.lastIndexOf("a"));
// console.log(str1.slice(2,5));
// console.log(str1.substring(2,5));
// console.log(str1.split(""));
// console.log(str1.trim());
// console.log(str1.trimStart());
// console.log(str1.trimEnd());
// let a="@";
// let userName = prompt("enter your name");
// let length = userName.length;
// console.log(a.concat(userName).concat(length));
citys = ["pune","mumbai","bangalore","hyderabad","chennai"];
for(let city of citys){

    console.log(city.toUpperCase());
}

marks=[25,26,27,28,29];
let avg=0;
for(let i of marks){    
avg+=i;
}
avg=avg/marks.length;
console.log(avg);
let idx=0;
for(let i of marks){
    console.log("marks",idx,"=",i);
    idx++;
}