import Express from "express";
import airplaneRouter from "./airplaneRoutes.js";
import cityRouter from "./cityRoutes.js";
import airportRouter from "./airportRoutes.js";

const v1Router = Express.Router();

v1Router.use("/airplanes", airplaneRouter);
v1Router.use("/cities", cityRouter);
v1Router.use("/airports", airportRouter);

export default v1Router;
