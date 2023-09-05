import { DataTypes } from "sequelize";
import unique from "unique";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sequelize } from "@/app/lib/ConnectDB";
const User = sequelize.define(
  "User",
  {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      unique: true,
      defaultValue: () => unique(),
    },
    firstname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Та нэрээ оруулна уу!",
        },
      },
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Та овгоо оруулна уу!",
        },
      },
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    resetPasswordToken: DataTypes.STRING,
    resetPasswordExpire: DataTypes.STRING,
  },
  {
    hooks: {
      async beforeCreate(user) {
        if (user.password) {
          const salt = await bcrypt.genSalt(16);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);
User.prototype.jsonToken = function () {
  const token = jwt.sign(
    { id: this.id, role: this.role },
    // process.env.SECRET_KEY,
    "$$$JSONWEBTOKEN__SECRET_KEY$$$",
    {
      expiresIn: "1h",

      // process.env.EXPIRES,
    }
  );
  return token;
};
User.prototype.refreshToken = function (token) {
  if (token) {
    const decoded = jwt.verify(token, "$$$REFRESH_SECRET__REFRESH_SECRET$$$");
    const refreshNewToken = jwt.sign(
      { id: this.id, role: this.role },
      "$$$REFRESH_SECRET__REFRESH_SECRET$$$",
      { expiresIn: "1y" }
    );
    return refreshNewToken;
  } else {
    const accessToken = jwt.sign(
      { id: this.id, role: this.role },
      "$$$REFRESH_SECRET__REFRESH_SECRET$$$",
      { expiresIn: "1y" }
    );
    return accessToken;
  }
};
User.prototype.checkPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};
User.prototype.generatePasswordChangeToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};
(() => {
  try {
    User.sync({ force: false });
    console.info("User sync successful 💽👌");
  } catch (err) {
    console.error("User sync error: " + err);
  }
})();
export default User;
