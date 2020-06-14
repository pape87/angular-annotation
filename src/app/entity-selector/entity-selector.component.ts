import { Component, OnInit } from "@angular/core";

import { EntityService, Entity } from "../services/entity.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AppState } from "../store/state";
import { setEntities, setSelectedEntity } from "../store/actions/entity.actions";

@Component({
  selector: "app-entity-selector",
  templateUrl: "./entity-selector.component.html",
  styleUrls: ["./entity-selector.component.scss"]
})
export class EntitySelectorComponent implements OnInit {

  public entities: Observable<string[]>;
  public selectedEntity: Observable<string>;

  constructor(private entityService: EntityService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.entityService.GetEntities().subscribe((value) => {
      this.store.dispatch(setEntities({ entities: value }));
      if (value) {

        this.store.dispatch(setSelectedEntity({ entity: value[0] }));
      }
    });

    this.entities = this.store.select((state) => state.entityState.entities);
    this.selectedEntity = this.store.select((state) => state.entityState.selectedEntity);
  }

  public selectionChanged(entity: Entity) {
    this.store.dispatch(setSelectedEntity({ entity }));
  }
}
