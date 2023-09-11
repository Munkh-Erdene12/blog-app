import { DataTypes } from "sequelize";
import uniqueID from "unique";
import { sequelize } from "../../lib/ConnectDB";
const category = sequelize.define("category", {
  categoryID: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: "Та категори нэрийг оруулна уу!",
      },
    },
  },
});
(() => {
  try {
    console.info("success category model created 🔥");
    category.sync({ force: false });
  } catch (err) {
    console.error("error database connection: " + err);
  }
})();
export default category;
