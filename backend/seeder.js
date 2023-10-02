import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import houses from "./data/products.js";
import User from "./models/userModel.js";
import Apartment from "./models/apartmentModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Apartment.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleApartments = houses.map((house) => {
      return { ...house, user: adminUser };
    });

    await Apartment.insertMany(sampleApartments);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const removeData = async () => {
  try {
    await Order.deleteMany();
    await Apartment.deleteMany();
    await User.deleteMany();
    console.log("Data removed");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  removeData();
} else {
  importData();
}
