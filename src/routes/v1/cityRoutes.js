import Express from "express";
import { CityController } from "../../controllers/index.js";

const cityRouter = Express.Router();

cityRouter.post("/", CityController.createCity);
cityRouter.get("/", CityController.getCities);
cityRouter.get("/:id", CityController.getCity);
cityRouter.put("/:id", CityController.updateCity);
cityRouter.delete("/:id", CityController.deleteCity);

export default cityRouter;
