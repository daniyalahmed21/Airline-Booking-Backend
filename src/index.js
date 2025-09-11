import Express from "express";
import { SERVER_CONFIG } from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
import Middlewares from "./middlewares/index.js";
import { sequelize } from "./config/sequelize.js";

// import models to ensure they’re registered
import "./models/associations.js";
import { City } from "./models/associations.js";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use(Middlewares.errorHandler);

app.listen(SERVER_CONFIG.PORT, async () => {
  console.log(`Server running on port ${SERVER_CONFIG.PORT}`);
  await sequelize.sync({ alter: true }); // or { force: false }
  console.log("✅ Database synced");

  // example insert
  const city = await City.findByPk(1);
  const airport = await city.createAirport({
    name: "Test Airport",
    code: "TST",
    cityId: city.id
  });

  console.log("Inserted airport:", airport.toJSON());

});
