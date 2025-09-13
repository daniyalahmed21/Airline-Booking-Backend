import AppError from "../utils/errors/appError.js";
import { StatusCodes } from "http-status-codes";
import Repositories from "../repositories/index.js";

export default class FlightService {
  constructor() {
    this.flightRepository = new Repositories.FlightRepository();
  }

  async createFlight(data) {
    return await this.flightRepository.create(data);
  }

  async getFlights() {
    return await this.flightRepository.getAll();
  }

  async getFilteredFlights(filterData) {
    
    let customFilter = {};
    if (filterData.arrivalAirportId) {
      customFilter.arrivalAirportId = filterData.arrivalAirportId;
    }
    if (filterData.departureAirportId) {
      customFilter.departureAirportId = filterData.departureAirportId;
    }
    return await this.flightRepository.getAllFlights(customFilter);
  }

  async getFlight(id) {
    const flight = await this.flightRepository.get(id);
    if (!flight) {
      throw new AppError(
        `Flight with id ${id} not found`,
        StatusCodes.NOT_FOUND
      );
    }
    return flight;
  }

  async updateFlight(id, data) {
    const [updated] = await this.flightRepository.update(id, data);
    if (!updated) {
      throw new AppError(
        `Flight with id ${id} not found`,
        StatusCodes.NOT_FOUND
      );
    }
    return updated;
  }

  async deleteFlight(id) {
    const deleted = await this.flightRepository.destroy(id);
    if (!deleted) {
      throw new AppError(
        `Flight with id ${id} not found`,
        StatusCodes.NOT_FOUND
      );
    }
    return true;
  }
}
