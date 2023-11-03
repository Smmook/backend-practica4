// @deno-types="npm:@types/express"
import express, { NextFunction, Request, Response } from "npm:express@4.18.2";
import PersonaModel from "../db/persona.ts";

const addPersona = async (req: Request, res: Response) => {
  const persona = req.body;
  try {
    const saved = await new PersonaModel(persona).save();
    res.status(201).send(saved);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default addPersona;
