const Router = require('koa-router')

const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
} = require('../middleware/user.middleware')

const { auth } = require('../middleware/auth.middleware')
const {
  register,
  login,
  changePassword,
} = require('../controller/user.controller')

const { validateSchemaJoi } = require('../middleware/validateParams')
const { user_login_schema } = require('../schema/user')
const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', validateSchemaJoi('post',user_login_schema), verifyUser, crpytPassword, register)

// 登录接口
router.post('/login', validateSchemaJoi('post',user_login_schema), verifyLogin, login)

// 修改密码接口
router.patch('/', auth, crpytPassword, changePassword)

module.exports = router
