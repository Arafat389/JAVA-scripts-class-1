document.write("hello")
// aiti console ar bitor open hobe
console.log("hello console");
// variable 
//1
var n1 = 10;  //function scope
console.log(n1);
document.write("<br>");
document.write(n1);
//same
//2
let n2 = 30;  // block scope
console.log(n2);
document.write("<br>");
document.write(n2);
//3
const PI = 3.1416
//add
let a = 20 ;
let b = 30;
let c = a+b;
console.log(c);
//sub
let a1 = 200 ;
let b1 = 30;
let c1 = a1-b1;
console.log(c1);
//div
let a2 = 500 ;
let b2 = 30;
let c2 = a2/b2;
console.log(c2);
//mul
let a3 = 20 ;
let b3 = 30;
let c3 = a3*b3;
console.log(c3);
// mod
let a4 = 190 ;
let b4 = 30;
let c4 = a4%b4;
console.log(c4);

let age = 30 ; 
console.log(age +=10);

let x = '20';
if(x==20){ // == str /int jai hok man neye nai
    console.log("the value of x is 20");
}else{
    console.log("the value of x is not 20");
}

let x1 = '20';
if(x1===20){ // == str /int jai hok man neye nai
    console.log("the value of x1 is 20");
}else{
    console.log("the value of x1 is not 20");
}


// Data type
// primitive data type

let name1 = "Arafat";
let num = 10;
let w = true ;
let nullTest = null;
let nanTest = NaN;
let notAssign ;

console.log(typeof name1);
console.log(typeof num);
console.log(typeof w);
console.log(typeof nullTest);
console.log(typeof nanTest);
console.log(typeof notAssign);

// Data type
//  non primitive data type


let student={
    name:"arafat",
    age: 20,
    city :"dhaka"
}
console.log(typeof student);
console.log(student);
console.log(student.name);

let array =["arafat","Nazmul","karim"];
console.log(typeof array);
console.log(array);

//if else statement

let age1 = 15 ;
if(age1>=18){
    console.log("adult")
}else{
    console.log("not adult")

}


// else if statement

let mark = 50;
if (mark>=80 && mark<=100){
    console.log("A+");
}
else if (mark>=70 && mark<80){
    console.log("A");
}
else if (mark>=60 && mark<70){
    console.log("A-");
}
else if (mark>=50 && mark<60){
    console.log("B");
}
else if (mark>=40 && mark<50){
    console.log("C");
}
else if (mark>=33 && mark<40){
    console.log("D");  
}else{
    console.log("F");
}


// switch case

let marks =75;
switch(true){
    case(marks>=80 && marks<=100):
        console.log("A+");
    break;
    case(marks>=70 && marks<80):
        console.log("A");
    break;
    case(marks>=60 && marks<70):
        console.log("A-");
    break;
    case(marks>=50 && marks<60):
        console.log("B");
    break;
    case(marks>=40 && marks<50):
        console.log("C");
    break;
    case(marks>=33 && marks<40):
        console.log("D");
    break;
    case(marks<33):
        console.log("F");
    break;
}


let dayNo = 2;

if(dayNo == 1){
    console.log("Saturday");
}else if(dayNo == 2){
    console.log("Sunday");
}else if(dayNo == 3){
    console.log("Monday");
}else{
    console.log("Unknown");
}

let daySw = 2;

switch (daySw){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        
    case 3:
        console.log("Monday");
       
    default:
        console.log("Invalid Day");

}


// for loop 

let i ;
for(i=0; i<=10; i++){
    console.log(i);
    
    document.write(i+"<button>submit</button><br>")
}

// while loop

let i2 =10;
while(i2<=20){
    console.log(i2);
    i2=i2+2;
}

// do while

let i3 =20;
do{
    console.log(i3);
    i3=i3+2;
}while(i3<=30)
