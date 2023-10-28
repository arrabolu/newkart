import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDarkTheme = true;

  title = 'newcart';

  onChangeTheme(themeColor: any){
    this.isDarkTheme = themeColor
  }
}
