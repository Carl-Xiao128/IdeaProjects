/*jshint  esversion:6, globalstrict:true */
'use strict';
$(function () {
    $("#apply").click(function () {
        let width = $("#width").val();
        let growAmount = $("#growAmount").val();
        let rate = $("#rate").val();
        let numbers = $("#numbers").val();
        console.log(numbers);

        let innertext = "";
        for (let i=0;i<numbers;i++){
            innertext+= "<div class='circle'></div>";
        }
        $(".container").append(innertext);
    });

    $("body").on("mouseover",".circle",function () {
        console.log(this);
    });
});