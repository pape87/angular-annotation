import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";

import rangy from "rangy/lib/rangy-core.js";
import "rangy/lib/rangy-highlighter";
import "rangy/lib/rangy-classapplier";
import "rangy/lib/rangy-textrange";
import "rangy/lib/rangy-serializer";

import { TextDocumentService, TextDocument, Annotation } from "../services/text.service";
import { AppState } from "../store/state";
import { setTextDocuments, setSelectedTextDocument, addTextDocumentAnnotation } from "../store/actions/text-document.actions";

@Component({
  selector: "app-text-annotation",
  templateUrl: "./text-annotation.component.html",
  styleUrls: ["./text-annotation.component.scss"]
})
export class TextAnnotationComponent implements OnInit {

  constructor(private textDocumentService: TextDocumentService, private store: Store<AppState>) { }

  public textDocuments: TextDocument[];
  public selectedTextDocument: TextDocument;
  public selectedEntity: string;
  public currentTextIndex = 0;

  ngOnInit(): void {
    this.textDocumentService.getText().subscribe((value) => {
      this.store.dispatch(setTextDocuments({ textDocuments: value }));
      this.store.dispatch(setSelectedTextDocument({ id: value[0].doc_id }));
    });
    this.store.select((state) => state.entityState.selectedEntity).pipe().subscribe((data) => this.selectedEntity = data);
    this.store.select((state) => state.textDocumentState.textDocuments).pipe().subscribe((data) => this.textDocuments = data);
    this.store.select((state) => state.textDocumentState.selectedTextDocument).pipe().subscribe((data) => this.selectedTextDocument = data);
  }

  public addAnnotation() {
    const sel = rangy.getSelection();
    const container = document.getElementById("text-container");
    const r = sel.getRangeAt(0);
    const range = r.toCharacterRange(container);
    if (range.start === range.end) {
      return;
    }
    if (this.selectedTextDocument.annotations === undefined) {
      this.selectedTextDocument.annotations = [];
    } else if (this.selectedTextDocument.annotations.some((a) =>
      (a.offset.start_char <= range.start && a.offset.end_char >= range.start) ||
      (a.offset.start_char <= range.end && a.offset.end_char >= range.end) ||
      (range.start <= a.offset.start_char && range.end >= a.offset.end_char))
    ) {
      return;
    }
    const offset = this.selectedTextDocument.annotations
      .filter((x) => x.offset.start_char < range.start)
      .reduce((prev, curr) => {
        return prev + curr.type.length;
      }, 0);

    this.store.dispatch(addTextDocumentAnnotation({
      annotation: {
        offset: {
          start_char: range.start - offset,
          end_char: range.end - offset
        },
        type: this.selectedEntity
      } as Annotation,
      id: this.selectedTextDocument.doc_id
    }));
    this.store.dispatch(setSelectedTextDocument({ id: this.selectedTextDocument.doc_id }));
  }
}
