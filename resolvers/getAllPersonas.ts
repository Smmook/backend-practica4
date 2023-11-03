// @deno-types="npm:@types/express"
import express, { NextFunction, Request, Response } from "npm:express@4.18.2";
import PersonaModel from "../db/persona.ts";

const getAllPersonas = async (req: Request, res: Response) => {
  const resultados = await PersonaModel.find({});

  res.send(resultados);
};

export default getAllPersonas;
