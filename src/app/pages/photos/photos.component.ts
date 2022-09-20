import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  items = [
    {
      name: 'Angelina Jolie',
      place: 'India',
      src: 'assets/1.jpg',
      thumbnail: 'assets/t1.jpg',
      description: ' Keep close to Nature\'s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      text: 'Keep close to Nature\'s heart',
      views: '7800',
    },
    {
      name: 'Angelina Jolie',
      place: 'India',
      src: 'assets/2.jpg',
      thumbnail: 'assets/t2.jpg',
      description: ' Keep close to Nature\'s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      text: 'Keep close to Nature\'s heart',
      views: '10,054',
    },
    {
      name: 'Angelina Jolie',
      place: 'India',
      src: 'assets/3.jpg',
      thumbnail: 'assets/t3.jpg',
      description: ' Keep close to Nature\'s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      text: 'Keep close to Nature\'s heart',
      views: '8,000',
    },
    {
      name: 'Angelina Jolie',
      place: 'India',
      src: 'assets/4.jpg',
      thumbnail: 'assets/t4.jpg',
      description: ' Keep close to Nature\'s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      text: 'Keep close to Nature\'s heart',
      views: '1000',
    },
    {
      name: 'Kia Motors',
      place: 'Arab Emirates',
      src: 'assets/7.jpg',
      thumbnail: 'assets/t5.jpg',
      description: ' Keep close to Nature... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      text: 'Keep close to My heart',
      views: '9,666',
    },

  ];
  constructor() { }

  ngOnInit() {}

}
