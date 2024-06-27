const del = document.querySelector("#delete");
const clear = document.querySelector("#clearDisplay");
const result = document.querySelector("#result");
let computedResult = document.querySelector("#computedResult")
let history = document.querySelector("#history");

del.addEventListener("click",() => {
    let arr = history.textContent.split("").filter((item) => item != " ").filter((item) => item != "\n");
    arr.pop();
    history.textContent = arr.join("");
})

clear.addEventListener("click", () => {
    computedResult.textContent = "";
    history.textContent = ""; 
});