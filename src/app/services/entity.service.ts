import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

export type Entity = "ORG" | "PRODUCT" | "DATE" | "GPE" | "EVENT" | "TIME" | "LOC" | "PERSON";

@Injectable({
  providedIn: "root"
})
export class EntityService {

  constructor() { }

  public GetEntities(): Observable<Entity[]> {
    return of(["ORG", "PRODUCT", "DATE", "GPE", "EVENT", "TIME", "LOC", "PERSON"] as Entity[]).pipe(delay(10));
  }
}
