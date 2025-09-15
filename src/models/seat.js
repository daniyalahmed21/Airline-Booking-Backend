import { DataTypes, Model } from "sequelize";
import { SEAT_TYPE } from "../utils/enums.js";  // adjust path to your enums file
import { sequelize } from "../config/sequelize.js";

class Seat extends Model {}

Seat.init(
  {
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(...Object.values(SEAT_TYPE)),
      allowNull: false,
      defaultValue: SEAT_TYPE.ECONOMY,
    },
  },
  {
    sequelize,
    modelName: "Seat",
    tableName: "Seats", // important for Sequelize CLI migrations
    timestamps: true,   // automatically adds createdAt and updatedAt
  }
);

export default Seat;
