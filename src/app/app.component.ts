import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
 
  title = 'Rock_Paper_Scissors-FM';

  noinit = true;

  secondResult = false;

  youChoice = '';
  cpuChoice = '';

  result = 0;

  score = 0;

  playAgain()
  {
    this.noinit = true;
    this.secondResult = false;
  }

  async picked(choice: string)
  {
    this.noinit = false;
    this.youChoice = choice;
    const n = Math.floor(Math.random() * 3);
    if(n === 0) this.cpuChoice = 'paper';
    if(n === 1) this.cpuChoice = 'scissors';
    if(n === 2) this.cpuChoice = 'rock';


    if(choice === 'paper')
    {
      if(this.cpuChoice === 'paper') this.result = 0;
      if(this.cpuChoice ==='scissors')
      {      
        this.result = -1;
      }
      if(this.cpuChoice ==='rock')
      {
        this.result = 1;
      }
    }
    if(choice === 'scissors')
    {
      if(this.cpuChoice === 'scissors') this.result = 0;
      if(this.cpuChoice ==='paper')
      {
        this.result = 1;
      }
      if(this.cpuChoice ==='rock')
      {
        this.result = -1;
      }
    }
    if(choice === 'rock')
    {
      if(this.cpuChoice === 'rock') this.result = 0;
      if(this.cpuChoice ==='scissors')
      {
        this.result = 1;
      }
      if(this.cpuChoice ==='paper')
      {
        this.result = -1;
      }
    }
    
    await setTimeout(() => {
      this.secondResult = true;
      if(this.result === 1) this.score++;
      if(this.result === -1) this.score--;
    }, 1000);
    
  }
}
