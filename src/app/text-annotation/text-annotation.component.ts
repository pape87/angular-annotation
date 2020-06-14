import { Component, OnInit, ViewChild } from "@angular/core";
import { TextDocumentService, TextDocument, Annotation } from "../services/text.service";
import rangy from "rangy/lib/rangy-core.js";
import "rangy/lib/rangy-highlighter";
import "rangy/lib/rangy-classapplier";
import "rangy/lib/rangy-textrange";
import "rangy/lib/rangy-serializer";

@Component({
  selector: "app-text-annotation",
  templateUrl: "./text-annotation.component.html",
  styleUrls: ["./text-annotation.component.scss"]
})
export class TextAnnotationComponent implements OnInit {

  constructor(private textDocumentService: TextDocumentService) { }

  public textDocuments: TextDocument[];
  public currentTextIndex = 0;
  public selectedEntity = "foo";

  ngOnInit(): void {
    this.textDocumentService.getText().subscribe((value) => {
      this.textDocuments = value;
    });
  }

  public addAnnotation() {
    const sel = rangy.getSelection();
    const container = document.getElementById("text-container");
    const r = sel.getRangeAt(0);
    const range = r.toCharacterRange(container);
    if (range.start === range.end) {
      return;
    }
    if (this.textDocuments[this.currentTextIndex].annotations === undefined) {
      this.textDocuments[this.currentTextIndex].annotations = [];
    } else if (this.textDocuments[this.currentTextIndex].annotations.some((a) =>
      (a.offset.start_char <= range.start && a.offset.end_char >= range.start) ||
      (a.offset.start_char <= range.end && a.offset.end_char >= range.end) ||
      (range.start <= a.offset.start_char && range.end >= a.offset.end_char))
    ) {
      return;
    }
    const offset = this.textDocuments[this.currentTextIndex].annotations
      .filter((x) => x.offset.start_char < range.start)
      .reduce((prev, curr) => {
        return prev + curr.type.length;
      }, 0);

    this.textDocuments[this.currentTextIndex].annotations = [...this.textDocuments[this.currentTextIndex].annotations, {
      offset: {
        start_char: range.start - offset,
        end_char: range.end - offset
      },
      type: "foo"
    } as Annotation];
  }

  public nextText() {
    this.currentTextIndex = this.currentTextIndex ? 0 : 1;
  }
}
