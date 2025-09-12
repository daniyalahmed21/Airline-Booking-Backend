import Express from "express";
import { AirportController } from "../../controllers/index.js";
const airportRouter = Express.Router();

airportRouter.post("/", AirportController.createAirport);
airportRouter.get("/", AirportController.getAirports);  
airportRouter.get("/:id", AirportController.getAirport);
airportRouter.delete("/:id", AirportController.deleteAirport);
airportRouter.put("/:id", AirportController.updateAirport);
export default airportRouter;
