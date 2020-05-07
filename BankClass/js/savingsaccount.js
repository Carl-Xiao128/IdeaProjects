/*jshint  esversion:6*/
"use strict";

class SavingsAccount extends Account{
    constructor(number,interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest(){
        this._balance = this._balance*(1+this._interest/100);
    }

    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance + ": Interest "+this._interest;
    }

    endOfMonth(){
        this.addInterest();
        console.log("Interest added "+ this.toString());
    }
}