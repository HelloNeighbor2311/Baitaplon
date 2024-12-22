import Joi, { required } from "joi"

class InsertProducRequest {
    constructor(data) {
        this.ProductName = data.ProductName;
        this.StoreID = data.StoreID;
        this.CategoryID = data.CategoryID;
        this.Image = data.Image;
        this.Quantity = data.Quantity;
        this.Price = data.Price;
        this.Rate = data.Rate;
        this.Description = data.Description;
    }
    static validate(data) {
        const schema = Joi.object({
            ProductName: Joi.string().required(),
            StoreID: Joi.number().integer().required(),
            CategoryID: Joi.number().integer().required(),
            Image: Joi.string().uri().allow(""),
            Quantity: Joi.number().integer().min(0).required(),
            Price: Joi.number().positive().required(),
            Rate: Joi.number().positive().min(0).max(5),
            Description: Joi.string().optional()
        });

        return schema.validate(data);
    }
}

export default InsertProducRequest;