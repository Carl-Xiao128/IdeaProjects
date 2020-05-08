/*jshint  esversion:6, globalstrict:true */
'use strict';
$(function () {

    function isEmpty(...args) {
        for (const v of args) {
            if (v === null || v === undefined || v === "") {
                return true;
            }
        }
        return false;
    }

    function getArbitryNumberFrom0ToMax(min,max) {
        return Math.floor((Math.random() * (max-min+1)+min));
    }

    function randomColor() {
        let r = function () {
            return Math.floor(Math.random() * 256);
        };
        return "rgb(" + r() + "," + r() + "," + r() + ")";
    }

    function grow(growAmount){
        $(".circle").css("width", function(idx, old) {
            console.log(old);
            return parseInt(old) + growAmount + "px";
        });
        $(".circle").css("height", function(idx, old) {
            return parseInt(old) + growAmount + "px";
        });
    }

    $("#apply").on("click", function () {
        $(".container").empty();
        let windowwidth = $(window).width();
        let width = $("#width").val();
        let growAmount = $("#growAmount").val();
        let rate = $("#rate").val();
        let numbers = $("#numbers").val();
        if (isEmpty(width, growAmount, rate, numbers)) {
            alert("Please enter values on all of the inputs!");
            return;
        }
        if(width > windowwidth){
            alert("Width is more than window width! Please enter a reasonable width!");
            return;
        }
        let per = Math.floor(width/windowwidth*50);
        console.log(per);

        for (let i = 0; i < numbers; i++) {
            $(".container").append($("<div>", {
                "class": "circle",
                "css": {
                    "width": width + "px",
                    "height": width + "px",
                    "position": "absolute",
                    "left": getArbitryNumberFrom0ToMax(per,100-per) + "%",
                    "background-color": randomColor()
                },
                "click": function () {
                    $(this).remove();
                }
            }));
        }

        setInterval(grow,rate,parseInt(growAmount));

    });
    for (let i = 1; i < 15; i++){
        $("#numbers").append($("<option>"+i+"</option>",{
            "value":i
        }));
    }
    $("body").on("mouseover",".circle",function () {
        $(this).addClass("divshadow").stop().animate({'top':'45%'});
        $(this).siblings().css("opacity","0.5");
    });
    $("body").on("mouseleave",".circle",function () {
        $(this).removeClass("divshadow").stop().animate({'top':'50%'});
        $(".circle").css("opacity","1");
    });

});