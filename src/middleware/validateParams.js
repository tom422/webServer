/**
 * @description 参数校验中间件
 */
const validateSchemaJoi = (method, schema) => {
    async function validateSchema(ctx, next) {
        let data = undefined;
        if (method === 'get') {
            data = ctx.request.query;
        } else {
            data = ctx.request.body;
        }
        const { value, error } = schema.validate(data);
        if (error) {
            // console.log(value);
            // ctx.body = {
            //     message:error.message
            // };
            ctx.app.emit('error', error.message, ctx)
        } else {
           await next();
        }
    }
    return validateSchema;
}

module.exports.validateSchemaJoi = validateSchemaJoi;
