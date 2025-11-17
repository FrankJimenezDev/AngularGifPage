import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
})
export class GifsListItem {
  gif = input.required<string>();
}
