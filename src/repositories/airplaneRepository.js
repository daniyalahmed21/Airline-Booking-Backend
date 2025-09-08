import Airplane  from "../models/airplane.js";
import CrudRepository from "./crudRepository.js";

export default class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}
