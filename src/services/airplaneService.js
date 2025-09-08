import AirplaneRepository from "../repositories/airplaneRepository.js";


const airplaneRepository = new AirplaneRepository()

export default class AirplaneService { 
    async createAirplane(data) {
        try {
            const airplane = await airplaneRepository.create(data)
            return airplane
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error
        }
    }

    async getAirplanes() {
        try {
            const airplanes = await airplaneRepository.getAll()
            return airplanes
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error
        }
    }

    async getAirplane(id) {
        try {
            const airplane = await airplaneRepository.get(id)
            return airplane
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error
        }
    }

    async updateAirplane(id, data) {
        try {
            const airplane = await airplaneRepository.update(id, data)
            return airplane
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error
        }
    }

    async deleteAirplane(id) {
        try {
            const response = await airplaneRepository.delete(id)
            return response
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error
        }
    }
}