
import { createReducer, on, Action } from "@ngrx/store";
import * as TextDocumentActions from "../actions/text-document.actions";
import { TextDocumentState, INITIAL_TEXT_DOCUMENT_STATE } from "../state";

const reducer = createReducer<TextDocumentState>(
  INITIAL_TEXT_DOCUMENT_STATE,
  on(TextDocumentActions.setTextDocuments, (state, props) => ({ ...state, textDocuments: props.textDocuments })),
  on(TextDocumentActions.setSelectedTextDocument, (state, props) =>
    ({ ...state, selectedTextDocument: state.textDocuments.find((x) => x.doc_id === props.id) })
  ),
  on(TextDocumentActions.addTextDocumentAnnotation, (state, props) => ({
    ...state, textDocuments: state.textDocuments.map((x) =>
      x.doc_id === props.id ? ({ ...x, annotations: [...x.annotations, props.annotation] }) : x)
  })),
);

export function textDocumentReducer(state: TextDocumentState, action: Action) {
  return reducer(state, action);
}
