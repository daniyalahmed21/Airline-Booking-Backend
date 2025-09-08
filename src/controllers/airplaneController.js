import AirplaneService from "../services/airplaneService";

const { StatusCodes } = require("http-status-codes");

export async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    res.status(StatusCodes.CREATED).json({
      status: "success",
      data: airplane,
      message: "Successfully created an airplane",
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: "false",
      data: {},
      message: "Something went wrong while creating an airplane",
      error: error,
    });
  }
}
