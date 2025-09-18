import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.js";
import { SEAT_TYPE } from "../utils/enums.js";

export class Seat extends Model {}

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
      defaultValue: SEAT_TYPE.ECONOMY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Seat",
    tableName: "Seats",
    timestamps: true,
  }
);

export default Seat;
