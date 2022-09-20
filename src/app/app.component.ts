import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bollywood', url: 'bolly', icon: 'bonfire' },
    { title: 'Hollywood', url: 'holly', icon: 'bonfire' },
    { title: 'Tollywood', url: 'tolly', icon: 'bonfire' },
    { title: 'Songs', url: 'songs', icon: 'bonfire' },
    { title: 'Insta Pics', url: 'photos', icon: 'bonfire' },
    { title: 'Talk Shows', url: 'talkshow', icon: 'bonfire' },
    { title: 'Maps', url: 'map', icon: 'bonfire' },

  ];
  public labels = ['Family', 'Friends',];
  constructor() {}
}
