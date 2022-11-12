import {Component, Input, OnInit} from "@angular/core";
import {ByService} from "../main/by.service";
import {IPc} from "../../models/system";

@Component({
  selector: 'systems-list-component',
  templateUrl: 'systems-list.component.html'
})

export class SystemsListComponent implements OnInit {
  pc8: IPc;
  pcAll: IPc[];
  constructor(private getPcs: ByService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.getPcs.getRequest().subscribe((data: IPc) => {
      console.log(data);
      this.pc8 = data;
    })

    // @ts-ignore
    this.getPcs.getRequestAll().subscribe((data: IPc[]) => {
      this.pcAll = data;
    })

  }

}





/*export class SystemsListComponent implements OnInit {
  pcs$: IPc;
  constructor(private byService : ByService) {
  }

   ngOnInit(): void {
    // @ts-ignore
     this.byService.getRequest().subscribe((data: IPc) => {
      console.log(data);
      this.pcs$ = data;
    });
  }


/!*  ngOnInit(): void {
    this.pcs$ = this.byService.getRequest();
    console.log(this.pcs$);
  }*!/



}*/
