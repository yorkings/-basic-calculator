let no1 = document.getElementById("num-el");
let nu2 = document.getElementById("num-al");
let ans = document.getElementById("answer");

function num1() {
    let numf = prompt("Enter first number");
    no1.textContent = numf;
}

function num2() {
    let nums = prompt("Enter second number");
    nu2.textContent =   nums;
}

function Add() {
    let nom1 = Number(no1.textContent);
    let nub2 = Number(nu2.textContent);
    let result = nom1 + nub2;
    ans.textContent = `${nom1} + ${nub2} = ${result}`;
}

function Subtract() {
    let nom1 = Number(no1.textContent);
    let nub2 = Number(nu2.textContent);
    let result = nom1 - nub2;
    ans.textContent = `${nom1} - ${nub2} = ${result}`;
}
function multiply() {
    let nom1 = Number(no1.textContent);
    let nub2 = Number(nu2.textContent);
    let result = nom1 * nub2;
    ans.textContent = `${nom1} * ${nub2} = ${result}`;
}

function divide(){
    let nom1 = Number(no1.textContent);
    let nub2 = Number(nu2.textContent);
    let result = nom1 / nub2;
    ans.textContent = `${nom1} - ${nub2} = ${result}`;
    
}
