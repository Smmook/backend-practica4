import DimensionModel from "../db/dimension.ts";
import { Dimension } from "../types.ts";

export default async (dimensiones: Dimension[]): Promise<boolean> => {
  const validDimensions = await DimensionModel.find({
    _id: { $in: dimensiones },
  });
  return validDimensions.length === dimensiones.length;
};
