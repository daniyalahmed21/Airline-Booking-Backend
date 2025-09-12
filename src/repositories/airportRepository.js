import Airport from "../models/airplane.js";
import CrudRepository from "./crudRepository.js";

export default class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}
