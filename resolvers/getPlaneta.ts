// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import PlanetaModel from "../db/planeta.ts";

export default async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const planeta = await PlanetaModel.findById(id);
    if (!planeta) {
      return res.status(404).send();
    }

    res.send(await planeta.populate("personas"));
  } catch (error) {
    res.status(400).send(error.message);
  }
};
