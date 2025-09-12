import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/sequelize.js'; // <- adjust path to your sequelize instance

class Flight extends Model {}

Flight.init(
  {
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    departureAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    arrivalAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      type: DataTypes.STRING, // optional field
      allowNull: true,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Flight',
    tableName: 'Flights', // must match your migration table
  }
);

export default Flight;
