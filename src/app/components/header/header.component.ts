import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  themeEmmiter  = new EventEmitter();

  isDarkTheme = true;

  onThemeChange(){
    this.isDarkTheme  = !this.isDarkTheme;

    this.themeEmmiter.emit(this.isDarkTheme)
  }

}
