import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TreeModule } from "./tree/tree.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
