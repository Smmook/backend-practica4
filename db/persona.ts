import mongoose from "npm:mongoose";
import { Persona } from "../types.ts";
import setDocumentId from "../utils/setDocumentId.ts";

const PersonaSchema = new mongoose.Schema<Persona>({
  nombre: { type: String, required: true },
  edad: { type: Number, reqiored: true },
});

PersonaSchema.set("toJSON", {
  transform: setDocumentId,
});

const PersonaModel = mongoose.model<Persona>("Persona", PersonaSchema);

export default PersonaModel;
