const CURRENT_ACCOUNT = require('../src/bank_account');

describe('deposit money into a current account', () => {

    test('show current account balance', () => {
        const MY_ACCOUNT = new CURRENT_ACCOUNT();
        expect(MY_ACCOUNT.balance).toBe(0);
    })

    test('deposit money into current account', () => {
        const MY_ACCOUNT = new CURRENT_ACCOUNT();
        expect(MY_ACCOUNT.balance).toBe(0);
        MY_ACCOUNT.deposit(1300);
        expect(MY_ACCOUNT.balance).toBe(1300);
    })
});