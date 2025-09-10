import { StatusCodes } from "http-status-codes";
import CityService from "../services/cityService.js";
import { asyncHandler } from "../utils/errors/asyncHandler.js";
import { sendSuccess } from "../utils/responseHandler.js";

const cityService = new CityService();

export const createCity = asyncHandler(async (req, res) => {
  const city = await cityService.createCity({ name: req.body.name });
  sendSuccess(res, city, "City created successfully", StatusCodes.CREATED);
});

export const getCities = asyncHandler(async (req, res) => {
  const cities = await cityService.getCities();
  sendSuccess(res, cities, "All cities fetched successfully");
});

export const getCity = asyncHandler(async (req, res) => {
  const city = await cityService.getCity(req.params.id);
  sendSuccess(res, city, "City fetched successfully");
});

export const updateCity = asyncHandler(async (req, res) => {
  await cityService.updateCity(req.params.id, { name: req.body.name });
  sendSuccess(res, null, "City updated successfully");
});

export const deleteCity = asyncHandler(async (req, res) => {
  await cityService.deleteCity(req.params.id);
  sendSuccess(res, null, "City deleted successfully");
});
