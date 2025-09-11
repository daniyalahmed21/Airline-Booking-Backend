import { StatusCodes } from "http-status-codes";
import Repositories from "../repositories/index.js";
import AppError from "../utils/errors/appError.js";

export default class AirplaneService {
  constructor() {
    this.airplaneRepository = new Repositories.AirplaneRepository();
  }

  async createAirplane(data) {
    return await this.airplaneRepository.create(data);
  }

  async getAirplanes() {
    const airplanes = await this.airplaneRepository.getAll();
    if (airplanes.length === 0) {
      throw new AppError(
        "Not able to find the resource ",
        StatusCodes.NOT_FOUND,
        ["No airplanes found"]
      );
    }
    return airplanes;
  }

  async getAirplane(id) {
    const airplane = await this.airplaneRepository.get(id);
    if (!airplane) {
      throw new AppError(
        "Not able to find the resource ",
        StatusCodes.NOT_FOUND,
        [`Airplane with id ${id} not found`]
      );
    }
    return airplane;
  }

  async updateAirplane(id, data) {
    const updated = await this.airplaneRepository.update(id, data);
    if (!updated[0]) {
      throw new AppError(
        "Not able to update the resource",
        StatusCodes.NOT_FOUND,
        [`Airplane with id ${id} not found`]
      );
    }
    return updated;
  }

  async deleteAirplane(id) {
    const deleted = await this.airplaneRepository.destroy(id);
    if (!deleted) {
      throw new AppError(
        "Not able to delete the resource",
        StatusCodes.NOT_FOUND,
        [`Airplane with id ${id} not found`]
      );
    }
    return true;
  }
}
