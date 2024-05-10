// eventListener
/*
console.log("Hello world!");
const fuck = "fuck you nigga!";
console.log(fuck);
for (i=0; i <= 25; i++ ) {
    console.log("hello");
    console.log("");
    console.log(fuck);
}
*/
/*
const myBox = document.getElementById("mybox");

const doSomething = (event) => {
    console.log(event);
}

myBox.addEventListener("click", doSomething);
*/
/* 
const myBox = document.getElementById("mybox");

myBox.addEventListener("click", (event) => {
    console.log(event);

}) */
const myBox = document.getElementById("mybox");

myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "ouch!😵‍💫"
})





