/*jshint  esversion:6, globalstrict:true */
'use strict';
$(function () {
    let startFlag = false;

    $("#start").click(function () {
        startFlag = true;
        $("div.boundary:not('.example')").removeClass("youlose");
        $("#status").text("Game is started! You can't touch any walls and outside of the Maze or you will fail!");

    });

    $(".boundary").mouseover(function () {
        if(startFlag){
            $("div.boundary:not('.example')").addClass("youlose");
            $("#status").text("Unfortunately you failed!");
            startFlag = false;
        }
    });


    $("#end").mouseover(function () {
        if(startFlag){
            $("#status").text("Amazing you win!");
            startFlag = false;
        }
    });

    $("#maze").mouseleave(function () {
        if(startFlag){
            $("div.boundary:not('.example')").addClass("youlose");
            $("#status").text("Unfortunately you failed!");
            startFlag = false;
        }
    });

});