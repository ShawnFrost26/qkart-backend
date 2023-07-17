const mongoose = require('mongoose');
const { productSchema } = require('./product.model');
const config = require("../config/config")

// TODO: CRIO_TASK_MODULE_CART - Complete cartSchema, a Mongoose schema for "carts" collection

// const cartItemSchema = mongoose.Schema(
//   {
//     product: {
//       type: productSchema,
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     _id: false, // Disable generating _id for cartItems
//   }
// );

const cartSchema = mongoose.Schema(
  {
    email : {
      type: String,
      required: true,
      unique: true,
    },
    cartItems : {
     type: [{product: productSchema, quantity: Number }],
    },
    paymentOption: {
      type: String,
      default: config.default_payment_option
    }
  },
  
  {
    timestamps: false,
  }
);


/**
 * @typedef Cart
 */
const Cart = mongoose.model('Cart', cartSchema);

module.exports.Cart = Cart;