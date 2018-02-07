import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell-content',
  templateUrl: './cell-content.component.html',
  styleUrls: ['./cell-content.component.css']
})
export class CellContentComponent implements OnInit {

  @Input() cellValue;
  @Input() completedStage:boolean = true;

  constructor() { }

  ngOnInit() {
    this.completedStage = true;
  }

  

}
