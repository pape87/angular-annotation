import { entityReducer } from "./entity.reducer";
import { textDocumentReducer } from "./text-document.reducer";

export const rootReducer = {
  entityState: entityReducer,
  textDocumentState: textDocumentReducer
};
