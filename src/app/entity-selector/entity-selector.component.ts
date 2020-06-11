import { Component, OnInit } from "@angular/core";

import { EntityService, Entity } from "../services/entity.service";

@Component({
  selector: "app-entity-selector",
  templateUrl: "./entity-selector.component.html",
  styleUrls: ["./entity-selector.component.scss"]
})
export class EntitySelectorComponent implements OnInit {

  public entities: Entity[] = [];
  public selectedEntity: Entity;

  constructor(private entityService: EntityService) {
  }

  ngOnInit(): void {
    this.entityService.GetEntities().subscribe((value) => {
      this.entities = value;
    });
  }

  public selectionChanged(entity: Entity){
    this.selectedEntity = entity;
  }
}
