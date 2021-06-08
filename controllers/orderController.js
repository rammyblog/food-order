const Order = require("../models/Order");
const validatePaystack = require("../utils/validatePaystack");

const createOrderController = async (req, res) => {
  try {
    const { cart, reference } = req.body;
    console.log({ cart });
    const verifyPurchase = await validatePaystack(reference, cart.totalAmount);
    if (verifyPurchase) {
      const order = new Order({ user: req.user._id, cart, reference });
      await order.save();
      return res.status(200).json(order);
    } else {
      return res.status(400).json({
        error_msg: `For some reasons the we were unable to validate the payment. 
      This is your reference number ${reference}. Contact customer care with the reference number `,
      });
    }
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

const getUserOrdersController = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(400).json({ error_msg: error.message });
  }
};

module.exports = { createOrderController, getUserOrdersController };
