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

/**
 * Airport ↔ Flight (Departure)
 * We’re using Airport.code (STRING) instead of Airport.id (INTEGER)
 * constraints: false stops Sequelize from creating a DB-level FK
 */
Airport.hasMany(Flight, {
  foreignKey: "departureAirportId",
  sourceKey: "code",        // Airport.code
  as: "departingFlights",
});

Flight.belongsTo(Airport, {
  foreignKey: "departureAirportId",
  targetKey: "code",        // Airport.code
  as: "departureAirport",
});

/**
 * Airport ↔ Flight (Arrival)
 */
Airport.hasMany(Flight, {
  foreignKey: "arrivalAirportId",
  sourceKey: "code",
  as: "arrivingFlights",
});

Flight.belongsTo(Airport, {
  foreignKey: "arrivalAirportId",
  targetKey: "code",
  as: "arrivalAirport",
});

export { City, Airport, Airplane, Flight };
