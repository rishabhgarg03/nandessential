import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aboutTestimonial = [
    { 
      img:"assets/images/nandessentialsproducts/chutneyL.png",
      content: "A unique blend of 14 spices that is sure to leave you amazed. This chutney goes well with samosa, kachori, Bhalla, Papri Pakodas, Bhelpuri, Fruit cream and is the perfect balance of sweet and sour that will have something for everyone."
    },
    {
      img:"assets/images/nandessentialsproducts/pithiR.png",
      content: "Spicy, khasta, and flavourful, this blend is carefully curated to blend in your atta/maida dough and give it the amazing taste of Maah daal Pithi Puri of Punjab"
    },
    {
      img:"assets/images/nandessentialsproducts/raseelikheerf.png",
 content: "Everyone knows India loves kheer, our Raseeli Kheer is made with premium quality rice grains and is rich with flavours of Almond, Pista, and Elaichi. Easy to make and hard to forget, this unique blend will surely leave you mesmerized."
    },
    {
      img:"assets/images/nandessentialsproducts/magicmasalaf.png",
      content: "An exceponal combinaon of spices specially blended to make your everyday homemade food even taser. Put this secret ingredient in a salad, Boondi raita, lassi, or any gravy dish and taste the magic on your tongue"
    }
  ]
  
  aboutTestimonialCarouselOptions= {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    dots: false,
    navText: ['<img src="assets/images/music/gallery/gallery-icon/left.png">', '<img src="assets/images/music/gallery/gallery-icon/right.png">'],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }


}
