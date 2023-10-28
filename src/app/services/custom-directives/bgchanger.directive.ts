import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[Bgchanger]'
})
export class BgchangerDirective implements OnInit {

  constructor(private el : ElementRef) {

  }
  ngOnInit(){
    console.log(this.el.nativeElement.textContent);

    if(this.el.nativeElement.textContent == 'Best Seller'){
      this.el.nativeElement.style.backgroundColor = 'red'
    }
    else{
      this.el.nativeElement.style.backgroundColor = 'green'

    }

  }


}
