const express = require("express");
const { createOrders, getOrders, getOrderCount, deleteOrder } = require("../controllers/order.controllers");

const router = express.Router();

router.get("/getorders", getOrders);
router.post("/createorder", createOrders);
router.get("/ordercount", getOrderCount);
router.delete("/deleteorder/:id", deleteOrder);


module.exports = router;