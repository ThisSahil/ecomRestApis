import Joi from "joi";
import { passwordRegex } from "../../utils/regexUtils";

const registerController = {
  register(req, res, next) {
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(passwordRegex).required(),
      confirm_password: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    res.json({ msg: "hellooo jjiiiiii" });
  },
};

// checklist

// validate the request   [✅]
// authorise the request
// check if user is already present in the database
// prepare model
// store in database
// generate jwt token
// send response

// [✅]

export default registerController;
