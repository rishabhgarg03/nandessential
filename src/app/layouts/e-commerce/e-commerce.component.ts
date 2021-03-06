import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {

  public products: Products[] = [];

  constructor(private productsService: ProductsService, private route: ActivatedRoute,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.productsService.getProducts().subscribe(product => this.products = product);
  }

}
