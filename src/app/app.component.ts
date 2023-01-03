import { Component } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'generator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  specials = "\.[]{}()<>*+-=!?^$|";
  nums = '0123456789';

  title = 'Strong Password Generator';
  faCopy = faCopy;
  pass = "";
  passlength = 16;
  isSetToSpecials: boolean = false;
  isSetToNums: boolean = false;

  inputUpdate(inputChange: any) {
    this.passlength = inputChange.value;
  }
  checkNumUpdate() {
    if (this.isSetToNums)
      this.isSetToNums = false;
    else
      this.isSetToNums = true;
  }
  checkSpecialUpdate() {
    if (this.isSetToSpecials)
      this.isSetToSpecials = false;
    else
      this.isSetToSpecials = true;
  }

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    if (this.pass.length > 0)
      this.snackBar.open(message, '', { duration: 3000 });
  }

  generatePass() {
    if (this.passlength < 0 || this.passlength > 128) return;
    this.pass = "";
    var curchars = this.characters;
    if (this.isSetToNums) curchars += this.nums;
    if (this.isSetToSpecials) curchars += this.specials;

    var charactersLength = curchars.length;
    for (var i = 0; i < this.passlength; i++) {
      this.pass += curchars.charAt(Math.floor(Math.random() * charactersLength));
    }
  }


}

