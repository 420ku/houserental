import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  // templateUrl: './home/home.component.ts',
  template: ` <main> <header class="brand-name"> <section class="brand-content"><img class="brand-logo" src="/assets/logo.png" alt="logo"
aria-hidden="true"><h1 style="color:#605dc8">Homes</h1></section> </header> <section class="content"> <app-home></app-home> </section> </main> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
