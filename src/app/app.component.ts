import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  ajRowData;
  ajColumnDefs = [{ headerName:"档号",field: "dh" }, {headerName:"案卷题名", field: "ajtm" }];
  wjRowData;
  wjColumnDefs = [{ headerName:"卷内顺序号",field: "jnsxh" }, {headerName:"文件标题", field: "wjbt" }];
  links;

  ajnd;
  ajflh;
  nd='';
  flh='';
  constructor(private ds: DataService) {
    this.ajnd = ds.getNd();
  }

  selectNd(){
    if(this.nd==''){
      this.ajflh = null;
    }
    else{
      this.ajflh = this.ds.getNd();
    }
  }
  selectFlh(){
    if(this.flh==''){
      this.ajRowData = null;
    }
    else{
      this.ajRowData = this.ds.getNd();
    }
  }

  ajSelectionChanged(grid){
    //console.log(event)
    let rows = grid.api.getSelectedRows()
    if(rows.length>0){
      let row = rows[0]
      console.log(row)
      this.wjRowData = this.ds.getWj(row.id)
    }
  }
  wjSelectionChanged(grid){
    //console.log(event)
    let rows = grid.api.getSelectedRows()
    if(rows.length>0){
      let row = rows[0]
      console.log(row)
      this.links = this.ds.getLink(row.id)
    }
  }
  open(link){
    console.log(link)
  }
}
