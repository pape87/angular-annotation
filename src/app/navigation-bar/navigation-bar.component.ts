import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../store/state";
import { setSelectedTextDocument } from "../store/actions/text-document.actions";
import { TextDocument } from "../services/text.service";
import { AnnotationService } from "../services/annotation.service";

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.scss"]
})
export class NavigationBarComponent implements OnInit {
  private selectedTextDocument: TextDocument;

  constructor(private store: Store<AppState>, private annotationService: AnnotationService) { }

  ngOnInit(): void {
    this.store.select((state) => state.textDocumentState.selectedTextDocument).pipe().subscribe((data) => this.selectedTextDocument = data);
  }

  public async save() {
    await this.annotationService.saveAnnotations(
      { doc_id: this.selectedTextDocument.doc_id, annotations: this.selectedTextDocument.annotations }
    );
  }

  public next() {
    this.store.dispatch(setSelectedTextDocument({ id: this.selectedTextDocument.doc_id === 0 ? 1 : 0 }));
  }
}
