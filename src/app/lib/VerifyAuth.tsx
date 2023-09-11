import { jwtVerify } from "jose";
// interface UserJwtPalyoad {
//   jti: string;
//   iat: number;
// }
export const getJwtSecretKey = async () => {
  const secretKey = `$$$SECRET_KEY_TOKEN$$$`;
  if (!secretKey || secretKey.length === 0) {
    console.error("No secret key");
  }
  return secretKey;
};

export const verifyAuth = async (token: string) => {
  try {
    const secret = await getJwtSecretKey();
    const verified = await jwtVerify(token, new TextEncoder().encode(secret));
    return verified.payload;
  } catch (err) {
    console.log("your token has expired");
  }
};
