const { DEFAULT_ENCODING } = require('crypto');
const jwt = require('jsonwebtoken');
const path=require('path')
const accConnection = require("../../config/db/account.js");
require("dotenv").config();

class LoginController{
    render(req,res)
    {
        
            res.sendFile(path.join(__dirname,'../../../login.html'))
    }
    checkAndSendToken(req,res)
    {
        async function check ()
        {
            console.log('check');
            console.log(req.body.username);
            var result=await accConnection.query(`SELECT EXISTS(SELECT * FROM Login WHERE username='${req.body.username}' AND password='${req.body.password}') AS Existing`)
            const check=result[0][0];
            console.log();
            if(check.Existing)
            {
               var token=  jwt.sign({user:req.body.username},'mk')
               res.cookie('token', token);
               res.sendFile(path.join(__dirname,'../../../successLogin.html'))
            }
            else{
                res.sendFile(path.join(__dirname,'../../../failLogin.html'))

            }
        }
        check()
    }
    checkToken(req,res,next)  {
        try{
            console.log('kiem tra');
            var ketqua=jwt.verify(req.cookies.token,process.env.SECRET)
            console.log('finish');
            next();
        }
        catch(err){
            res.sendFile(path.join(__dirname,'../../../authenticationFail.html'))

        }
    }
}

module.exports=new LoginController()