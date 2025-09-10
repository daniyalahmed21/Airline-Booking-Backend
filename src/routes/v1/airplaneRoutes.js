import Express from "express";
import {AirplaneController} from "../../controllers/index.js";
import Middlewares from "../../middlewares/index.js";

const airplaneRouter = Express.Router();

airplaneRouter.post("/", Middlewares.validateAirplaneData, AirplaneController.createAirplane);
airplaneRouter.get("/", AirplaneController.getAirplanes);
airplaneRouter.get("/:id", AirplaneController.getAirplane);
airplaneRouter.delete("/:id", AirplaneController.deleteAirplane);
airplaneRouter.put("/:id", AirplaneController.updateAirplane);


export default airplaneRouter;
