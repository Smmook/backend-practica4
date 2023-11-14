// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import comprobarDimensiones from "../utils/comprobarDimensiones.ts";
import TardisModel from "../db/tardis.ts";

export default async (req: Request, res: Response) => {
  const { dimensiones, camuflaje, timeLord, anio } = req.body;
  if (!dimensiones || !camuflaje || !timeLord || !anio) {
    return res.status(400).send("Falta algun campo");
  }
  try {
    if (!(await comprobarDimensiones(dimensiones))) {
      return res.status(400).send("Alguna dimension no es valida");
    }
    const created = await new TardisModel({
      dimensiones,
      camuflaje,
      timeLord,
      anio,
    }).save();
    res.status(201).send(created);
  } catch (error) {
    res.status(500).send();
  }
};
