import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.js";
import City from "./city.js";

export class Airport extends Model {}

Airport.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Airport",
    tableName: "Airports",
  }
);

export default Airport;
