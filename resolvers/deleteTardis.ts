// @deno-types="npm:@types/express"
import { Request, Response } from "express";
import TardisModel from "../db/tardis.ts";

export default async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleted = await TardisModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).send();
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
