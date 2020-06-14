import { createAction, props } from "@ngrx/store";
import { TextDocument, Annotation } from "src/app/services/text.service";

export const setTextDocuments = createAction("setTextDocuments", props<{ textDocuments: TextDocument[] }>());
export const setSelectedTextDocument = createAction("setSelectedTextDocument", props<{ id: number }>());
export const addTextDocumentAnnotation = createAction("addTextDocumentAnnotation", props<{ annotation: Annotation, id: number }>());
