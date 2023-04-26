

  class BankAccount {
    constructor(
      accountNumber,
      owner,
      password,
      birthday,
      address,
      phonenumber,
      balance,
      interestRate,
      AccountLevel,
      BonusInterestRate
    ) {
      this.accountNumber = accountNumber;
      this.owner = owner;
      this.password = password;
      this.birthday = birthday;
      this.address=address;
      this.phonenumber=phonenumber;
      this.balance = balance;
      this.interestRate = interestRate;
      this.AccountLevel = AccountLevel;
      this.BonusInterestRate = BonusInterestRate;
    }
    logger()
    {
      console.log('object');
    }
    getAccountNumber() {
      return this.accountNumber;
    }
    getAccountLevel() {
      return this.AccountLevel;
    }
    getOwner() {
      return this.owner;
    }
    getPassword() {
      return this.password;
    }
    getBirthday() {
      return this.birthday;
    }
    getAddress() {
      return this.address;
    }
    getPhoneNumber() {
      return this.phonenumber;
    }
    getBalance() {
      return this.balance;
    }
    getInterestRate() {
      return this.interestRate;
    }
    getBonusInterestRate() {
      return this.BonusInterestRate;
    }
    toString() {
      return (
        "-----Account Information-----\n* Account Number: " +
        this.accountNumber +
        "\n* Owner: " +
        this.owner +
        "\n* Birthday: " +
        this.birthday +
        "\n* Address: " +
        this.address +
        "\n* Phone Number: " +
        this.phonenumber +
        "\n* Balance: " +
        this.balance +
        "\n* Interest Rate: " +
        this.interestRate +
        "\n* Account Level: " +
        this.AccountLevel +
        "\n* Bonus Interest Rate: " +
        this.BonusInterestRate
      );
    }
  }
  
  //Diamond
   class DiamondAccount {
    constructor() {
      this.accountNumber = 0;
      this.owner = "";
      this.password = "";
      this.birthday = "";
      this.address="";
      this.phonenumber="";
      this.balance = 0;
      this.interestRate = 0;
      this.BonusInterestRate = 0;
    }
  

    setAccountNumber(accountNumber) {
      this.accountNumber = accountNumber;
      return this;
    }
  
    setOwner(owner) {
      this.owner = owner;
      return this;
    }
  
    setPassword(password) {
      this.password = password;
      return this;
    }
  
    setBirthday(birthday) {
      if(birthday=='') birthday = '1000-10-10';
      this.birthday = birthday;
      return this;
    }
    setAddress(address) {
      this.address = address;
      return this;
    }
    setPhoneNumber(phonenumber) {
      
      this.phonenumber = phonenumber;
      return this;
    }
    setBalance(balance) {
      if(balance=='')
      {
        balance=0;
      }
      this.balance = balance;
      return this;
    }
  
    setInterestRate(interestRate) {
      if(interestRate=='')
      {
        interestRate=0;
      }
      this.interestRate = interestRate;
      return this;
    }
    setBonusInterestRate(BonusInterestRate) {
      if(BonusInterestRate=='')
      {
        BonusInterestRate=0;
      }
      this.BonusInterestRate = BonusInterestRate;
      return this;
    }
  
  
    Builder() {
      return new BankAccount(
        this.accountNumber,
        this.owner,
        this.password,
        this.birthday,
        this.address,
        this.phonenumber,
        this.balance,
        this.interestRate,
        "Diamond",
        this.BonusInterestRate
      );
    }
  }
  
  //Gold member
  class GoldAccount {
    constructor() {
      this.accountNumber = 0;
      this.owner = "";
      this.password = "";
      this.birthday = "";
      this.address="";
      this.phonenumber="";
      this.balance = 0;
      this.interestRate = 0;
      this.BonusInterestRate = 0;
    }
  

  
    setAccountNumber(accountNumber) {
      this.accountNumber = accountNumber;
      return this;
    }
  
    setOwner(owner) {
      this.owner = owner;
      return this;
    }
  
    setPassword(password) {
      this.password = password;
      return this;
    }
  
    setBirthday(birthday) {
      if(birthday=='') birthday = '1000-10-10';
      this.birthday = birthday;
      return this;
    }
    setAddress(address) {
      this.address = address;
      return this;
    }
    setPhoneNumber(phonenumber) {
      this.phonenumber = phonenumber;
      return this;
    }
    setBalance(balance) {
      if(balance=='')
      {
        balance=0;
      }
      this.balance = balance;
      return this;
    }
  
    setInterestRate(interestRate) {
      if(interestRate=='')
      {
        interestRate=0;
      }
      this.interestRate = interestRate;
      return this;
    }
    setBonusInterestRate(BonusInterestRate) {
      if(BonusInterestRate=='')
      {
        BonusInterestRate=0;
      }
      this.BonusInterestRate = BonusInterestRate;
      return this;
    }
  
    Builder() {
      return new BankAccount(
        this.accountNumber,
        this.owner,
        this.password,
        this.birthday,
        this.address,
        this.phonenumber,
        this.balance,
        this.interestRate,
        "Gold",
        this.BonusInterestRate
      );
    }
  }
  
  //Silver
  class SilverAccount {
    constructor() {
      this.accountNumber = 0;
      this.owner = "";
      this.password = "";
      this.birthday = "";
      this.address="";
      this.phonenumber="";
      this.balance = 0;
      this.interestRate = 0;
      this.BonusInterestRate = 0;
    }
  

  
    setAccountNumber(accountNumber) {
      this.accountNumber = accountNumber;
      return this;
    }
  
    setOwner(owner) {
      this.owner = owner;
      return this;
    }
  
    setPassword(password) {
      this.password = password;
      return this;
    }
  
    setBirthday(birthday) {
      if(birthday=='') birthday = '1000-10-10';
      this.birthday = birthday;
      return this;
    }
    setAddress(address) {
      this.address = address;
      return this;
    }
    setPhoneNumber(phonenumber) {
      this.phonenumber = phonenumber;
      return this;
    }
    setBalance(balance) {
      if(balance=='')
      {
        balance=0;
      }
      this.balance = balance;
      return this;
    }
  
    setInterestRate(interestRate) {
      if(interestRate=='')
      {
        interestRate=0;
      }
      this.interestRate = interestRate;
      return this;
    }
    setBonusInterestRate(BonusInterestRate) {
      if(BonusInterestRate=='')
      {
        BonusInterestRate=0;
      }
      this.BonusInterestRate = BonusInterestRate;
      return this;
    }
  
    Builder() {
      return new BankAccount(
        this.accountNumber,
        this.owner,
        this.password,
        this.birthday,
        this.address,
        this.phonenumber,
        this.balance,
        this.interestRate,
        "Silver",
        this.BonusInterestRate
      );
    }
  }
  
var customer = new BankAccount();
customer = new GoldAccount()
  .setAccountNumber(1019250478)
  .setOwner("Hưng Võ")
  .setPassword("22022003")
  .setBalance(1000000000)
  .setBirthday("22/02/2003")
  .setInterestRate(1)
  .Builder();

console.log(customer.toString());
  module.exports={GoldAccount,BankAccount,SilverAccount,DiamondAccount}

