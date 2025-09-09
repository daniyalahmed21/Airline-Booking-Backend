import { Sequelize, DataTypes, Model } from "sequelize";
import { SERVER_CONFIG } from "../config/serverConfig.js";

const sequelize = new Sequelize(
  SERVER_CONFIG.DB.NAME,
  SERVER_CONFIG.DB.USER,
  SERVER_CONFIG.DB.PASS,
  {
    host: SERVER_CONFIG.DB.HOST,
    dialect: SERVER_CONFIG.DB.DIALECT,
  }
);

export class Airplane extends Model {
  // You can add custom methods or getters/setters here if needed
  
}

Airplane.init(
  {
    modelNumber: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Airplane",
    tableName: "Airplane",
  }
);

(async () => {
  await sequelize.sync({ force: false });
  console.log("Database synced!");
})();

export default Airplane;
