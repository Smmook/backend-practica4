import mongoose from "npm:mongoose";
import { Planeta } from "../types.ts";

const PlanetaSchema = new mongoose.Schema<Planeta>({
  nombre: { type: String, required: true },
  personas: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Persona" },
  ],
});

PlanetaSchema.set("toJSON", {
  "transform": (document, planeta) => {
    planeta.id = planeta._id;
    delete planeta._id;
    delete planeta.__v;
  },
});

const PlanetaModel = mongoose.model<Planeta>("Planeta", PlanetaSchema);

export default PlanetaModel;
