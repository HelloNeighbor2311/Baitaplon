<<<<<<< HEAD
import Joi, { required } from "joi";

class InsertOrderRequest {
  constructor(data) {
    this.OrderID = data.OrderID
    this.CustomerID = data.CustomerID;
    this.Status = data.Status;
    this.PaymentMethod = data.PaymentMethod;
  }
  static validate(data) {
    const schema = Joi.object({
      OrderID: Joi.number().integer().required(),
      CustomerID: Joi.number().integer().required(),
      Status: Joi.string().required(),
      PaymentMethod: Joi.string().required(),
    });

    return schema.validate(data);
  }
}

export default InsertOrderRequest;
=======
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
>>>>>>> 56f13e03e74e1dbf1499e7eb0d11de59014a69f2
