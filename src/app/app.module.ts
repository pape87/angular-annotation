import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EntitySelectorComponent } from "./entity-selector/entity-selector.component";
import { TextAnnotationComponent } from "./text-annotation/text-annotation.component";
import { HighlightRangePipe } from "./pipes/highlight-range.pipe";

@NgModule({
  declarations: [
    AppComponent,
    EntitySelectorComponent,
    TextAnnotationComponent,
    HighlightRangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
