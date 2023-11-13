import mongoose from "mongoose";
import { Dimension } from "../types.ts";
import setDocumentId from "../utils/setDocumentId.ts";

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

const DimensionModel = mongoose.model<Dimension>("Dimension", DimensionSchema);

export default DimensionModel;
