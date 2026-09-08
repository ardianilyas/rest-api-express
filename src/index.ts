import "dotenv/config";
import express from "express"

const PORT = 3000;
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});

export default app;
