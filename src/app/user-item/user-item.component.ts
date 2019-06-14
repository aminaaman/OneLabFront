import { Component, OnInit, EventEmitter } from '@angular/core';
import {Output, Input} from '@angular/core';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  public users=[
    {name:'Amina'},
    {name: 'Aruzhan'},
    {name: 'Adelya'}
  ];
  // @Input() user;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  selectUser(){
    this.userSelected.emit();
  }
}
