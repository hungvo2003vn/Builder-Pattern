package BANKACCOUNT;

public class SilverAccount implements builder {// concretebuilder
    private int accountNumber;
    private String owner;
    private String password;
    private String birthday;
    private int balance;
    private int interestRate;

    @Override
    public builder setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }

    @Override
    public builder setOwner(String owner) {
        this.owner = owner;
        return this;
    }

    @Override
    public builder setPassword(String password) {
        this.password = password;
        return this;
    }

    @Override
    public builder setBirthday(String birthday) {
        this.birthday = birthday;
        return this;
    }

    @Override
    public builder setBalance(int balance) {
        this.balance = balance;
        return this;
    }

    @Override
    public builder setInterestRate(int interestRate) {
        this.interestRate = interestRate;
        return this;
    }

    @Override
    public BankAccount Builder() {
        return new BankAccount(this.accountNumber, this.owner, this.password, this.birthday, this.balance,
                this.interestRate, level.Silver, 0);
    }
}