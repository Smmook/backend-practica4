// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2";
import PlanetaModel from "../db/planeta.ts";

const getAllPlanets = async (req: Request, res: Response) => {
  const plnts = await PlanetaModel.find({}).populate("personas");

  res.send(plnts);
};

export default getAllPlanets;
