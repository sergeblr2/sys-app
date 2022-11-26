import {Component, Input, OnInit} from "@angular/core";
import {ByService} from "../main/by.service";
import {IPc} from "../../models/system";

@Component({
  selector: 'system-component',
  templateUrl: 'system.component.html'
})

export class SystemComponent implements OnInit {
  pcCur: IPc;
  constructor(private getPcs: ByService) {
  }

  onPcFormSubmit(newPc: {pcName: string, pcLevel: number, pcStatus: string}) {
    console.log(newPc);
  }

  ngOnInit(): void {
    // @ts-ignore
/*    this.getPcs.getRequest().subscribe((data: IPc) => {
      console.log(data);
      this.pc8 = data;
    })*/

  }

}





/*export class SystemsComponent implements OnInit {
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