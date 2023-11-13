import mongoose from "mongoose";
import { Planeta } from "../types.ts";
import setDocumentId from "../utils/setDocumentId.ts";

const PlanetaSchema = new mongoose.Schema<Planeta>({
  nombre: { type: String, required: true },
  personas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Persona" }],
});

PlanetaSchema.set("toJSON", { transform: setDocumentId });
PlanetaSchema.set("toObject", { transform: setDocumentId });

const PlanetaModel = mongoose.model<Planeta>("Planeta", PlanetaSchema);

export default PlanetaModel;
