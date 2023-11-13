import PersonaModel from "../db/persona.ts";
import { Persona } from "../types.ts";

export default async (personas: Persona[]): Promise<boolean> => {
  const validPeople = await PersonaModel.find({ _id: { $in: personas } });
  return validPeople.length === personas.length;
};
