import {Component, Input, OnInit} from "@angular/core";
import {ByService} from "../main/by.service";
import {IPc} from "../../models/system";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'system-component',
  templateUrl: 'system.component.html'
})

export class SystemComponent implements OnInit {
  //TODO: Replace 'any' with 'IPc' (and fix compatibility error in onPcFormSubmit())
  pcToAdd: any;
  isEditPage: boolean;
  constructor(public route: ActivatedRoute,
              private restService: ByService,
              private fb: FormBuilder,
              private router: Router) {
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
    console.log("Current route: " + this.router.url);
    console.log("Received parameter from route: " + this.route.snapshot.paramMap.get("pc_id"));

    if(this.router.url.includes("/edit-pc")) {
      console.log("Edit-pc acquired.");
      this.restService.getRequest(this.route.snapshot.paramMap.get("pc_id")).subscribe((data: any) => {
        console.log("Received pc by this id: " + JSON.stringify(data));
        this.myForm.setValue({
          id: data.id,
          name: data.name,
          level: data.level,
          status: data.status
        })
      });
    }


    this.isEditPage = this.router.url == "/edit-pc";
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
