import Repositories from "../repositories/index.js";

export default class AirplaneService {
  constructor() {
    this.airplaneRepository = new Repositories.AirplaneRepository();
  }

  async createAirplane(data) {
    return await this.airplaneRepository.create(data);
  }

  async getAirplanes() {
    return await this.airplaneRepository.getAll();
  }

  async getAirplane(id) {
    return await this.airplaneRepository.get(id);
  }

  async updateAirplane(id, data) {
    return await this.airplaneRepository.update(id, data);
  }

  async deleteAirplane(id) {
    return await this.airplaneRepository.destroy(id);
  }
}
