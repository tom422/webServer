const joi = require('joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 用户名的验证规则
const user_name = joi.string().alphanum().min(1).max(10).required()
// 密码的验证规则
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required()

 

 


// 注册和登录表单的验证规则对象
exports.user_login_schema = joi.object({
  user_name,
  password,
})


// 注册和登录表单的验证规则对象
exports.user_login_schema = joi.object({
  user_name,
  password,
})

// // 注册和登录表单的验证规则对象
// exports.user_login_schema = {
//   // 表示需要对 req.body 中的数据进行验证
//   body: {
//     user_name,
//     password,
//   },
// }





