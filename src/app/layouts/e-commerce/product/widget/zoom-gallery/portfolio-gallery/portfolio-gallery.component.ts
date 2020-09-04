import { Component, OnInit, Input } from '@angular/core';
import { AdvancedLayout, ButtonsConfig, ButtonsStrategy, Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, PlainGalleryConfig, PlainGalleryStrategy } from '@ks89/angular-modal-gallery';
import { ColorScssService } from '../../../../../../shared/service/color-scss.service';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { WishListService } from 'src/app/shared/service/e-commerce/wish-list.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Products } from 'src/app/shared/model/e-commerce/product.model';


@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss']
})
export class PortfolioGalleryComponent implements OnInit {
  public customizer: any = "all"
  @Input() products: Products;
  closeResult: string;

  constructor(private displayblock: ColorScssService, public productsService: ProductsService, private wishlistService: WishListService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  open(content, id) {
    this.productsService.getProduct(id).subscribe(product => this.products = product)
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}

