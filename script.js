const del = document.querySelector("#delete");
const clear = document.querySelector("#clearDisplay");
const result = document.querySelector("#result");
let computedResult = document.querySelector("#computedResult")
let history = document.querySelector("#history");
// const num1  = document.querySelector("#num1");
// const num2  = document.querySelector("#num2");
// const num3  = document.querySelector("#num3");
// const num4  = document.querySelector("#num4");
// const num5  = document.querySelector("#num5");
// const num6  = document.querySelector("#num6");
// const num7  = document.querySelector("#num7");
// const num8  = document.querySelector("#num8");
// const num9  = document.querySelector("#num9");
let computednum1 = 0;
let computedoperator = "";
let computednum2 = 0;

//this is for remove last digit of the calculation
del.addEventListener("click",() => {
    let arr = history.textContent.split("").filter((item) => item != " ").filter((item) => item != "\n");
    arr.pop();
    console.log(arr)
    history.textContent = arr.join("");
})

//clears all that is on the screen
clear.addEventListener("click", () => {
    computedResult.textContent = "";
    history.textContent = ""; 
});


//list of all operation of the calculator
const operationList = {
    add(a,b){
        console.log(num1+num2);
    },
    sub(a,b){
        console.log(a-b);
    },
    multi(a,b){
        console.log(a*b);	
    },
    div(a,b){
        console.log(a%b);
    },
    operate(num1,ope,num2){
        if(ope === "+"){
            add(num1,num2);
        }else if(ope === "-"){
            sub(num1,num2);
        }else if(ope === "*"){
            multi(num1,num2);
        }else if(ope === "/"){
            div(num1,num2);
        }
    }
}

//this will detect input of the numerical key button
const button = document.querySelectorAll(".defaultStyle");
console.log(button);
button.forEach(item => {
    item.addEventListener("click",function(event){
        console.log(event.target.dataset.number);
    })
})

//this will detect the input of all the non numerical key in the button
const buttonOperation = document.querySelectorAll(".specialStyle");
console.log(buttonOperation);
buttonOperation.forEach(item => {
    item.addEventListener("click",function(event){
        console.log(event.target.dataset.operation);
    });
})

