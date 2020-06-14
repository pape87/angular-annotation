import { createAction, props } from "@ngrx/store";

export const setEntities = createAction("setEntities", props<{ entities: string[] }>());
export const setSelectedEntity = createAction("setSelectedEntity", props<{ entity: string }>());
