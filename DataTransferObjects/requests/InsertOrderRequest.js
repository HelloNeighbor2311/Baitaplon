import Joi, { required } from "joi"

class InsertOrderRequest {
     constructor(data) {
          this.CustomerID = data.CustomerID;
          this.Status = data.Status;
          this.PaymentMethod = data.PaymentMethod;
          this.Created_At = data.Created_At;
          this.Updated_At = data.Updated_At;
      }
      static validate(data) {
          const schema = Joi.object({
              CustomerID: Joi.number().integer().required(),
              Status: Joi.string().required(),
              PaymentMethod: Joi.string().required(),
              Created_At: Joi.date().optional(),
              Updated_At: Joi.date().optional()
          });
  
          return schema.validate(data);
      }
}

export default InsertOrderRequest;