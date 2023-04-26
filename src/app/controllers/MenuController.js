const connection = require("../../config/db/customerAcc");
class MenuController{
    //POST search/menu
    index(req,res)
    {
        async function menu()
        {
            console.log(req.body.name);  
            var result= await connection.query(`SELECT *  FROM acc WHERE own like '%${req.body.name}%';`)
            var account=result[0]
                res.render('afterSearch',{account})
          //  res.redirect('/nam');
        }
        menu()
    }
    // POST /:accountnumber/detail
    showDetail(req,res)
    {
        async function showDetail()
        {
                var manyAcc = await connection.query(`SELECT *  FROM acc WHERE accountnumber = '${req.params.accountnumber}';`)
                var acc=manyAcc[0];
                // console.log(acc);
                // let date = JSON.stringify(acc[0].bdate)
                // console.log(date);
                // date = date.slice(1,11)
                // acc[0].bdate=date;
                console.log(acc);
                res.render('./details/account.hbs',{acc})
        }
        showDetail()
    }
}

module.exports=new MenuController()