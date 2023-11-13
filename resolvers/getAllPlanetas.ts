// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import PlanetaModel from "../db/planeta.ts";

export default async (req: Request, res: Response) => {
  const planetas = await PlanetaModel.find({}).populate("personas");

  res.send(planetas);
};
