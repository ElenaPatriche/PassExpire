import { Component, Host, Input, OnInit } from '@angular/core';
import { GenPassComponent } from '../gen-pass/gen-pass.component';

@Component({
  selector: 'app-show-pass',
  templateUrl: './show-pass.component.html',
  styleUrls: ['./show-pass.component.css']
})
export class ShowPassComponent implements OnInit{

  public counter: number = 0; 
  public password: string = "";

  constructor(@Host() private parent: GenPassComponent) { }

  ngOnInit(): void {
    this.startCountDown();
  }

  startCountDown() {
    this.counter = 30;
    this.doCountdown();
  }

  doCountdown() {
    setTimeout(()=>{
      this.counter = this.counter -1;
      this.processCount();  
    }, 1000);
  }

  processCount() {
    if(this.counter == 0) {
      this.parent.isVisible = false;
      this.parent.User = "";
      this.parent.MyDate = "";
    }
    else{
      this.doCountdown();
    }
  }

}
