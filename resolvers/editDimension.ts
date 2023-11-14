// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import comprobarPlanetas from "../utils/comprobarPlanetas.ts";
import DimensionModel from "../db/dimension.ts";

export default async (req: Request, res: Response) => {
  const { nombre, planetas } = req.body;
  if (!nombre || !planetas) {
    return res.status(400).send();
  }
  const id = req.params.id;

  try {
    if (!(await comprobarPlanetas(planetas))) {
      return res.status(400).send("Algun planeta no es valido.");
    }
    const updated = DimensionModel.findByIdAndUpdate(id, { nombre, planetas }, {
      new: true,
    });
    if (!updated) {
      return res.status(404).send();
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
