import City from "./city.js";
import Airport from "./airport.js";
import Airplane from "./airplane.js";

// City ↔ Airport
City.hasMany(Airport, { foreignKey: "cityId", as: "airports" });
Airport.belongsTo(City, { foreignKey: "cityId", as: "city" });


export { City, Airport, Airplane };