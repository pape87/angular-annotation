import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EntityService {

  constructor() { }

  public GetEntities(): Observable<string[]> {
    return of(["ORG", "PRODUCT", "DATE", "GPE", "EVENT", "TIME", "LOC", "PERSON"] as string[]).pipe(delay(10));
  }
}
