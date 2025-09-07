import dotenv from "dotenv";
dotenv.config();

console.log(process.env.PORT);
export const SERVER_CONFIG = {
  PORT: process.env.PORT || 3000,
};
