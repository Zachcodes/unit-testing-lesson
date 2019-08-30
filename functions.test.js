const { sum, sayHello } = require('./index');

// Basic test example
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// expect gives us access to certain methods to validate return values
test('sayHello says hello', () => {
  expect(sayHello()).toBe('hello');
});

// Checking the value of an object
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('Expect true to be truthy', () => {
  expect(true).toBeTruthy();
});

//Checking an array contains an items
let names = ['John', 'Ariel', 'Zach'];
// let names = [{id: 1, name: 'John'}]

test('Names contains Ariel', () => {
  expect(names).toContain('Ariel');
});

// Setup for and teardown for tests
let bankAccount = {
  balance: 1000,
  depositMoney(amount) {
    this.balance += amount;
  },
  withdrawMoney(amount) {
    this.balance -= amount;
  }
};

// Grouping tests together
describe('Bank account methods and properties', () => {
  afterEach(() => {
    bankAccount.balance = 1000;
  });
  test('Initial balance is 1000', () => {
    expect(bankAccount.balance).toBe(1000);
  });
  test('depositMoney should correctly alter balance', () => {
    bankAccount.depositMoney(2000);
    expect(bankAccount.balance).toBe(3000);
  });
  test('withDraw should correctly alter balance', () => {
    bankAccount.withdrawMoney(2000);
    expect(bankAccount.balance).toBe(-1000);
  });
});
