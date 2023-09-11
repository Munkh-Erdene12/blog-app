import { DataType, DataTypes } from "sequelize";
import { sequelize } from "../../lib/ConnectDB";
import categoryModel from "../models/category";
const content = sequelize.define("content", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
categoryModel.hasMany(content, { foreignKey: "categoryID" });
content.belongsTo(categoryModel, { foreignKey: "categoryID" });
(() => {
  try {
    console.info("success content model created 🔥");
    content.sync({ force: false });
  } catch (err) {
    console.error("error database connection: " + err);
  }
})();
export default content;
