package BANKACCOUNT;

public interface builder {// builderx
    public builder setAccountNumber(int accountNumber);

    public builder setOwner(String owner);

    public builder setPassword(String password);

    public builder setBirthday(String birthday);

    public builder setBalance(int balance);

    public builder setInterestRate(int interestRate);

    // public builder setAccountLevel(level AccountLevel);

    // public builder setBonusInterestRate(int BonusInterestRate);

    public BankAccount Builder();

}