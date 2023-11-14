// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import TardisModel from "../db/tardis.ts";

export default async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const tardis = await TardisModel.findById(id).populate({
      path: "dimensiones",
      populate: { path: "planetas", populate: "personas" },
    });
    if (!tardis) {
      return res.status(404).send();
    }
    res.send(tardis);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
