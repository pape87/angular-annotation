import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EntitySelectorComponent } from "./entity-selector/entity-selector.component";
import { TextAnnotationComponent } from "./text-annotation/text-annotation.component";
import { HighlightRangePipe } from "./pipes/highlight-range.pipe";
import { rootReducer } from "./store/reducers/root.reducer";
import { env } from "process";

@NgModule({
  declarations: [
    AppComponent,
    EntitySelectorComponent,
    TextAnnotationComponent,
    HighlightRangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
