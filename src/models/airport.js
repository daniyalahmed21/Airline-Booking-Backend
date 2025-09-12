import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.js";

export class Airport extends Model {}

Airport.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      unique: true,
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
