export default class BankAccount {
    constructor({ bankName = '', accountName = '', accountNumber = '' } = {}) {
        this.bankName = bankName;
        this.accountName = accountName;
        this.accountNumber = accountNumber;
    }
}
