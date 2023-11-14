import PlanetaModel from "../db/planeta.ts";
import { Planeta } from "../types.ts";

export default async (planetas: Planeta[]): Promise<boolean> => {
  const validPlanets = await PlanetaModel.find({ _id: { $in: planetas } });
  return validPlanets.length === planetas.length;
};
