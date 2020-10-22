import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore';

import * as firebase from 'firebase/app';

// var firebaseConfig = {
//   apiKey: "AIzaSyBCXyC5z31xo84rHs_T-FuNEylrNbFiNUc",
//   authDomain: "ionic-crud-f3c03.firebaseapp.com",
//   databaseURL: "https://ionic-crud-f3c03.firebaseio.com",
//   projectId: "ionic-crud-f3c03",
//   storageBucket: "ionic-crud-f3c03.appspot.com",
//   messagingSenderId: "896906865504",
//   appId: "1:896906865504:web:9fb49c836b012bf0710c05",
//   measurementId: "G-CEPN8L2KFD"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
