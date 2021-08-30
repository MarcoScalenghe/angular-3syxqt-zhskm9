import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBulder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBulder: FormBuilder
  ) {}

  onSubmit() {
    //process checkout there
    this.items = this.cartService.cleartCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {}
}
