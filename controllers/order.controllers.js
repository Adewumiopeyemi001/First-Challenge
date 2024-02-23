const mongoose = require("mongoose");
const order = require("../models/order.models");

exports.getOrders = async (req, res) => {
  try {
    const orders = await order.find();
    res
      .status(200)
      .json({message: "Available orders are:", orders });
  } catch (err) {
    res.status(500).json({ message: "No available Order", err });
  }
};

exports.createOrders = async (req, res) => {
  try {
    const { name, address, typeOfFood, numberOfPlates } = req.body;
    if (!name || !address || !typeOfFood || !numberOfPlates) {
      return res
        .status(404)
        .json({
          message:
            "Please provide your name, address, type of food and number of plates",
        });
    }
    const newOrder = new order({
      name,
      address,
      typeOfFood,
      numberOfPlates,
    });

    await newOrder.save();
    return res
      .status(200)
      .json({ message: "Order Created Successfully", order });
  } catch (err) {
    return res.status(500).json({ message: "Error Creating Order", err });
  }
};


exports.getOrderCount = async (req, res) => {
  try {
    const count = await order.countDocuments();
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    await order.findByIdAndDelete({_id: orderId});
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Order Not Found", err });
  }
};
