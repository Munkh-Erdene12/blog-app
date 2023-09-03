import mongoose from "mongoose";
const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB холбогдолоо: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB-той холбогдох явцад алдаа гарлаа: ${error.message}`);
  }
};

export default ConnectDB;
