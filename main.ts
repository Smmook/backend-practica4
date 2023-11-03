// @deno-types="npm:@types/express"
import express from "npm:express@4.18.2";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import mongoose from "npm:mongoose";
import getAllPersonas from "./resolvers/getAllPersonas.ts";
import addPersona from "./resolvers/addPersona.ts";
import logger from "./middlewares/logger.ts";
import getAllPlanetas from "./resolvers/getAllPlanetas.ts";
import addPlaneta from "./resolvers/addPlaneta.ts";

const env = await load();
const mongoUri = env.MONGO || Deno.env.get("MONGO");

if (!mongoUri) {
  console.log("No se ha encontrado uri de mongo");
  Deno.exit();
}

await mongoose.connect(mongoUri);

const app = express();

app.use(express.json());
app.use(logger);

app
  .get("/api/personas", getAllPersonas)
  .get("/api/planetas", getAllPlanetas)
  .post("/api/personas", addPersona)
  .post("/api/planetas", addPlaneta);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
