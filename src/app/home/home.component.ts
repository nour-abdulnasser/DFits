import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { CutTextPipe } from '../cut-text.pipe';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CutTextPipe,
    SearchPipe,
    UpperCasePipe,
    NgxSpinnerModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private _ProductsService: ProductsService,
    private _SearchService: SearchService,
    private _NgxSpinnerService: NgxSpinnerService
  ) {}

  allProducts: Product[] = [];
  allProductsGrouped: Map<string, Product[]> = new Map();
  homeSearch: string | null = '';

  private totalProducts = this.allProducts.length;
  private loadedProductsCount = 0;

  isTogglePopup: boolean = false;
  popupProduct: Product = {} as Product;

  ngAfterViewInit() {
    this._NgxSpinnerService.show();

    this._ProductsService.getAllProductsAPI().subscribe({
      next: (res: any) => {
        this.allProducts = res;

        res.forEach((product: Product) => {
          if (!this.allProductsGrouped.has(product.category)) {
            this.allProductsGrouped.set(product.category, []);
          }
          this.allProductsGrouped.get(product.category)?.push(product);
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    });
    this._SearchService.searchTerm$.subscribe((term) => {
      this.homeSearch = term;
    });
  }

  onProductLoad(): void {
    this.loadedProductsCount++;

    if (this.loadedProductsCount === this.totalProducts) {
      this.checkToHideSpinner();
    }
  }
  getStars(product: Product) {
    return {
      full: Array(Math.floor(product.rating.rate)).fill(0),
      empty: Array(5 - Math.ceil(product.rating.rate)).fill(0),
    };
  }
  private checkToHideSpinner(): void {
    if (this.loadedProductsCount === this.totalProducts) {
      this._NgxSpinnerService.hide();
    }
  }

  togglePopup(id: number) {
    this.isTogglePopup = true;
    this._ProductsService.getSingleProduct(id).subscribe((res) => {
      this.popupProduct = res;
    });

    /**
     * 
     * const overlay = document.getElementById('popupOverlay');
            overlay.classList.toggle('show');
     */
  }
}
