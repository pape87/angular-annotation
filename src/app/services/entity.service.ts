import { Injectable } from "@angular/core";

export type Entity = "ORG" | "PRODUCT" | "DATE" | "GPE" | "EVENT" | "TIME" | "LOC" | "PERSON";

@Injectable({
  providedIn: "root"
})
export class EntityService {

  constructor() { }

  public GetEntities(): Promise<Entity[]> {
    return new Promise(() => ["ORG", "PRODUCT", "DATE", "GPE", "EVENT", "TIME", "LOC", "PERSON"]);
  }
}
