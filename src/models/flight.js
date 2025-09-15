import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.js";

export class Flight extends Model {}

Flight.init(
  {
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Airplanes",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    departureAirportId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Airports",
        key: "code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    arrivalAirportId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Airports",
        key: "code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    arrivalDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boardingDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Flight",
    tableName: "Flights",
  }
);

export default Flight;
