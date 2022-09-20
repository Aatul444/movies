import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss'],
})
export class WeatherAppComponent implements OnInit {

  url:string="https://weatherapi-com.p.rapidapi.com/forecast.json?q=";
  place:string="Delhi";
  days:string="days=7";
  fullapiUrl='';
  getDate = new Date();
  todaysDate = JSON.stringify(this.getDate.toDateString()).slice(5,16)
  todaysTemp='';
  season='';
  rainyimg=''
  // todaysDate = JSON.stringify(this.getDate).slice(1, 11)

  constructor(private http:HttpClient) { }

  ngOnInit() {
    // switch (key) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
    console.log(this.todaysDate)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '081dabc039mshc9db3c6e87aacb3p1d3522jsn91cbf704e5e2',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    this.fullapiUrl=this.url+this.place+this.days
    this.http.get(this.fullapiUrl, options)
    .subscribe((data:any)=>
    {
      console.log(data)
      this.todaysTemp=data.current.temp_c;
this.season=data.current.condition.text;
      this.rainyimg=data.current.condition.icon
    }
    )
      // .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err));
  }

  
}
