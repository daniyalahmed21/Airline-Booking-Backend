import Express from "express";
import Controllers from "../../controllers/index.js";
import Middlewares from "../../middlewares/index.js";

const airplaneRouter = Express.Router();

airplaneRouter.post("/", Middlewares.validateAirplaneData, Controllers.createAirplane);
airplaneRouter.get("/", Controllers.getAirplanes);


export default airplaneRouter;
