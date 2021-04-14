const User = require("../models/User");

const getUser = async (query) => {
  try {
    const user = await User.findOne(query).select("+password");
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
