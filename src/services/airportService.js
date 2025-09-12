import { StatusCodes } from "http-status-codes";
import Repositories from "../repositories/index.js";
import AppError from "../utils/errors/appError.js";

export default class AirportService {
    constructor() {
        this.airportRepository = new Repositories.AirportRepository();
    }
    
    async createAirport(data) {
        return await this.airportRepository.create(data);
    }
    
    async getAirports() {
        const airports = await this.airportRepository.getAll();
        if (airports.length === 0) {
        throw new AppError(
            "Not able to find the resource ",
            StatusCodes.NOT_FOUND,
            ["No airports found"]
        );
        }
        return airports;
    }
    
    async getAirport(id) {
        const airport = await this.airportRepository.get(id);
        if (!airport) {
        throw new AppError(
            "Not able to find the resource ",
            StatusCodes.NOT_FOUND,
            [`Airport with id ${id} not found`]
        );
        }
        return airport;
    }
    
    async updateAirport(id, data) {
        const updated = await this.airportRepository.update(id, data);
        if (!updated[0]) {
        throw new AppError(
            "Not able to update the resource",
            StatusCodes.NOT_FOUND,
            [`Airport with id ${id} not found`]
        );
        }
        return updated;
    }
    
    async deleteAirport(id) {
        const deleted = await this.airportRepository.destroy(id);
        if (!deleted) {
        throw new AppError(
            "Not able to delete the resource",
            StatusCodes.NOT_FOUND,
            [`Airport with id ${id} not found`]
        );
        }
        return true;
    }
}

