//practice1
function max(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if(isEmpty(n1) || isEmpty(n2)){
        alert("please fill input n1 and input n2 numbers!");
        return;
    }
    if (n1 > n2){
        alert("Max number is :"+n1);
    }else{
        alert("Max number is :"+n2);
    }
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
};

//practice2
function maxOfThree(){
    let n1 = document.getElementById("p2n1").value;
    let n2 = document.getElementById("p2n2").value;
    let n3 = document.getElementById("p2n3").value;
    let max = n1;
    if(isEmpty(n1) || isEmpty(n2) || isEmpty(n3) ){
        alert("please fill input n1, input n2 and input n3 numbers!");
        return;
    }
    if (n2 > max){
        max = n2;
    }
    if (n3 > max){
        max = n3;
    }
    alert("Max number is :"+max);
    document.getElementById("p2n1").value = "";
    document.getElementById("p2n2").value = "";
    document.getElementById("p2n3").value = "";
};

//practice3
function isVowel(){
    let n1 = document.getElementById("p3n1").value;
    if(isEmpty(n1)){
        alert("please fill input n1 a character!");
        return;
    }
    let arrvowel = ["a","e","i","o","u","A","E","I","O","U"];
    for(const v of arrvowel){
        if(n1 === v){
            alert("\""+n1+ "\" is a vowel!");
            return;
        }
    }
    alert(n1+ " is not a vowel!");
    document.getElementById("p3n1").value = "";
};

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
    let sum = 0;
    for (const v of p4arr){
        sum  = sum+v;
    }
    alert("[ "+p4arr+" ] all numbers is summed equal to "+sum);
    p4arr = [];
}
function multiplyArr() {
    if (p4arr.length === 0){
        alert("please fill numbers into array!");
        return;
    }
    let multiply = 1;
    for (const v of p4arr){
        multiply  = multiply*v;
    }
    alert("[ "+p4arr+" ] all numbers are multiplied equal to "+multiply);
    p4arr = [];
}

//practice5
function reverse(){
    let reverseStr = "";
    let n1 = document.getElementById("p5n1").value;
    if(isEmpty(n1)){
        alert("please fill input n1 a String!");
        return;
    }
    for(let i= n1.length-1;i>=0;i--){
        reverseStr+=n1.charAt(i);
    }
    alert("\""+n1+ "\" reverse to \"" + reverseStr+"\"");
    document.getElementById("p5n1").value = "";
};

//practice6
let p6arr = [];
function inputStrToArr() {
    let n1 = document.getElementById("p6n1").value;
    if(isEmpty(n1)){
        alert("please fill input n1 a String");
        return;
    }
    p6arr.push(n1);
    document.getElementById("p6n1").value = "";
}
function findLongestWord() {
    if (p6arr.length === 0){
        alert("please fill Strings into array!");
        return;
    }
    let longestWordLength = p6arr[0].length;
    let longestWord = p6arr[0];
    for (const v of p6arr){
        if (v.length > longestWordLength){
            longestWord = v;
            longestWordLength = v.length;
        }
    }
    alert("[ "+p6arr+" ] all String the longestWord is \""+longestWord+"\" and length is "+longestWordLength);
    p6arr = [];
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
    let LongWords=[];
    if (p7arr.length === 0){
        alert("please fill Strings into array!");
        return;
    }
    if(isEmpty(i)){
        alert("please fill input Integer i");
        return;
    }
    for (const v of p7arr){
        if (v.length > i){
            LongWords.push(v);
        }
    }
    if(LongWords.length === 0){
        alert("[ "+p7arr+" ] all words, no words is longer than "+i);
    }else{
        alert("[ "+p7arr+" ] all words, are longer than "+i+" is \""+LongWords+"\"");
    }
    p7arr = [];
    i = null;
}

//practice8
//a
const a = [1,3,5,3,3];
const b = a.map(function(elem) {
    return elem*10;
})
console.log("-------------------------practice8(a)-------------------------");
console.log(b);
console.log("-------------------------practice8(a)-------------------------");

//b
const c = a.filter(function(elem){
    return elem === 3;
});
console.log("-------------------------practice8(b)-------------------------");
console.log(c);
console.log("-------------------------practice8(b)-------------------------");

//c
const d = a.reduce(function(pre,cur){
    return pre*cur;
},1);
console.log("-------------------------practice8(c)-------------------------");
console.log(d);
console.log("-------------------------practice8(c)-------------------------");


function isEmpty(e) {
    if(e===null || e === undefined || e ===""){
        return true;
    }
    return false;
}