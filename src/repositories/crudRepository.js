const { logger } = require("../config/loggerConfig.js");

class CrudRepository {
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

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      logger.error("Something went wrong in the Crud Repository : create");
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
