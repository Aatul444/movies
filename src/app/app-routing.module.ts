import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';
import { AutoFocusComponent } from './pages/auto-focus/auto-focus.component';
import { BollywoodComponent } from './pages/bollywood/bollywood.component';
import { HollywoodComponent } from './pages/hollywood/hollywood.component';
import { MapsComponent } from './pages/maps/maps.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { SongsComponent } from './pages/songs/songs.component';
import { TalkshowComponent } from './pages/talkshow/talkshow.component';
import { TollywoodComponent } from './pages/tollywood/tollywood.component';

const routes: Routes = [
  {
    path:'',component:HollywoodComponent
  },
  {
    path:'map',component:MapsComponent
  },
  {
    path:'bolly',component:BollywoodComponent
  },
  {
    path:'holly',component:HollywoodComponent
  },
  {
    path:'tolly',component:TollywoodComponent
  },
  {
    path:'photos',component:PhotosComponent
  },
  {
    path:'songs',component:SongsComponent
  },
  {
    path:'talkshow',component:TalkshowComponent
  },
  {
     path: 'weat', component: WeatherAppComponent 
  },
  {
    path: 'autofocus', component: AutoFocusComponent 
  },
  { 
    path: "**", component: PhotosComponent 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
