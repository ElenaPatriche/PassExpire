import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Params } from '@angular/router';
import { ShowPassComponent } from '../show-pass/show-pass.component';

@Component({
  selector: 'app-gen-pass',
  templateUrl: './gen-pass.component.html',
  styleUrls: ['./gen-pass.component.css']
})
export class GenPassComponent implements OnInit {

  @ViewChild("showPass", {static: false}) passDisplay!: ShowPassComponent;
  public isNew: boolean = false;
  
  public isVisible: boolean = false;

  public User: string ="";
  public MyDate: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public onCancel(): void {
  }

  public onSave(): void {
    this.isVisible = true;
    setTimeout(() => {
      this.passDisplay.password = this.generatePassword(8);
    }, 10); 
  }

  private generatePassword(passLength: number): string {
    let charList: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let password: string = "";
    for(let i = 0; i < passLength; i++) {
      let index = Math.random() * charList.length;
      password += charList.charAt(index);
    }
    return password;
    
  }
}
