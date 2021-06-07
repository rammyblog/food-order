const { getUser } = require("../services/user.services");
const getCurrentUserController = async (req, res) => {
  try {
    const user = await getUser({ _id: req.user._id }, false);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

module.exports = { getCurrentUserController };
