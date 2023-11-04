// @deno-types="npm:@types/express"
import express from "npm:express@4.18.2";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import mongoose from "npm:mongoose";
import getAllPersonas from "./resolvers/getAllPersonas.ts";
import getAllPlanets from "./resolvers/getAllPlanets.ts";
import addPlanet from "./resolvers/addPlanet.ts";
import getAllDimensiones from "./resolvers/getAllDimensiones.ts";
import addDimension from "./resolvers/addDimension.ts";

const env = await load();
const mongoUri = env.MONGO || Deno.env.get("MONGO");
if (!mongoUri) {
  console.log("No se ha podido obtener la uri de mongo");
  Deno.exit();
}

await mongoose.connect(mongoUri);

const app = express();

app.use(express.json());

app
  .get("/api/personas", getAllPersonas)
  .get("/api/planetas", getAllPlanets)
  .get("/api/dimensiones", getAllDimensiones)
  .post("/api/planetas", addPlanet)
  .post("/api/dimensiones", addDimension);

app.listen(8080, () => {
  console.log("Server running");
});
