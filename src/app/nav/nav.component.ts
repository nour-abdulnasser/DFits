import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  Renderer2,
  OnInit,

} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  isToggled: boolean = false;
  isToggledSearch: boolean = false;
  navSearch: string | null = '';
  constructor(
    private _Renderer2: Renderer2,
    private _SearchService: SearchService
  ) {}

  ngOnInit(): void {
  }
 
  @ViewChild('navbar') navElement!: ElementRef;

  toggle() {
    this.isToggled = !this.isToggled;
  }
  toggleSearch() {
    this.isToggledSearch = !this.isToggledSearch;
  }

  shadow() {}
  @HostListener('window:scroll')
  onScroll(): void {
    if (scrollY > 200) {
      this._Renderer2.addClass(this.navElement.nativeElement, 'py-1');
      this._Renderer2.addClass(this.navElement.nativeElement, 'shadow');
    } else if (scrollY < 200) {
      this._Renderer2.removeClass(this.navElement.nativeElement, 'py-1');

      this._Renderer2.removeClass(this.navElement.nativeElement, 'shadow');
    }
  }

  onSearchChange(navSearch: Event) {
    const value = (navSearch.target as HTMLInputElement).value;
    this._SearchService.updateSearchTerm(value);
  }
}
