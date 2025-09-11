import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.js";

export class Airplane extends Model {}

Airplane.init(
  {
    modelNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Airplane",
    tableName: "Airplanes",
  }
);

export default Airplane;
