import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
//import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
//import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
//import { AngularFireStorageModule } from 'angularfire2/storage';
//import { AngularFireAuthModule }  from 'angularfire2/auth';
import { environment } from '../environments/environment';

//import { routing, appRoutingProviders } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './componentes/app.mainComponent';
import { AutenticarComponent } from './componentes/login/autenticarComponent';
import { MenuComponent } from './componentes/menu/menuComponent';
import { HomeComponent } from './componentes/home/homeComponent';
import { ProductoComponent } from './componentes/productos/productoComponent';
import { AddProductoComponent } from './componentes/productos/addProductoComponent';


@NgModule({
  declarations: [
    MainComponent,
    AutenticarComponent,
    MenuComponent,
    HomeComponent,
    ProductoComponent,
    AddProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //routing
    AppRoutingModule,
    HttpClientModule,
    //Se importa la configuración y los modulos de firebase, la cual se definio en el archivo environment
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireStorageModule,
    //AngularFirestoreModule,
    //AngularFireAuthModule
  ],
  providers: [],
  //providers: [appRoutingProviders],
  //bootstrap: [MainComponent, ProductoComponent, DetalleProductoComponent]
  bootstrap: [MainComponent]
})
export class AppModule { }
