import {Component, Input, OnInit} from "@angular/core";
import {ByService} from "../main/by.service";
import {IPc} from "../../models/system";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'system-component',
  templateUrl: 'system.component.html'
})

export class SystemComponent implements OnInit {
  pcCur: any;
  constructor(private restService: ByService, private fb: FormBuilder) {
  }

  myForm = this.fb.group({
    name: '',
    status: '',
    level: ''
  });

  onPcFormSubmit() {
    this.pcCur = this.myForm.value;
    console.log("onPcFormSubmit" + JSON.stringify(this.pcCur));
    this.restService.postRequest(this.pcCur);
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
