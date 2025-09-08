const { logger } = require("../config/loggerConfig.js");

export default class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repository : get");
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repository : getAll");
      throw error;
    }
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repository : create");
      throw error;
    }
  }

  async update(modelId, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repository : update");
      throw error;
    }
  }

  async destroy(modelId) {
    try {
      await this.model.destroy({
        where: {
          id: modelId,
        },
      });
      return true;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repository : destroy");
      throw error;
    }
  }
}
