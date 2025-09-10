import { StatusCodes } from "http-status-codes";
import Services from "../services/index.js";
import { asyncHandler } from "../utils/errors/asyncHandler.js";
import { sendSuccess } from "../utils/responseHandler.js";

const airplaneService = new Services.AirplaneService();

export const createAirplane = asyncHandler(async (req, res) => {
  const airplane = await airplaneService.createAirplane({
    modelNumber: req.body.modelNumber,
    capacity: req.body.capacity,
  });
  sendSuccess(res, airplane, "Successfully created an airplane", StatusCodes.CREATED);
});

export const getAirplanes = asyncHandler(async (req, res) => {
  const airplanes = await airplaneService.getAirplanes();
  sendSuccess(res, airplanes, "Successfully fetched all airplanes");
});

export const getAirplane = asyncHandler(async (req, res) => {
  const airplane = await airplaneService.getAirplane(req.params.id);
  sendSuccess(res, airplane, "Successfully fetched the airplane");
});

export const updateAirplane = asyncHandler(async (req, res) => {
  const airplane = await airplaneService.updateAirplane(req.params.id, {
    modelNumber: req.body.modelNumber,
    capacity: req.body.capacity,
  });
  sendSuccess(res, airplane, "Successfully updated the airplane");
});

export const deleteAirplane = asyncHandler(async (req, res) => {
  await airplaneService.deleteAirplane(req.params.id);
  sendSuccess(res, null, "Successfully deleted the airplane");
});
