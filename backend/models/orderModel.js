import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  apartmentOrdered: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      apartment: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Apartment",
      },
    },
  ],

  paymentMethod: {
    type: String,
    required: true,
  },

  paymentResult: {
    id: { type: String},
    status: { type: String},
    update_time: {type: String},
    email_address: { type: String}
  }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
