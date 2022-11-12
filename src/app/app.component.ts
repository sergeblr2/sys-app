import { Component } from '@angular/core';
import {IPc} from "./models/system";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  seregaTitle = 'sys-app Serega';

  //systems: IPc[] = data
  //pcs: IPc[] = []
}

/*

index.html <- app.module.ts {
  @NgModule: AppComponent : {
    @Component : 'app-root', 'app.component.html', '...scss'
  }

}*/
