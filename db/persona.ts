import mongoose from "npm:mongoose";
import { Persona } from "../types.ts";

const personaSchema = new mongoose.Schema<Persona>({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
});

personaSchema.set("toJSON", {
  transform: (documento, persona) => {
    persona.id = persona._id;
    delete persona._id;
    delete persona.__v;
  },
});

export default mongoose.model<Persona>("Persona", personaSchema);
