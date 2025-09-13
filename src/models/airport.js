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
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Cities",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Airport",
    tableName: "Airports",
  }
);

Airport.belongsTo(City, { foreignKey: "cityId", as: "city" });

export default Airport;
