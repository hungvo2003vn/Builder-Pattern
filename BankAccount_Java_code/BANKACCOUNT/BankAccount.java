package BANKACCOUNT;

public class BankAccount {// product
    private int accountNumber;
    private String owner;
    private String password;
    private String birthday;
    private int balance;
    private int interestRate;
    private level AccountLevel;
    private int BonusInterestRate;

    public BankAccount(int accountNumber, String owner, String password, String birthday, int balance, int interestRate,
            level AccountLevel, int BonusInterestRate) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.password = password;
        this.birthday = birthday;
        this.balance = balance;
        this.interestRate = interestRate;
        this.AccountLevel = AccountLevel;
        this.BonusInterestRate = BonusInterestRate;
    }

    public int getAccountNumber() {
        return this.accountNumber;
    }

    public level getAccountLevel() {
        return this.AccountLevel;
    }

    public String getOwner() {
        return this.owner;
    }

    public String getPassword() {
        return this.password;
    }

    public String getBirthday() {
        return this.birthday;
    }

    public int getBalance() {
        return this.balance;
    }

    public int getInterestRate() {
        return this.interestRate;
    }

    public int getBonusInterestRate() {
        return this.BonusInterestRate;
    }

    @Override
    public String toString() {
        return "\n-----Account Information-----\n* Account Number: " + this.getAccountNumber() + "\n*Account Level: "
                + this.getAccountLevel() + "\n* Owner: " + this.getOwner() + "\n* Password: " + this.getPassword()
                + "\n* Birthday: " + this.getBirthday() + "\n* Balance: " + this.getBalance() + "\n* InterestRate: "
                + this.getInterestRate() + "\n* Bonus InterestRate: " + this.getBonusInterestRate() + "%\n";
    }
}