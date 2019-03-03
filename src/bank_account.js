
function CURRENT_ACCOUNT() {
    this.balance = 0;
}

CURRENT_ACCOUNT.prototype.deposit = function(number) {
    this.balance += number;
};

























module.exports = CURRENT_ACCOUNT;