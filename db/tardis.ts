import { Tardis } from "../types.ts";
import mongoose from "mongoose";
import setDocumentId from "../utils/setDocumentId.ts";

const TardisSchema = new mongoose.Schema<Tardis>({
  dimensiones: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Dimension",
  }],
  camuflaje: { type: Number, required: true },
  timeLord: { type: Number, required: true },
  anio: { type: Number, required: true },
});

TardisSchema.set("toJSON", { transform: setDocumentId });
TardisSchema.set("toObject", { transform: setDocumentId });

const TardisModel = mongoose.model<Tardis>("Tardis", TardisSchema);

export default TardisModel;
