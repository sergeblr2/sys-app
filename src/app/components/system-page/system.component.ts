import {Component, Input, OnInit} from "@angular/core";
import {ByService} from "../main/by.service";
import {IPc} from "../../models/system";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'system-component',
  templateUrl: 'system.component.html'
})

export class SystemComponent implements OnInit {
  //TODO: Replace 'any' with 'IPc' (and fix compatibility error in onPcFormSubmit())
  pcToAdd: any;
  constructor(private restService: ByService, private fb: FormBuilder) {
  }

  myForm = this.fb.group({
    id: 0,
    name: '',
    level: 0,
    status: ''
  });
  // TODO: Learn fb.group working -> is it possible yo use IPc here as class or need to create IPc instamce with default values?
  onPcFormSubmit() {
    this.pcToAdd = this.myForm.value;
    console.log("onPcFormSubmit" + JSON.stringify(this.pcToAdd));
    this.restService.postRequest(this.pcToAdd);
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
