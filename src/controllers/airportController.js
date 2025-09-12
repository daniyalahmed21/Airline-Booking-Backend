import { StatusCodes } from "http-status-codes";
import Services from "../services/index.js";    
import { asyncHandler } from "../utils/errors/asyncHandler.js";
import { sendSuccess } from "../utils/responseHandler.js";

const airportService = new Services.AirportService();

export const createAirport = asyncHandler(async (req, res) => {
  const airport = await airportService.createAirport({
    name: req.body.name,
    code: req.body.code,
    address: req.body.address,
    cityId: req.body.cityId,
  });
  sendSuccess(res, airport, "Successfully created an airport", StatusCodes.CREATED);
});

export const getAirports = asyncHandler(async (req, res) => {
  const airports = await airportService.getAirports();
  sendSuccess(res, airports, "Successfully fetched all airports");
});

export const getAirport = asyncHandler(async (req, res) => {
  const airport = await airportService.getAirport(req.params.id);
  sendSuccess(res, airport, "Successfully fetched the airport");
});

export const updateAirport = asyncHandler(async (req, res) => {
  const airport = await airportService.updateAirport(req.params.id, {
    name: req.body.name,
    code: req.body.code,
    address: req.body.address,
    cityId: req.body.cityId,
  });
  sendSuccess(res, airport, "Successfully updated the airport");
});

export const deleteAirport = asyncHandler(async (req, res) => {
  await airportService.deleteAirport(req.params.id);
  sendSuccess(res, null, "Successfully deleted the airport");
});



