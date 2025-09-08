import Express from "express";
import { info } from "../../controllers/infoController.js";
import airplaneRouter from "./airplaneRoutes.js";

const v1Router = Express.Router();

v1Router.use("/airplanes", airplaneRouter);

v1Router.get("/", (req, res) => {
  res.send("API v1 is working!");
});

v1Router.get("/info", info);

export default v1Router;
