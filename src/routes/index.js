const menuController=require('../app/controllers/MenuController')
const createController= require('../app/controllers/CreateController')
const siteController= require('../app/controllers/SiteController')
const loginController= require('../app/controllers/LoginController')
const jwt=require('jsonwebtoken')

function route(app)
{
            app.get('/',siteController.index)
            // GET login
            app.get('/login',loginController.render)
            //POST login
            app.post('/login',loginController.checkAndSendToken)
            app.use(loginController.checkToken)

            app.get('/create/account',createController.showCreateAccount)
            app.post('/account',createController.account)


            app.post('/search/menu',menuController.index)
            app.get('/:accountnumber/detail',menuController.showDetail)

            


}

module.exports = route