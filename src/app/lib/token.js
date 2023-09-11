import { verify } from "jsonwebtoken";
let secretKey = "$$$JSONWEBTOKEN__SECRET_KEY$$$";

export const token = (token) => {
  const decoded = verify(token, secretKey);
  console.log(decoded);
};
