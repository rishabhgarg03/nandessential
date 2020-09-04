import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../../../shared/service/color-scss.service';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { Products } from 'src/app/shared/model/e-commerce/product.model';

@Component({
  selector: 'app-zoom-gallery',
  templateUrl: './zoom-gallery.component.html',
  styleUrls: ['./zoom-gallery.component.scss']
})
export class ZoomGalleryComponent implements OnInit {
  public products     :   Products[] = [];
  public activeCategory      : string = 'all';
  constructor(public colorPicker: ColorScssService, private productsService: ProductsService) { 
    this.getCategoryProduct(this.activeCategory);
  }

  ngOnInit() {
    // this.colorPicker.setColorScheme('inner-page');
  }

  getCategoryProduct(category){
    this.productsService.getProductByCategory(category).subscribe(products => {           
      this.products = products.slice(0,8)
   })
   this.activeCategory = category
  }
}
