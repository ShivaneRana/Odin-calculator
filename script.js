const del = document.querySelector("#delete");
const clear = document.querySelector("#clearDisplay");
const result = document.querySelector("#result");
let computedResult = document.querySelector("#computedResult")
let history = document.querySelector("#history");
let value1 = "";
let valueOperator = "";
let value2 = "";

//this is for remove last digit of the calculation
del.addEventListener("click",() => {
    let arr = history.textContent.split("").filter((item) => item != " ").filter((item) => item != "\n");
    arr.pop();
    history.textContent = arr.join("");
    if(value1 !== "" && value2 === "" && valueOperator === ""){
        value1 = arr.join("");
        console.log(value1)
    }else if(value2 !== "" && value1 !== "" && valueOperator !== ""){
        value2 = arr.join("");
        console.log(value2)
    }else{
        value1 !== "" && value2 === "" && valueOperator !== ""
            valueOperator = arr.join("");
            console.log(valueOperator)
}})

//clears all that is on the screen
clear.addEventListener("click", () => {
    computedResult.textContent = "";
    history.textContent = "";
    value1 = "";
    valueOperator = "";
    value2 = "";
    console.log("-".repeat(50));
    console.log("value1 has been cleared");
    console.log("valueOperator has been cleared");
    console.log("value2 has been cleared");
    console.log("history has been cleared")
    console.log("computedResult has been cleared");
    console.log("-".repeat(50));
});


//this will detect input of the numerical key button
const button = document.querySelectorAll(".defaultStyle");
const arrayButton = Array.from(button)

arrayButton.forEach(item => {
    item.addEventListener("click",function(event){
        const target = event.target.dataset.number;
        //this is used to check if value1 is added before valueOperator or not
        if(valueOperator !== "" && value1 === ""){
            value1 = +value1;
            value2 += target;
            history.textContent = value2;
            console.log(`current value of Value2: ${value2}`);
            //this is used to check if valueOperator is added after value1 or not
        }else if(valueOperator !== ""){
            value2 += target;
            history.textContent = value2;
            console.log(`current value of Value2: ${value2}`);
        }
        //this assign value directly to value1
        else{
        value1 += target;
        history.textContent += target;
        console.log(`current value of value1: ${value1}`);
        }
    })
})


//this will group all operator button in a nodelist
const buttonOperation = document.querySelectorAll(".specialStyle");
const arrayOperation = Array.from(buttonOperation);
arrayOperation.forEach((item,index) => {
    if(item.dataset.operation === undefined){
        arrayOperation.splice(index,1);
    }
})
arrayOperation.shift()

//this will detect the input of all the non numerical key in the button
arrayOperation.forEach(item => {
    item.addEventListener("click",function(event){
        const target = event.target.dataset.operation;
        valueOperator = target;
        history.textContent = "";
        history.textContent = target;
        console.log(`current value of valueOperator: ${valueOperator}`);
    });
})

//this object contains function for all the arthematic operation
const obj = {
    add(num1,num2){
        let anwser = +num1+ +num2;
        computedResult.textContent = anwser;
        history.textContent = `${num1} + ${num2}`;
        console.log(`Calculation result:${anwser}`);
    },
    sub(num1,num2){
        let anwser = +num1 - +num2;
        computedResult.textContent = anwser;
        history.textContent = `${num1} - ${num2}`;
        console.log(`Calculation result:${anwser}`);
    },
    multi(num1,num2){
        let anwser = +num1 * +num2;
        computedResult.textContent = anwser;
        history.textContent = `${num1} x ${num2}`;
        console.log(`Calculation result:${anwser}`);
    },
    divide(num1,num2){
        if(num2 == 0){
            history.textContent = `${num1} / ${num2}`;
            return computedResult.textContent = "U sure mate?";
        }else{
        let anwser = (+num1 / +num2).toFixed(5);
        computedResult.textContent = anwser;
        history.textContent = `${num1} / ${num2}`;
        console.log(`Calculation result:${anwser}`);
        }
    }
}

//result button logic
result.addEventListener("click",() => {
    if(valueOperator === "+"){
        obj.add(value1,value2)
    }else if(valueOperator === "-"){
        obj.sub(value1,value2);
    }else if(valueOperator === "x"){
        obj.multi(value1,value2);
    }else if(valueOperator === "/"){
        obj.divide(value1,value2);
    }
})