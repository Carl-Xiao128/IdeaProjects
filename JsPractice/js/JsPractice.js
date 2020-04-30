/*jshint esversion: 6 */
(function() {
    "use strict";
    //practice1  Reverse an Array
    function reverseArray(array){
        let newArray = [];
        if(array.length === 0){
            return newArray;
        }
        for(let i= array.length-1;i>=0;i--){
            newArray.push(array[i]);
        }
        return newArray;
    }

    let reverseArrayInPlace = function(array) {
        for(let left =0, right = array.length-1; left < right; left++, right--){
            let leftcopy = array[left];
            array[left] = array[right];
            array[right] = leftcopy;
        }
    };

    describe("reverseArray", function() {
        let array = [10,20,30];
        context("When array = [10,20,30]", function() {
            it("Execute reverseArray(array) return [30,20,10]", function() {
                let afterReverse = [30,20,10];
                assert.deepEqual(reverseArray(array), afterReverse);
            });
        });
    });

    describe("reverseArrayInPlace", function() {
        let array = [10,20,30];
        context("When array = [10,20,30]", function() {
            it("Execute reverseArrayInPlace(array) and array = [30,20,10]", function() {
                let afterReverse = [30,20,10];
                reverseArrayInPlace(array);
                assert.deepEqual(array, afterReverse);
            });
        });
    });

    //practice2  A List
    let prepend = function(val,prepend){
        let pre = {value:val,rest:prepend};
        return pre;
    };

    let arrayToList = function (array,pre) {
        if(pre === undefined){
            pre = null;
        }
        if(array.length === 0){
            return pre;
        }
        pre = prepend(array[array.length-1],pre);
        array.splice(array.length-1,1);
        return arrayToList(array,pre);
    };

    let listToArray = function (list,arr) {
        if (arr === undefined){
            arr = [];
        }
        if(list === null){
            return arr;
        }
        arr.push(list.value);
        return listToArray(list.rest,arr);

    };

    let nth = function(list,i){
        let arr = listToArray(list);
        if(i > arr.length || i < 0){
            return undefined;
        }
        return arr[i];
    };

    describe("arrayToList", function() {
        let array = [10,20,30];
        context("When array = [10,20,30]", function() {
            it("Execute arrayToList(array) return { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }", function() {
                let toList = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } };
                assert.deepEqual(arrayToList(array), toList);
            });
        });
    });

    describe("listToArray", function() {
        let list = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } };
        context("When list = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }", function() {
            it("Execute listToArray(list) return [10,20,30]", function() {
                let array = [10,20,30];
                assert.deepEqual(listToArray(list), array);
            });
        });
    });

    describe("prepend", function() {
        context("When value = 10", function() {
            it("Execute prepend(value,prepend(20,null)) return { value: 10, rest: { value: 20, rest: null } }", function() {
                let pre = { value: 10, rest: { value: 20, rest: null } };
                assert.deepEqual(prepend(10,prepend(20,null)), pre);
            });
        });
    });

    describe("nth", function() {
        context("When list = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }, i = 2", function() {
            it("Execute nth(list,i} return 30", function() {
                let list = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } };
                let i = 2;
                assert.equal(nth(list,i), 30);
            });
        });
        context("When list = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }, i = 3", function() {
            it("Execute nth(list,i} return undefined", function() {
                let list = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } };
                let i = 3;
                assert.equal(nth(list,i), undefined);
            });
        });
    });

    //practice3 Deep comparison
    let deepeuqal = function (o1,o2) {
        if(o1 !== o2){
            return false;
        }
        let ar1 = Object.keys(o1);
        let ar2 = Object.keys(o2);

        if(isEqual(ar1,ar2)){

            return deepeuqal();
        }
        return false;
    };

    function isEqual(arr1, arr2) {
        return JSON.stringify(arr1.sort()) === JSON.stringify((arr2.sort()));
    }

    let o1 = {here: {is: "an"}, object: 2};
    let o2 = {object: 2,here: {is: "1"}};
    let o3 = 3;
    console.log(Object.keys(o3));

}());