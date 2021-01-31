import { Component, OnInit } from '@angular/core';
import { Itemservice } from '../services/itemservice';
import { Itemdto } from '../dto/itemdto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authservice } from '../services/authservice';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private itemService: Itemservice, private authService: Authservice) { }
  item: Array<Itemdto> = [];

  items = new FormGroup({
    profile: new FormControl('',Validators.required)
  });

  ngOnInit() {
    this.loadAllItems();
  }

  loadAllItems(): void {
    this.itemService.getUsersList().subscribe(
      (result) => {
        this.item = result;
        console.log(this.item);
      }
    )
  }
  logout(){
    this.authService.logout();
  }
  getUser(){
    this.items.setValue = this.authService.getUser;    
  }

}
