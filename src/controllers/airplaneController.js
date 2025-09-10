import { StatusCodes } from "http-status-codes";
import Services from "../services/index.js";
import { asyncHandler } from "../utils/errors/asyncHandler.js";

const airplaneService = new Services.AirplaneService();

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

export const getAirplanes = asyncHandler(async (req, res) => {
  const airplanes = await airplaneService.getAirplanes();
  res.status(StatusCodes.OK).json({
    status: true,
    data: airplanes,
    message: "Successfully fetched all airplanes",
    error: { explanation: [] },
  });
});
