import mongoose from "mongoose";
import { Dimension } from "../types.ts";
import setDocumentId from "../utils/setDocumentId.ts";
import TardisModel from "./tardis.ts";

const DimensionSchema = new mongoose.Schema<Dimension>({
  nombre: { type: String, req: true },
  planetas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Planeta",
    required: true,
  }],
});

DimensionSchema.set("toJSON", { transform: setDocumentId });
DimensionSchema.set("toObject", { transform: setDocumentId });

DimensionSchema.pre("findOneAndDelete", async function (next) {
  const id = this.get("_id");
  await TardisModel.updateMany({ dimensiones: id }, {
    $pull: { dimensiones: id },
  });
  next();
});

const DimensionModel = mongoose.model<Dimension>("Dimension", DimensionSchema);

export default DimensionModel;
