import { Component,ViewChild,ElementRef,HostListener, Renderer2, OnInit  } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit{
  isToggled: boolean = false;

  constructor(private _Renderer2: Renderer2){}

  toggle() {
    this.isToggled = !this.isToggled;
  }

  ngOnInit(): void {
    
  }
  @ViewChild('navbar') navElement!: ElementRef;

  @HostListener('window:scroll')
  onScroll(): void {
    if (scrollY > 200){

      this._Renderer2.addClass(this.navElement.nativeElement, 'py-1')
      this._Renderer2.addClass(this.navElement.nativeElement, 'shadow')
    } else {
      this._Renderer2.removeClass(this.navElement.nativeElement, 'py-1')
      this._Renderer2.removeClass(this.navElement.nativeElement, 'shadow')


    }
  }

}
