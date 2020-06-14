import { Injectable } from "@angular/core";
import { Annotation } from "./text.service";

@Injectable({
  providedIn: "root"
})
export class AnnotationService {

  constructor() { }

  public async saveAnnotations(props: { doc_id: number, annotations: Annotation[] }) {
    console.log("POST: ", props);
  }
}
