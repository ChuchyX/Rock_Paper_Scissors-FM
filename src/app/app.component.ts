import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rock_Paper_Scissors-FM';

  noinit = true;

  secondResult = true;

  picked(choice: string)
  {
    this.noinit = false;
    console.log();
    console.log(choice);
  }
}
