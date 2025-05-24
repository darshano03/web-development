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
// citys = ["pune","mumbai","bangalore","hyderabad","chennai"];
// for(let city of citys){

//     console.log(city.toUpperCase());
// }

// marks=[25,26,27,28,29];
// let avg=0;
// for(let i of marks){    
// avg+=i;
// }
// avg=avg/marks.length;
// console.log(avg);
// let idx=0;
// for(let i of marks){
//     console.log("marks",idx,"=",i);
//     idx++;
// }

// let deletedVal = marks.pop();
// console.log(deletedVal);
// console.log(marks.toString());

// marks.push(30);
// marks.unshift(20); //add element at the start
// marks.shift(); //remove element from the start  
// console.log(marks.slice(1,3));
//     marks.splice(1,2,45,46);//remove 2 elements from index 1 and add 45 and 46 (.splice(start,deleteCount, item1, item2, ...))


    // function sum(a,b){
    //     return a+b+10;
    // }
    // console.log(sum(10,20));

    // let str=prompt("enter a word");
    // vowel(str.toLowerCase());

    // function vowel(str){
    //     let count=0;
    //     for(let i of str){
    //         if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
    //             count++;
    //         }
    //     }
    //     console.log("no of vowels in",str,"is",count);
    // }
// let student=["darshan",22,6.8,true];

// student.forEach(function print(s , idx, student)  {
//     console.log(s,idx,student);
// });   // forEach is used only for arrays


// let arr=[1,2,3,4,5];

// arr.forEach(squ);   //ex 1

// function squ(x){
//     console.log(x*x);
// };

// let arr=[1,2,3,4,5];
// arr.forEach((x) => {
//     console.log(x);
// });

// let arr=[1,2,3,4,5];
// let newarr=arr.map((x)=>{         //map is used for arrays it creates a new array
//     return x;
// }); 


// let arr0=[1,2,3,4,5];
// let newarr0=arr.map((x)=>{         //map is used for arrays it creates a new array
//     return x % 2 ==0;
// }); 
// console.log(newarr0);


// console.log(newarr);

// let arr2 = arr.filter((x)=>{
//     return x % 2==0;
// });
// console.log(arr2);

// let sum=arr.reduce((x,y)=>{   // here the reduce function is used to find the single element in the array 
//     return x>y?x:y;    
// });
// console.log(sum);

// student=[90,34,32,65,97,68,96,45];
// let topper = student.filter((x)=>{
//     return x>90;
// });
// console.log(topper);

// let n=prompt("entre a number");
// let arr=[];
// for(let i=0;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);           //ex2

// let sum=arr.reduce((x , y) =>{
//     return x+y;
// });
// console.log(sum);




// dom(document object model) it is used for dynamic changes
// console.dir(window);
// console.log(document);
// console.log(document.body);
// console.log(document.body.childNodes[1]);
// document.body.childNodes[1].innerText="abcd";   //



let heading = document.getElementById("heading");
console.dir(heading);