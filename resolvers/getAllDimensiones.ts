// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import DimensionModel from "../db/dimension.ts";

export default async (req: Request, res: Response) => {
  const dimensiones = await DimensionModel.find({}).populate({
    path: "planetas",
    populate: "personas",
  });
  res.send(dimensiones);
};
