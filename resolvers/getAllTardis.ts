// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import TardisModel from "../db/tardis.ts";

export default async (req: Request, res: Response) => {
  try {
    const tardis = await TardisModel.find({}).populate({
      path: "dimensiones",
      populate: { path: "planetas", populate: "personas" },
    });
    res.status(200).send(tardis);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
