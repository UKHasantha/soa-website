import { Component, OnInit } from '@angular/core';
import { Itemservice } from '../services/itemservice';
import { Itemdto } from '../dto/itemdto';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private itemService: Itemservice) { }
  item: Array<Itemdto> = [];

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

}
