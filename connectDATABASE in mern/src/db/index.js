// filepath: src/db/index.js
import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js"; // Go up two levels to find constants.js

const connectDB = async () => { //async used because databse is in another continent
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection FAILED: ", error);
    process.exit(1);
  }
};

export default connectDB;