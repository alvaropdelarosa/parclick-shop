import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent {

  constructor(
    private readonly titleService: Title,
    private metaTagService: Meta
  ) {
    this.titleService.setTitle('Parclick | Thank You');
    this.metaTagService.updateTag({ name: 'description', content: 'Parclick Shop Thank You' });
  }
}
