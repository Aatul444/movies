import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
 latti:number;
 longi:number;
 map:any;
  constructor() { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((showPosition)=>{
        console.log("hii")
        console.log(showPosition.coords.latitude)  
        this.latti=showPosition.coords.latitude;
        console.log(showPosition.coords.longitude)
        this.longi=showPosition.coords.longitude;
      });
      // this.map = new Mappls.Map('map', {center:{lat:28.612964,lng:77.229463} })
    } else { 
      console.log("Geolocation is not supported by this browser.")
    }
  }

}


