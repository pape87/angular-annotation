import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

export type Annotation = {
  type: string,
  offset: {
    start_char: number,
    end_char: number
  }
};

export type TextDocument = {
  doc_id: number;
  source: string;
  text: string;
  annotations: Annotation[];
};

@Injectable({
  providedIn: "root"
})
export class TextDocumentService {

  constructor() { }

  public getText(): Observable<TextDocument[]> {
    return of([
      { text: "Steve Jobs: He Brought the Show to Business", source: "The New York Times", doc_id: 0, annotations: [] },
      { text: "Silicon Valley's Youth Problem", source: "The New York Times", doc_id: 1, annotations: [] }
    ] as TextDocument[]).pipe(delay(10));
  }
}
