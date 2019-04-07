import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance-two-cities',
  templateUrl: './distance-two-cities.component.html',
  styleUrls: ['./distance-two-cities.component.css']
})
export class DistanceTwoCitiesComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
