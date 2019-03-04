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

describe('withdraw money from a current account', () => {

    test('show current account balance', () => {
            const MY_ACCOUNT = new CURRENT_ACCOUNT();
            MY_ACCOUNT.balance = 1200;
            expect(MY_ACCOUNT.balance).toBe(1200);
    })
    
    test('deposit money into current account', () => {
            const MY_ACCOUNT = new CURRENT_ACCOUNT();
            MY_ACCOUNT.balance = 1200;
            MY_ACCOUNT.withdraw(150);
            expect(MY_ACCOUNT.balance).toBe(1050);
    })
});

describe('check balance of current account', () => {

    test('returns balance of current account', () => {
            const MY_ACCOUNT = new CURRENT_ACCOUNT();
            MY_ACCOUNT.balance = 1200;
            expect(MY_ACCOUNT.checkBalance()).toBe(1200);
    })
});