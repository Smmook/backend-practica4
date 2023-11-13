import mongoose from "mongoose";
import { Persona } from "../types.ts";
import setDocumentId from "../utils/setDocumentId.ts";
import PlanetaModel from "./planeta.ts";

const PersonaSchema = new mongoose.Schema<Persona>({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
});

PersonaSchema.set("toObject", { transform: setDocumentId });
PersonaSchema.set("toJSON", { transform: setDocumentId });

PersonaSchema.pre("findOneAndDelete", function (next) {
  const id = this.get("_id");
  PlanetaModel.updateMany({ personas: id }, { $pull: { personas: id } });
  next();
});

const PersonaModel = mongoose.model<Persona>("Persona", PersonaSchema);

export default PersonaModel;
