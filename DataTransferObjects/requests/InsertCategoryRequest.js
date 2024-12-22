import Joi, { required } from "joi";

class InsertCategoryRequest {
  constructor(data) {
    this.CategoryName = data.CategoryName;
    this.Image = data.Image;
  }
  static validate(data) {
    const schema = Joi.object({
      CategoryName: Joi.string().required(),
      Image: Joi.string().uri().allow(""),
    });

    return schema.validate(data);
  }
}

export default InsertCategoryRequest;
