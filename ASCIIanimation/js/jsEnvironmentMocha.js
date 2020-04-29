/*jshint esversion: 6 */
(function() {
    "use strict";
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
    // alert("[ "+p4arr+" ] all numbers is summed equal to "+sum);
    p4arr = [];
    return sum;
}
function multiplyArr() {
    if (p4arr.length === 0){
        alert("please fill numbers into array!");
        return;
    }
    const multiply = p4arr.reduce(function (accumulator,currentValue) {
        return accumulator*currentValue;
    },1);
    // alert("[ "+p4arr+" ] all numbers are multiplied equal to "+multiply);
    p4arr = [];
    return multiply;
}

//practice5
let p5n1 = document.getElementById("p5n1").value;
function reverse(){
    if(isEmpty(p5n1)){
        alert("please fill input n1 a String!");
        return;
    }
    const arr = p5n1.split("").reverse();
    let reverseStr = arr.reduce((o1,o2) => o1+o2);
    // alert("\""+p5n1+ "\" reverse to \"" + reverseStr+"\"");
    document.getElementById("p5n1").value = "";
    return reverseStr;
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

    // if(LongWords.length === 0){
    //     alert("[ "+p7arr+" ] all words, no words is longer than "+i);
    // }else{
    //     alert("[ "+p7arr+" ] all words, are longer than "+i+" is \""+LongWords+"\"");
    // }
    p7arr = [];
    i = null;
    return LongWords;
}
function isEmpty(e) {
    if(e===null || e === undefined || e ===""){
        return true;
    }
    return false;
}
describe("sumArr", function() {
    context("when 2 and 3 entered", function() {
        beforeEach(function() {
            p4arr =[2,3];
        });
        it("the sum is 5", function() {
            assert.equal(sumArr(), 5);
        });
    });
});
describe("multiplyArr", function() {
    context("when 2 and 3 entered", function() {
        beforeEach(function() {
            p4arr =[2,3];
        });
        it("the multiplication product is 6", function() {
            assert.equal(multiplyArr(), 6);
        });
    });
});
describe("reverse", function() {
    context("when \"MochaFunctions\" is entered", function() {
        beforeEach(function() {
            p5n1 = "MochaFunctions";
        });
        it("the reverse is \"snoitcnuFahcoM \"", function() {
            assert.equal(reverse(), "snoitcnuFahcoM");
        });
    });
});
describe("filterLongWords", function() {
    context("when Array[\"MochaFunctions\",\"mocha\",\"longxiang\"] and Integer i=6 is entered", function() {
        beforeEach(function() {
            p7arr = ["MochaFunctions","mocha","longxiang"];
            i = 6;
        });
        it("the filterLongWords is [\"MochaFunctions\",\"longxiang\"]", function() {
            let LongWordsArr = ["MochaFunctions","longxiang"];
            assert.deepEqual(filterLongWords(), LongWordsArr);
        });
    });
});

}());