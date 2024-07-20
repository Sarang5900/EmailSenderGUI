import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private snackbar: MatSnackBar){}

  ngOnInit() : void{
  }

  btnclick(){
    console.log("Button click");
    this.snackbar.open("Hey!... Welcome to Email Sender app", "Ok")
  }
}
