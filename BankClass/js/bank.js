/*jshint  esversion:6*/
"use strict";
window.onload = function () {
    let bank = new Bank();
    let acc1 = bank.addAccount();
    let acc2 = bank.addSavingsAccount(10);
    console.log("nextNumber is: "+ Bank.nextNumber);
    let acc3 = bank.addSavingsAccount(20);
    let acc4 = bank.addCheckingAccount(1000);
    bank.getAccount(acc1).deposit(100);
    bank.getAccount(acc2).deposit(200);
    bank.getAccount(acc3).deposit(300);
    bank.getAccount(acc4).deposit(400);
    bank.getAccount(acc4).withdraw(800);



    bank.accountReport();
    bank.closeAccount(acc3);
    bank.accountReport();


    bank.endOfMonth();
};
class Bank{
    constructor() {
        this._account = [];
        this._number = null;
    }

    getAccount(number){
        return this._account[number];
    }

    static nextNumber = 0;

    setNumber(){
        if(this._number === null){
            this._number = 0;
        }else{
            this._number += 1;
        }
        Bank.nextNumber = this._number+1;
    }

    addAccount(){
        this.setNumber();
        this._account.push(new Account(this._number));
        return this._number;
    }

    addSavingsAccount(interest){
        this.setNumber();
        this._account.push(new SavingsAccount(this._number,interest));
        return this._number;
    }

    addCheckingAccount(overdraft) {
        this.setNumber();
        this._account.push(new CheckingAccount(this._number,overdraft));
        return this._number;
    }

    closeAccount(number){
        this._account.splice(number,1);
    }

    accountReport(){
        for(let v of this._account){
            console.log(v.toString());
        }
    }

    endOfMonth(){
        for(let v of this._account){
            v.endOfMonth();
        }
    }

}