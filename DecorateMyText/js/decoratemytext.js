/*jshint esversion: 6 */
window.onload = function(){
    'use strict';
    const imgurl = "http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg";
    const btnc = document.getElementById("btn");
    const textareasim = document.getElementById("textareasim");
    const checkbox = document.getElementById("checkbox");
    const btnig = document.getElementById("btnig");
    const malkovitch = document.getElementById("malkovitch");
    // btnc.onclick = increseTimer;
    btnc.onclick = btnClick;
    btnig.onclick = btnigClick;
    malkovitch.onclick = malkovitchClick;
    checkbox.onchange = checkChange;


    // function btnClick(){
    //     alert("Hello world!");
    // }

    function increseTimer() {
        setInterval(btnClick,500);
    }

    function btnClick(){
        let style = window.getComputedStyle(textareasim, null);
        let size = parseInt(style.fontSize);
        size += 2;
        textareasim.style.fontSize = size+"px";

        document.body.style.backgroundImage="url("+imgurl+")";
    }
    // function btnClick(){
    //     textareasim.className = "bigTextarea";
    // }
    function checkChange(){
        if(checkbox.checked === true){
            textareasim.className = "boldTextarea";
        }else{
            textareasim.className = "";
        }
    }

    function btnigClick(){
        let arrvowel = ["a","e","i","o","u","A","E","I","O","U"];
        let content = textareasim.textContent;
        if(content === ""){
            alert("There is no content in the textarea!");
        }
        let contentArr = content.split(" ");
        let firstEle = contentArr[0];
        let contentFirstLetter = firstEle.charAt(0);
        if(arrvowel.includes(contentFirstLetter)){
            textareasim.innerText = content+"-ay";
        }else{
            contentArr.splice(0,1);
            textareasim.innerText = contentArr.join(" ")+firstEle+"-ay";
        }

    }
    function malkovitchClick() {
        let content = textareasim.textContent;
        if(content === ""){
            alert("There is no content in the textarea!");
        }
        let contentArr = content.split(" ");
        let afterMalkovitchArr = contentArr.map(function (s) {
            if(s.length > 5){
                s = "Malkovitch";
            }
            return s;
        });
        textareasim.innerText = afterMalkovitchArr.join(" ");
    }

};