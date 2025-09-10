import City from "../models/city.js";

export default class CityRepository {
  constructor() {
    this.model = City;
  }

  async get(id) {
    return await this.model.findByPk(id);
  }

  async getAll() {
    return await this.model.findAll();
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(id, data) {
    return await this.model.update(data, { where: { id } });
  }

  async destroy(id) {
    return await this.model.destroy({ where: { id } });
  }
}
