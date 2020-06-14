
import { createReducer, on, Action } from "@ngrx/store";
import * as EntityActions from "../actions/entity.actions";
import { EntityState, INITIAL_ENTITY_STATE } from "../state";

const reducer = createReducer<EntityState>(
  INITIAL_ENTITY_STATE,
  on(EntityActions.setEntities, (state, props) => ({ ...state, entities: props.entities })),
  on(EntityActions.setSelectedEntity, (state, props) => ({ ...state, selectedEntity: props.entity }))
);

export function entityReducer(state: EntityState, action: Action) {
  return reducer(state, action);
}
