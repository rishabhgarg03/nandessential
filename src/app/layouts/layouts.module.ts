import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module'
import { CountToModule } from 'angular-count-to';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { AngularTiltModule } from 'angular-tilt';
import 'hammerjs';
import 'mousetrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { Ng5SliderModule } from 'ng5-slider';


//E-commerce Layout
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { EcommerceBannerSliderComponent } from './e-commerce/ecommerce-banner-slider/ecommerce-banner-slider.component';
import { EcommerceHeaderComponent } from './e-commerce/ecommerce-header/ecommerce-header.component';
import { EcommerceProductSliderComponent } from './e-commerce/ecommerce-product-slider/ecommerce-product-slider.component';
import { EcommerceParallaxBannerComponent } from './e-commerce/ecommerce-parallax-banner/ecommerce-parallax-banner.component';
import { EcommerceProductTabComponent } from './e-commerce/ecommerce-product-tab/ecommerce-product-tab.component';
import { EcommerceDownBannerComponent } from './e-commerce/ecommerce-down-banner/ecommerce-down-banner.component';
import { EcommerceRecentStoryComponent } from './e-commerce/ecommerce-recent-story/ecommerce-recent-story.component';
import { EcommerceFooterComponent } from './e-commerce/ecommerce-footer/ecommerce-footer.component';
import { SidebarComponent } from './e-commerce/product/widget/product-detail/sidebar/sidebar.component';
import { ProductDetailsComponent } from './e-commerce/product/widget/product-detail/product-details/product-details.component';
import { ProductDetailComponent } from './e-commerce/product/widget/product-detail/product-detail.component';
import { CheckoutComponent } from './e-commerce/product/widget/checkout/checkout.component';
import { CompareComponent } from './e-commerce/product/widget/compare/compare.component';
import { CartComponent } from './e-commerce/product/widget/cart/cart.component';
import { CollectionLeftSidebarComponent } from './e-commerce/product/widget/collection/collection-left-sidebar/collection-left-sidebar.component';
import { ColorComponent } from './e-commerce/product/widget/collection/filter/color/color.component';
import { BrandComponent } from './e-commerce/product/widget/collection/filter/brand/brand.component';
import { PriceComponent } from './e-commerce/product/widget/collection/filter/price/price.component';
import { CategoriesComponent } from './e-commerce/product/widget/collection/filter/categories/categories.component';
import { NewProductComponent } from './e-commerce/product/widget/new-product/new-product.component';
import { ProductBoxComponent } from './e-commerce/product/widget/product-box/product-box.component';
import { SuccessComponent } from './e-commerce/product/widget/success/success.component';
import { NgxMasonryModule } from 'ngx-masonry';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    ECommerceComponent, EcommerceBannerSliderComponent, EcommerceHeaderComponent, EcommerceProductSliderComponent, EcommerceParallaxBannerComponent, EcommerceProductTabComponent, EcommerceDownBannerComponent, EcommerceRecentStoryComponent, EcommerceFooterComponent, SidebarComponent, ProductDetailsComponent, ProductDetailComponent, CheckoutComponent, CompareComponent, CartComponent, CollectionLeftSidebarComponent, ColorComponent, BrandComponent, PriceComponent, CategoriesComponent, NewProductComponent, ProductBoxComponent, SuccessComponent],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule.forRoot(),
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    MasonryGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    Ng5SliderModule,
    NgxMasonryModule
  ],

  exports: [
    // SidebarComponent,
    // ProductDetailsComponent,
    // CheckoutComponent,
    // CompareComponent,
    // CartComponent,
    // ColorComponent,
    // BrandComponent,
    // PriceComponent,
    // CategoriesComponent,
    // NewProductComponent,
    // ProductBoxComponent,
    // ProductDetailComponent,
    // EcommerceHeaderComponent,
    // EcommerceFooterComponent
  ],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class LayoutsModule { }
