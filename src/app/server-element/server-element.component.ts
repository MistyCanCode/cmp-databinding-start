import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //none, native, emulated
})
export class ServerElementComponent implements OnInit , OnChanges, DoCheck{
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { 
    console.log('constructor called!');
   }

ngOnChanges(changes: SimpleChanges){
  console.log('ngOnChanges called!');
  console.log(changes);
}

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(): void {
      console.log('ngDoCheck called!');
  }

}
