// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import DimensionModel from "../db/dimension.ts";

export default async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const dimension = await DimensionModel.findById(id);
    if (!dimension) {
      return res.status(404).send();
    }
    res.send(
      await dimension.populate({ path: "planetas", populate: "personas" }),
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};
