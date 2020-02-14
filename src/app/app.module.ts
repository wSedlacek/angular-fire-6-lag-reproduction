import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamplePageComponent } from './example-page/example-page.component';

@NgModule({
  declarations: [AppComponent, ExamplePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBN60J8zrevGTNzMaDaT9JNesgRGkZDkYo',
      authDomain: 'laggy-9f215.firebaseapp.com',
      databaseURL: 'https://laggy-9f215.firebaseio.com',
      projectId: 'laggy-9f215',
      storageBucket: 'laggy-9f215.appspot.com',
      messagingSenderId: '640628454822',
      appId: '1:640628454822:web:12dea0611c4a8a07b10b67',
      measurementId: 'G-9HFYN393E6'
    }),
    AngularFireAuthModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
