import City from "../models/city.js";
import CrudRepository from "./crudRepository.js";

export default class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
}