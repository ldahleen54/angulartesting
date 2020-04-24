import { Component, OnInit } from '@angular/core';
import { FeatureState, selectFeatureCount, selectFeature, GlobalState } from '../globalstate';
@Component({
  selector: 'points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  points: number;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.points = selectFeatureCount(GlobalState);
  }
  //adds points to the global state value
  addPoint(): void {

  }

}
