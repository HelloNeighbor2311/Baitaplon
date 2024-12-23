import Joi, { required } from "joi"

class LoginCustomerRequest {
    constructor(data) {
        this.Email = data.Email;
        this.Password = data.Password;
        // this.Password = this.encryptPassword(data.Password);
    }
    static validate(data) {
        const schema = Joi.object({
            Email: Joi.string().required(),
            Password: Joi.string().min(6).required(),
        });

        return schema.validate(data);
    }
}

export default LoginCustomerRequest;