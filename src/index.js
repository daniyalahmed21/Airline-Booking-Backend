import Express from "express";
import { SERVER_CONFIG } from "./configs/serverConfig.js";
import apiRouter from "./routes/index.js";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRouter)

app.listen(SERVER_CONFIG.PORT, () => {
  console.log(`Server is running on port ${SERVER_CONFIG.PORT}`);
});
