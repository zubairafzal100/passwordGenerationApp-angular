import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  password: string = '';

  onChangeLength(event: any) {
    const parsedValue = parseInt(event.target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetter() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumber() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '123457890';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let passwordGenerated = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);

      passwordGenerated += validChars[index];
    }

    this.password = passwordGenerated;

    // console.log({title: 'Letters: ', output: this.includeLetters});
    // console.log({title: 'Numbers: ', output: this.includeNumbers});
    // console.log({title: 'Symbols: ', output: this.includeSymbols});
    // this.password = 'MY PASSWORD !!!';
  }
}
