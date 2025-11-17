import { Component, input } from '@angular/core';
import { GifsListItem } from "./gifs-list-item/gifs-list-item";

@Component({
  selector: 'gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
})
export class GifsList {
  gifs = input.required<string[]>();
}
