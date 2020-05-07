/*jshint  esversion:6*/
"use strict";

class CheckingAccount extends Account{
    constructor(number,overdraftLimit ) {
        super(number)
        this._overdraftLimit = overdraftLimit;
    }

    getInterest() {
        return this._overdraftLimit;
    }

    setInterest(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount <= -this._overdraftLimit) {
        }
        if (this._balance - amount < -this._overdraftLimit) {
            throw new RangeError("Withdraw amount greater than the overdraft limit!");
        }
        this._balance -= amount;
    }

    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance +  ": overdraft limit " + this._overdraftLimit;
    }

    endOfMonth(){
        if(this._balance < 0){
            console.log( "Warning, low balance "+ this.toString());
        }else{
            console.log( this.toString());
        }
    }
}