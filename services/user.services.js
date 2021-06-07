const User = require("../models/User");

const getUser = async (query, password) => {
  try {
    let user;
    if (password) {
      user = await User.findOne(query).select("+password");
    } else {
      user = await User.findOne(query);
    }
    if (!user) {
      throw Error("User not found");
    }
    return user;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getUser,
};
