const User = require("../models/User");
const { registerValidator, loginValidator } = require("../utils/validation");
const passwordEncrypt = require("../utils/passwordEncrypt");
const { getUser } = require("../services/user.services");
const bcrypt = require("bcryptjs");
const validationObject = {
  register: registerValidator,
  login: loginValidator,
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
    const emailExist = await User.findOne({ email });
    const usernameExist = await User.findOne({ username });

    if (emailExist) {
      return res.status(400).json({ error_msg: "Email already exists" });
    }
    if (usernameExist) {
      return res.status(400).json({ error_msg: "Username already exists" });
    }
    req.body.password = await passwordEncrypt(password);

    const user = new User(req.body);
    const savedUser = await user.save();
    const token = savedUser.getSignedToken();
    return res.status(201).json({ food_order_access_token: token });
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    await handleValidation(req.body, "login");
    const { email, password } = req.body;
    const user = await getUser({ email }, true);
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).json({ error_msg: "Incorrect password" });
    }
    const token = user.getSignedToken();
    return res.status(200).json({ food_order_access_token: token });
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

module.exports = {
  registerController,
  loginController,
};
