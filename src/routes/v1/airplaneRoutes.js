import Express from "express";
import { createAirplane } from "../../controllers/airplaneController.js";
import { validateAirplaneData } from "../../middlewares/airplaneMiddlewares.js";

const airplaneRouter = Express.Router();

airplaneRouter.post("/", validateAirplaneData, createAirplane);

export default airplaneRouter;
