// @deno-types="npm:@types/express"
import express, { NextFunction, Request, Response } from "npm:express@4.18.2";
import PlanetaModel from "../db/planeta.ts";
import PersonaModel from "../db/persona.ts";

const addPlaneta = async (req: Request, res: Response) => {
  const { nombre, personas } = req.body;
  try {
    const pers = await PersonaModel.find({ _id: { $in: personas } });
    if (pers.length !== personas.length) {
      res.status(400).send("Error. Alguna persona no es valida");
    }
    const saved = await new PlanetaModel({ nombre, personas }).save();
    res.status(201).send(saved);
  } catch (error) {
    res.status(400).send({ [error.name]: error.message });
  }
};

export default addPlaneta;
