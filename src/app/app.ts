/**
 * Created by davidchains on 2/26/17.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'app',
  template: `
    <div>
        <router-outlet></router-outlet>
    </div>
  `
})
export class App{}