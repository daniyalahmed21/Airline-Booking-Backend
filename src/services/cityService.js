import AppError from "../utils/errors/appError.js";
import { StatusCodes } from "http-status-codes";
import Repositories from "../repositories/index.js";

export default class CityService {
  constructor() {
    this.cityRepository = new Repositories.CityRepository();
  }

  async createCity(data) {
    return await this.cityRepository.create(data);
  }

  async getCities() {
    return await this.cityRepository.getAll();
  }

  async getCity(id) {
    const city = await this.cityRepository.get(id);
    if (!city) {
      throw new AppError(`City with id ${id} not found`, StatusCodes.NOT_FOUND);
    }
    return city;
  }

  async updateCity(id, data) {
    const [updated] = await this.cityRepository.update(id, data);
    if (!updated) {
      throw new AppError(`City with id ${id} not found`, StatusCodes.NOT_FOUND);
    }
    return updated;
  }

  async deleteCity(id) {
    const deleted = await this.cityRepository.destroy(id);
    if (!deleted) {
      throw new AppError(`City with id ${id} not found`, StatusCodes.NOT_FOUND);
    }
    return true;
  }
}
