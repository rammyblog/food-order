const axios = require("axios");

const validatePaystack = async (reference, totalAmount) => {
  try {
    const res = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_YOUR_SECRET_KEY}`,
        },
      }
    );
    const { status, amount } = res.data.data;
    if (status === "success" && amount === totalAmount * 100) {
      console.log("Success");
      return true;
    }
    return false;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = validatePaystack;
