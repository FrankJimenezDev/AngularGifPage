import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { GifsSideMenu } from '../../components/gifs-side-menu/gifs-side-menu';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage { }
