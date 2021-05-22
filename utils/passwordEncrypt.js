const bcrypt = require("bcryptjs");

const passwordEncrypt = async (rawPassword) => {
  try {
    const SALT = await bcrypt.genSalt(10);
    return await bcrypt.hash(rawPassword, SALT);
  } catch (error) {
    throw error;
  }
};

module.exports = passwordEncrypt;
