import { model, Schema } from "mongoose";
import { Dimension } from "../types.ts";
import setDocumentId from "../utils/setDocumentId.ts";

const DimensionSchema = new Schema<Dimension>({
  nombre: { type: String, required: true },
  planetas: [
    { type: Schema.Types.ObjectId, ref: "Planeta" },
  ],
});

DimensionSchema.set("toJSON", {
  transform: setDocumentId,
});

const DimensionModel = model<Dimension>("Dimension", DimensionSchema);

export default DimensionModel;
