// let a = 4;
// function myfun() {
    
//     return a*2;
// }
// console.log(myfun())

// function add(num1, num2){
//     console.log(num1 + num2);
// }
// let a = 10;
// let b = 20;

// add(a, b);

function sayHello(){
    console.log("Hello");
}

function sayHi(){
    console.log("Hi..");
}

function add(num1, num2, callback){
    // sayHello();
    console.log(num1 + num2);
    callback();
}
let a = 10;
let b = 20;

add(a, b, sayHello);

add(30, 5, sayHi);

add(30, 10, function (){
    console.log("bye...");
});