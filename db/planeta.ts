import mongoose from "mongoose";
import { Planeta } from "../types.ts";
import setDocumentId from "../utils/setDocumentId.ts";
import DimensionModel from "./dimension.ts";

const PlanetaSchema = new mongoose.Schema<Planeta>({
  nombre: { type: String, required: true },
  personas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Persona" }],
});

PlanetaSchema.set("toJSON", { transform: setDocumentId });
PlanetaSchema.set("toObject", { transform: setDocumentId });

PlanetaSchema.pre("findOneAndDelete", async function (next) {
  const id = this.get("_id");
  await DimensionModel.updateMany({ planetas: id }, {
    $pull: { planetas: id },
  });
  next();
});

const PlanetaModel = mongoose.model<Planeta>("Planeta", PlanetaSchema);

export default PlanetaModel;
