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

PersonaSchema.pre("findOneAndDelete", async function (next) {
  const id = this.get("_id");
  // Actualizamos los planetas para eliminar la ref a la persona borrada
  // $pull retira del array personas las que coincidan con id
  await PlanetaModel.updateMany({ personas: id }, { $pull: { personas: id } });
  next();
});

const PersonaModel = mongoose.model<Persona>("Persona", PersonaSchema);

export default PersonaModel;
