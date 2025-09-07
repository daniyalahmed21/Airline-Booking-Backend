import Express from "express";
import { SERVER_CONFIG } from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
import logger from "./config/loggerConfig.js";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  logger.info("Home route accessed");
  res.send("Hello World!");
});

app.use("/api", apiRouter)

app.listen(SERVER_CONFIG.PORT, () => {
  console.log(`Server is running on port ${SERVER_CONFIG.PORT}`);
});
