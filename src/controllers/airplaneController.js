import { StatusCodes } from "http-status-codes";
import Services from "../services/index.js";
import { asyncHandler } from "../utils/errors/asyncHandler.js";
import e from "express";

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

export const getAirplane = asyncHandler(async (req, res) => {
  const airplane = await airplaneService.getAirplane(req.params.id);
  res.status(StatusCodes.OK).json({
    status: true,
    data: airplane,
    message: "Successfully fetched the airplane",
    error: { explanation: [] },
  });
});

export const updateAirplane = asyncHandler(async (req, res) => {
  const airplane = await airplaneService.updateAirplane(req.params.id, {
    modelNumber: req.body.modelNumber,
    capacity: req.body.capacity,
  });
  res.status(StatusCodes.OK).json({
    status: true,
    data: airplane,
    message: "Successfully updated the airplane",
    error: { explanation: [] },
  });
});

export const deleteAirplane = asyncHandler(async (req, res) => {
  await airplaneService.deleteAirplane(req.params.id);
  res.status(StatusCodes.OK).json({
    status: true,
    data: null,
    message: "Successfully deleted the airplane",
    error: { explanation: [] },
  });
});
