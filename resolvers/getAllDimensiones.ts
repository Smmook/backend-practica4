// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2";
import DimensionModel from "../db/dimension.ts";

const getAllDimensiones = async (req: Request, res: Response) => {
  const dimensiones = await DimensionModel.find({}).populate({
    path: "planetas",
    populate: "personas",
  });

  res.send(dimensiones);
};

export default getAllDimensiones;
