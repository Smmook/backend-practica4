// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import PlanetaModel from "../db/planeta.ts";

export default async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleted = await PlanetaModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).send();
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
