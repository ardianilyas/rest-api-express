import "dotenv/config";
import express from "express"
import apiRoute from "./route";
import { errorHandler } from "./middlewares/error-handler";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Rest api endpoint"
  });
});

app.use("/api", apiRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});

export default app;
