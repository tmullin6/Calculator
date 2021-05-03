//Add, multiply, divide, and subtract


let num1;
let num2;
let op;
let temp;
let numArray=[];

const plus = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const product = document.querySelector("#multiply");
const quotient = document.querySelector("#divide");
const nums = document.querySelectorAll("#num");
const solve = document.querySelector("#solve");

for (let i =0; i < nums.length; i++) {

    nums[i].addEventListener('click',function(e) {

    
        numArray.push(e.target.textContent);
        console.log(numArray);
    });

  

}



plus.addEventListener("click", ()=>{
    op = "+";
    console.log(op);
});

minus.addEventListener("click", ()=>{
    op = "-";
    console.log(op);
})

product.addEventListener("click", ()=>{
    op = "*";
    console.log(op);
})

quotient.addEventListener("click", ()=>{
    op = "/";
    console.log(op);
})

solve.addEventListener("click", () => {
    
    temp = operate(num1,num2,op);
    num1=temp;
    console.log(temp);
    console.log(num1)
});

function add(num1, num2) {
    return num1+num2;
}


function subtract(num1,num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return (num1/num2);
}

function operate(num1,num2,operation) {

    switch(operation) {

        case "+": 
            return add(num1,num2);
        
        case "-":
            return subtract(num1,num2);
        
        case "*":
            return multiply(num1,num2);
        
        case "/":
            return divide(num1,num2);

        

    }
}
