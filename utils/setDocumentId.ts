import { Document } from "mongoose";

export default (_document: Document, current: Record<string, string>) => {
  current.id = current._id;
  delete current._id;
  delete current.__v;
};
