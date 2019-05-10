import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('listId')
  private listId:number;

  @Input('listName')
  private listName: string;

  items: any[] = [];

  constructor() { }

  ngOnInit() {
    for(var i = 1; i < 11; i ++){
      this.items.push({
        id: i,
        title: 'title ' + i 
      });
    }
  }



}
