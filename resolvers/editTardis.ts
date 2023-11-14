// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import TardisModel from "../db/tardis.ts";
import comprobarDimensiones from "../utils/comprobarDimensiones.ts";

export default async (req: Request, res: Response) => {
  const { dimensiones, camuflaje, timeLord, anio } = req.body;
  if (!dimensiones || !camuflaje || !timeLord || !anio) {
    return res.status(400).send("Falta algun campo");
  }
  const id = req.params.id;
  try {
    if (!(await comprobarDimensiones(dimensiones))) {
      return res.status(400).send("Alguna dimension no es valida");
    }
    const updated = await TardisModel.findByIdAndUpdate(id, {
      dimensiones,
      camuflaje,
      timeLord,
      anio,
    }, { new: true });
    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
