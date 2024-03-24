import express from "express";
import { APP_PORT } from "./config";
const app = express();

import routes from "./routes";
import { errorHandler } from "./middlewares";

app.use(express.json());
app.use("/api", routes);

app.use(errorHandler);
app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));
