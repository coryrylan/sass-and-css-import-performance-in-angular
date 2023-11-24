import { Component } from '@angular/core';
import { MixinStylesComponent } from '../mixin-styles/mixin-styles.component';
import { GlobalStylesComponent } from '../global-styles/global-styles.component';
import { DuplicateStylesComponent } from '../duplicate-styles/duplicate-styles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MixinStylesComponent, GlobalStylesComponent, DuplicateStylesComponent],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular 13';
}
