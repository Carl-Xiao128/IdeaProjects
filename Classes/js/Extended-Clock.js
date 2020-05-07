/*jshint  esversion:6, globalstrict:true */
'use strict';
class ExtendedClock extends ClockClass{
    constructor({template},precision = 1000) {
        super({template});
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}
window.onload = function () {

    //////////////////////////////////////////////////////////////////////
    //Extended clock
    let extendclopck = new ExtendedClock({template: 'h:m:s'},2000);
    function ClassClockst() {
        extendclopck.start();
    }
    function ClassClocksp() {
        extendclopck.stop();
    }
    document.getElementById("stec").onclick = ClassClockst;
    document.getElementById("spec").onclick = ClassClocksp;
};