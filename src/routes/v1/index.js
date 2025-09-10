import Express from "express";
import airplaneRouter from "./airplaneRoutes.js";
import cityRouter from "./cityRoutes.js";

const v1Router = Express.Router();

v1Router.use("/airplanes", airplaneRouter);
v1Router.use("/cities", cityRouter);

export default v1Router;
