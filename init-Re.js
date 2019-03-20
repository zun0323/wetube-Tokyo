import "./db-Re";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

import app from "./app";

const port = process.env.PORT;

const handleListening = () =>
  console.log(`✅  Listening on : http://localhost:${port}`);

app.listen(port, handleListening);
