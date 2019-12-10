import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";
import { DataService } from './data.service';
import { HttpClientModule } from "@angular/common/http";
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule, AgGridModule.withComponents([])],
  declarations: [AppComponent, SafePipe],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
