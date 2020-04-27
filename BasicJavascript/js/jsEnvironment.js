//practice4
let p4arr = [];
function inputToArr() {
    let n1 = document.getElementById("p4n1").value;
    if(isEmpty(n1)){
        alert("please fill input n1 a number");
        return;
    }
    p4arr.push(Number(n1));
    document.getElementById("p4n1").value = "";
}
function sumArr() {
    if (p4arr.length === 0){
        alert("please fill numbers into array!");
        return;
    }
    const sum = p4arr.reduce(function (accumulator,currentValue) {
        return accumulator+currentValue;
    },0);
    alert("[ "+p4arr+" ] all numbers is summed equal to "+sum);
    p4arr = [];
}
function multiplyArr() {
    if (p4arr.length === 0){
        alert("please fill numbers into array!");
        return;
    }
    const multiply = p4arr.reduce(function (accumulator,currentValue) {
        return accumulator*currentValue;
    },1);
    alert("[ "+p4arr+" ] all numbers are multiplied equal to "+multiply);
    p4arr = [];
}

//practice5
function reverse(){
    let n1 = document.getElementById("p5n1").value;
    if(isEmpty(n1)){
        alert("please fill input n1 a String!");
        return;
    }
    const arr = n1.split("").reverse();
    let reverseStr = arr.reduce((o1,o2) => o1+o2);
    alert("\""+n1+ "\" reverse to \"" + reverseStr+"\"");
    document.getElementById("p5n1").value = "";
}

//practice7
let p7arr = [];
let i = null;
function inputStr1ToArr() {
    let n1 = document.getElementById("p7n1").value;
    if(isEmpty(n1)){
        alert("please fill input n1 a String");
        return;
    }
    p7arr.push(n1);
    document.getElementById("p7n1").value = "";
}
function inputInteger() {
    let n2 = document.getElementById("p7n2").value;
    if(isEmpty(n2)){
        alert("please fill input n2 a Integer");
        return;
    }
    i = Number(n2);
    document.getElementById("p7n2").value = "";
}
function filterLongWords() {
    if (p7arr.length === 0){
        alert("please fill Strings into array!");
        return;
    }
    if(isEmpty(i)){
        alert("please fill input Integer i");
        return;
    }
    const LongWords = p7arr.filter(function (s) {
        return s.length > i;
    })

    if(LongWords.length === 0){
        alert("[ "+p7arr+" ] all words, no words is longer than "+i);
    }else{
        alert("[ "+p7arr+" ] all words, are longer than "+i+" is \""+LongWords+"\"");
    }
    p7arr = [];
    i = null;
}
function isEmpty(e) {
    if(e===null || e === undefined || e ===""){
        return true;
    }
    return false;
}
