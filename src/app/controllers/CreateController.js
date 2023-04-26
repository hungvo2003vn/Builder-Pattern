// var { connection } = require("../../config/db");
const path=require('path')
const connection = require("../../config/db/customerAcc");
const {GoldAccount,BankAccount,SilverAccount,DiamondAccount} =require ('../models/class')
class CreateController {

  showCreateAccount(req,res){
    // res.render('./dishes/createAccount.hbs')
    // res.render('./newlogin.hbs')
    res.sendFile(path.join(__dirname,'../../../loginAccount.html'))

  }
  
  account(req, res) {
    var level =req.body.level;
    var customer= new BankAccount();
    if (level=='silver')
    {
      customer = new SilverAccount()
                .setAccountNumber(req.body.accountnumber)
                .setOwner(req.body.own) 
                .setPassword(req.body.pass)
                .setBalance(req.body.balance)
                .setBirthday(req.body.bdate)
                .setAddress(req.body.address)
                .setPhoneNumber(req.body.phonenumber)
                .setInterestRate(req.body.interestrate) 
                .setBonusInterestRate(req.body.bonus)
                .Builder();
    }
    else if(level=='gold')
    {
      customer = new GoldAccount()
                .setAccountNumber(req.body.accountnumber)
                .setOwner(req.body.own) 
                .setPassword(req.body.pass)
                .setBalance(req.body.balance)
                .setBirthday(req.body.bdate)
                .setAddress(req.body.address)
                .setPhoneNumber(req.body.phonenumber)
                .setInterestRate(req.body.interestrate) 
                .setBonusInterestRate(req.body.bonus)
                .Builder();
    }
    else{
      customer = new DiamondAccount()
                        .setAccountNumber(req.body.accountnumber)
                        .setOwner(req.body.own) 
                        .setPassword(req.body.pass)
                        .setBalance(req.body.balance)
                        .setBirthday(req.body.bdate)
                        .setAddress(req.body.address)
                        .setPhoneNumber(req.body.phonenumber)
                        .setInterestRate(req.body.interestrate) 
                        .setBonusInterestRate(req.body.bonus)
                        .Builder();
    }
    console.log('i  here');
    async function createAcc(){
          await  connection.query(`INSERT INTO acc VALUES ('${customer.accountNumber}', '${customer.owner}','${customer.password}',
          STR_TO_DATE('${customer.birthday}','%Y-%m-%d'),'${customer.address}','${customer.phonenumber}','${customer.balance}','${customer.interestRate}','${customer.AccountLevel}',
          '${customer.BonusInterestRate}') `)
              .then(()=>{
                res.sendFile(path.join(__dirname,'../../../createSuccess.html'))
              })
              .catch((err)=>{
                // res.send(err)
                res.sendFile(path.join(__dirname,'../../../createFailed.html'))
              })

  }
  createAcc()
}}


module.exports = new CreateController();
