import { TextDocument } from "../services/text.service";

export interface TextDocumentState {
  textDocuments: TextDocument[];
  selectedTextDocument?: TextDocument;
}

export interface EntityState {
  entities: string[];
  selectedEntity?: string;
}

export interface AppState {
  entityState: EntityState;
  textDocumentState: TextDocumentState;
}

export const INITIAL_ENTITY_STATE: EntityState = {
  entities: []
};

export const INITIAL_TEXT_DOCUMENT_STATE: TextDocumentState = {
  textDocuments: []
};


export const INITIAL_STATE: AppState = {
  entityState: INITIAL_ENTITY_STATE,
  textDocumentState: {
    textDocuments: []
  } as TextDocumentState
};
