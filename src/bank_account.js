
const OVERDRAFT_LIMIT = -300;


function CURRENT_ACCOUNT() {
    this.balance = 0;
}

CURRENT_ACCOUNT.prototype.deposit = function(amount) {
    if(amount < 0) {
        throw new Error('Number must be greater than 0');
    }
    this.balance += amount;
};

CURRENT_ACCOUNT.prototype.withdraw = function(amount) {
    if(this.balance - amount < OVERDRAFT_LIMIT) {
        throw new Error('Sorry, you have insufficient funds.')
    } 
    if(amount < 0) {
        throw new Error('Number must be greater than 0');
    }
    this.balance -= amount;
};

CURRENT_ACCOUNT.prototype.checkBalance = function() {
    return this.balance;
};














module.exports = CURRENT_ACCOUNT;