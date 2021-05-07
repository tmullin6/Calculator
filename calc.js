
//Initialize Global Variables
let num1;
let num2;
let op;
let solution;
let numArray=[];
let displayValue;


//Initialize Query Selectors
const display = document.querySelector("#solution");
const plus = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const product = document.querySelector("#multiply");
const quotient = document.querySelector("#divide");
const nums = document.querySelectorAll("#num");
const decimal = document.querySelector("#decimal");
const solve = document.querySelector("#solve");
const clear = document.querySelector("#clear");
const remove = document.querySelector("#delete");



//Functionality for the delete button. Removes the last entered item from the display

remove.addEventListener("click", () => {

    if (numArray.length >0) {

        numArray.splice(-1,1);
        display.textContent=numArray.join("");
    }

    else{

        display.textContent="0";
    }
});


//Functionality for the clear button

clear.addEventListener("click", ()=> {

    num1=0;
    num2=0;
    solution=0;
    op="";
    numArray=[];
    display.textContent="0";

});


//Add event listeners to populate number array from user input

for (let i =0; i < nums.length; i++) {

    nums[i].addEventListener('click',function(e) {
       
        if(numArray.length<12) {

        numArray.push(e.target.textContent);

        }

        display.textContent=numArray.join("");

    });

   
}


//Add a decimal place to the number array as long as a decimal has not already been added

decimal.addEventListener("click",function(e) {

    if(numArray.length<12) {

        if (numArray.indexOf(".")==-1) {

            numArray.push(".");
        
        }
    }

    display.textContent=numArray.join("");

});



/*Add event listeners to capture the operation the user desires and sets current number array to the first
number value */

plus.addEventListener("click", ()=>{

    op = "+";

    if (!solution) {

        num1=Number.parseFloat(numArray.join(""));

    }

    else {

        num1=solution;

    }

    num2=0;
    numArray=[];

});

minus.addEventListener("click", ()=>{

    op = "-";

    if (!solution) {

    num1=Number.parseFloat(numArray.join(""));

    }

    else {

        num1=solution;

    }

    num2=0;
    numArray=[];
 
})

product.addEventListener("click", ()=>{
    op = "*";
    if (!solution) {
        num1=Number.parseFloat(numArray.join(""));
        }
        else {
            num1=solution;
        }
    num2=0;
    numArray=[];
  
})

quotient.addEventListener("click", ()=>{
    op = "/";
    if (!solution) {
        num1=Number.parseFloat(numArray.join(""));
        }
        else {
            num1=solution;
        }
    num2=0;
    numArray=[];
  
})


/* Calls the operate function and sets the second number to the new number array.
   returns the value to the screen and sets the first number for the operate function 
   so user can continue to do math operations */

solve.addEventListener("click", () => {

    num2=Number.parseFloat(numArray.join(""));

    if (!num1 || !num2) {
        return;
    }
    solution = operate(num1,num2,op)
    
    if (solution.toString().length > 12) {
        display.textContent="ERROR";
        return;
    }

    display.textContent=solution;
});


//Functions that operate on numbers and rounds decimal places up to 2 places

function add(num1, num2) {

    num = num1+num2;

    if (num%1!=0 && num.toString().length >12) {
        return num.toFixed(2);
    }
    else {
        return num;
    }
    
}


function subtract(num1,num2) {

    num = num1-num2;

    if (num%1!=0 && num.toString().length >12) {
        return num.toFixed(2);
    }
    else {
        return num;
    }
    
    
}

function multiply(num1,num2) {

    num = num1*num2;

    if (num%1!=0 && num.toString().length >12) {
        return num.toFixed(2);
    }
    else {
        return num;
    }
    
}

function divide(num1,num2) {

    num = num1/num2;

    if (num%1!=0 && num.toString().length >12) {
        return num.toFixed(2);
    }
    else {
        return num;
    }
    
}


//Operate function that takes the desired operation from the user and calls the appropriate function

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
