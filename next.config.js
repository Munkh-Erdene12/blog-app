/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "build",
  // images: {
  //   unoptimized: true,
  // },
  headers: [],
  env: {
    DIALECT: "mysql",
    HOST: "localhost",
    ROOT: "root",
    DATABASE: "project",
    PASSWORD: "22112211",
    MONGODB_URL: `mongodb+srv://user:2211@cluster0.ooxxgki.mongodb.net/Blog-App`,
    SECRET_KEY: "$$$JSONWEBTOKEN__SECRET_KEY$$$",
    REFRESH_SECRET_KEY: "$$$REFRESH_SECRET__REFRESH_SECRET$$$",
  },
};

module.exports = nextConfig;
