<<<<<<< HEAD
import Joi, { required } from "joi";

class InsertCategoryRequest {
  constructor(data) {
    this.CategoryID = data.CategoryID;
    this.CategoryName = data.CategoryName;
    this.Image = data.Image;
  }
  static validate(data) {
    const schema = Joi.object({
      CategoryID: Joi.number().integer().required(),
      CategoryName: Joi.string().required(),
      Image: Joi.string().uri().allow(""),
    });

    return schema.validate(data);
  }
}

export default InsertCategoryRequest;
=======
import Joi, { required } from "joi"

class InsertCategoryRequest {
     constructor(data) {
          this.CategoryName = data.CategoryName;
          this.Image = data.Image;
     }
     static validate(data) {
          const schema = Joi.object({
               CategoryName: Joi.string().required(),
               Image: Joi.string().uri().allow("")
          });

          return schema.validate(data);
     }
}

export default InsertCategoryRequest;
>>>>>>> 56f13e03e74e1dbf1499e7eb0d11de59014a69f2
