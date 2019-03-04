
function CURRENT_ACCOUNT() {
    this.balance = 0;
}

CURRENT_ACCOUNT.prototype.deposit = function(amount) {
    this.balance += amount;
};

CURRENT_ACCOUNT.prototype.withdraw = function(amount) {
    this.balance -= amount;
};
















module.exports = CURRENT_ACCOUNT;