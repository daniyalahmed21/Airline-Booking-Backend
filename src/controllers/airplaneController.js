import { StatusCodes } from "http-status-codes";
import AirplaneService from "../services/airplaneService.js";
import { asyncHandler } from "../utils/errors/asyncHandler.js";

const airplaneService = new AirplaneService();

export const createAirplane = asyncHandler(async (req, res) => {
  const airplane = await airplaneService.createAirplane({
    modelNumber: req.body.modelNumber,
    capacity: req.body.capacity,
  });

  res.status(StatusCodes.CREATED).json({
    status: true,
    data: airplane,
    message: "Successfully created an airplane",
    error: { explanation: [] },
  });
});
