import { Component } from '@angular/core';
import { environment } from '@environments/environment';

interface Environment {
  production: boolean;
  companyName: string;
  companyName2: string;
  companySlogan: string;
}

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.html',
})
export class SideMenuHeader {

  envs : Environment = environment as Environment;

}
