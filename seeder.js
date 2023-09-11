const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const categoryModel = require("./src/app/database/models/category");
dotenv.config({ path: ".env" });
console.log(process.env.ROOT);

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.ROOT,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    dialectModule: mysql2,
  }
);
(async () => {
  try {
    console.info("creating database connection...💾");
    await sequelize.sync({ force: false });
  } catch (err) {
    console.error("created database failed: ", err);
  }
})();
const categorys = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "src", "app", "database", "category.json")
  )
);
// mongoose.connect(process.env.MONGODB__URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const users = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "data", "user.json"), "utf-8")
// );

const importData = async () => {
  try {
    await categoryModel.create(categorys);
    console.log("өгөгдлийг импортлолоо.... ☘️ ");
  } catch (err) {
    console.log(err);
  }
};

const delteData = async () => {
  try {
    await categoryModel.destroyAll();
    console.log("өгөгдлийг бүгдийг устаглаа... 🚮");
  } catch (err) {
    console.log(err.red);
  }
};
if (process.argv[2] === "-i") {
  console.log(process.argv[1] + "hhhhh");
  importData();
} else if (process.argv[2] === "-d") {
  delteData();
}
