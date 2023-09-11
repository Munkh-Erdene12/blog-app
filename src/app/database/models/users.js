import { DataTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import unique from "unique";
import bcrypt from "bcrypt";
import { JWK, JWT, SignJWT } from "jose";
import { nanoid } from "nanoid";
import { sequelize } from "../../lib/ConnectDB";
import { getJwtSecretKey } from "../../lib/VerifyAuth";
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
User.prototype.jsonToken = async function () {
  const secure = await getJwtSecretKey();
  const token = await new SignJWT({ role: this.role, id: this.id })
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(secure));
  return token;
};
User.prototype.refreshToken = function (token) {
  const privateKey = JWK.asKey({
    kty: "oct",
    k: "$$$REFRESH_TOKEN$$$", // Refresh нууц түлхүүр оруулна уу
  });

  if (token) {
    try {
      const decoded = JWT.verify(token, privateKey);
      const refreshNewToken = JWT.sign(
        { id: this.id, role: this.role },
        privateKey,
        { expiresIn: "1y" }
      );
      return refreshNewToken;
    } catch (err) {
      return null;
    }
  } else {
    const accessToken = JWT.sign({ id: this.id, role: this.role }, privateKey, {
      expiresIn: "1y",
    });
    return accessToken;
  }
};
User.prototype.checkPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};
User.prototype.generatePasswordChangeToken = function () {
  const resetToken = uuidv4();
  this.resetPasswordToken = resetToken;
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
