import { NgModule } from "@angular/core";
import { DataGrid } from "./data-grid/datagrid.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Format } from "./data-grid/format";
import { OrderBy } from "./data-grid/orderby";
import { DBOperation } from "./data-grid/dboperations";
import { SearchComponent } from "./search.component";

@NgModule({
    declarations:[DataGrid,Format,OrderBy,SearchComponent],
    exports:[DataGrid,SearchComponent],
    imports:[FormsModule,BrowserModule,]
})
export class SharedModule{

}