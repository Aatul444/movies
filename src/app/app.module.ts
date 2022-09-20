import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BollywoodComponent } from './pages/bollywood/bollywood.component';
import { HollywoodComponent } from './pages/hollywood/hollywood.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { SongsComponent } from './pages/songs/songs.component';
import { TalkshowComponent } from './pages/talkshow/talkshow.component';
import { TollywoodComponent } from './pages/tollywood/tollywood.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';
import { MapsComponent } from './pages/maps/maps.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: 
  [
    AppComponent,
    BollywoodComponent,
    HollywoodComponent,
    PhotosComponent,
    SongsComponent,
    TalkshowComponent,
    TollywoodComponent,
    WeatherAppComponent,
    MapsComponent,
    LoginComponent
  ],
  imports: 
  [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
