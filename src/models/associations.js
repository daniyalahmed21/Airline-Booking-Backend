import City from "./city.js";
import Airport from "./airport.js";
import Airplane from "./airplane.js";
import Flight from "./flight.js";

// City ↔ Airport
City.hasMany(Airport, { foreignKey: "cityId", as: "airports" });
Airport.belongsTo(City, { foreignKey: "cityId", as: "city" });

// Airplane ↔ Flight
Airplane.hasMany(Flight, { foreignKey: "airplaneId", as: "flights" });
Flight.belongsTo(Airplane, { foreignKey: "airplaneId", as: "airplane" });

// Airport ↔ Flight (Departure)
Airport.hasMany(Flight, { foreignKey: "departureAirportId", as: "departingFlights" });
Flight.belongsTo(Airport, { foreignKey: "departureAirportId", as: "departureAirport" });

// Airport ↔ Flight (Arrival)
Airport.hasMany(Flight, { foreignKey: "arrivalAirportId", as: "arrivingFlights" });
Flight.belongsTo(Airport, { foreignKey: "arrivalAirportId", as: "arrivalAirport" });



export { City, Airport, Airplane, Flight };
