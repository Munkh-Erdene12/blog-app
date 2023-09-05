import mongoose from "mongoose";
import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
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
export const sequelize = new Sequelize("project", "root", "22112211", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
});
(async () => {
  try {
    console.info("creating database connection...💾");
    await sequelize.sync({ force: false });
  } catch (err) {
    console.error("created database failed: ", err);
  }
})();

export default ConnectDB;
