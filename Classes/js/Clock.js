/*jshint  esversion:6, globalstrict:true */
'use strict';
class ClockClass{
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }

        let mins = date.getMinutes();
        if (mins < 10) {
            mins = '0' + mins;
        }

        let secs = date.getSeconds();
        if (secs < 10) {
            secs = '0' + secs;
        }

        let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
        console.log(output);
    }
    stop () {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
window.onload = function () {
    //////////////////////////////////////////////////////////////////////
    //Rewrite to class
    let clockclass = new ClockClass({template: 'h:m:s'});
    function ClassClockst() {
        clockclass.start();
    }
    function ClassClocksp() {
        clockclass.stop();
    }
    document.getElementById("stcc").onclick = ClassClockst;
    document.getElementById("spcc").onclick = ClassClocksp;

    function Clock({ template }) {
        let timer;
        function render() {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) {
                hours = '0' + hours;
            }

            let mins = date.getMinutes();
            if (mins < 10) {
                mins = '0' + mins;
            }

            let secs = date.getSeconds();
            if (secs < 10) {
                secs = '0' + secs;
            }

            let output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function() {
            clearInterval(timer);
        };

        this.start = function() {
            render();
            timer = setInterval(render, 1000);
        };

    }

    let clock = new Clock({template: 'h:m:s'});
    document.getElementById("stcf").onclick = clock.start;
    document.getElementById("spcf").onclick = clock.stop;


    //////////////////////////////////////////////////////////////////////
    //Error creating an instance
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Rabbit extends Animal {
        constructor(name) {
            super(name);
            this.created = Date.now();
        }
    }
    let rabbit = new Rabbit("White Rabbit");
    alert(rabbit.name);
    alert(rabbit.created);

    //////////////////////////////////////////////////////////////////////
    //Extended clock

};