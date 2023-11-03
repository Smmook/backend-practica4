// @deno-types="npm:@types/express"
import express, { NextFunction, Request, Response } from "npm:express@4.18.2";
import mongoose from "npm:mongoose";
import PlanetaModel from "../db/planeta.ts";

const getAllPlanetas = async (req: Request, res: Response) => {
  const planetas = await PlanetaModel.find({}).populate("personas");
  res.send(planetas);
};

export default getAllPlanetas;
