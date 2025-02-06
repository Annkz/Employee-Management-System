
import mongoose from "mongoose";


const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch(error) {
    console.log("Error connecting to database");
    process.exit(1);
  }
};

export default connectToDatabase;
