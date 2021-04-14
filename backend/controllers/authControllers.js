const { registerValidator } = require("../utils/validation");
const User = require("../models/User");
const passwordEncrypt = require("../utils/passwordEncrypt");

const validationObject = {
  register: registerValidator,
};

const handleValidation = (body, type) => {
  const { error } = validationObject[type](body);
  if (error) {
    throw Error(error.details[0].message);
  }
};

const registerController = async (req, res) => {
  try {
    await handleValidation(req.body, "register");
    const { email, username, password } = req.body;
    const emailExist = await User.findOne({ email: email });
    const usernameExist = await User.findOne({ username: username });

    if (emailExist) {
      return res.status(400).json({ error_msg: "Email already exists" });
    }
    if (usernameExist) {
      return res.status(400).json({ error_msg: "Username already exists" });
    }
    req.body.password = await passwordEncrypt(password);

    const user = new User(req.body);
    const savedUser = await user.save();
    return res.status(201).json({ data: savedUser });
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

module.exports = {
  registerController,
};
