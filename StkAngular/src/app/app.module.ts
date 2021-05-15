import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { routing, appRoutingProviders } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './componentes/app.mainComponent';
import { HomeComponent } from './componentes/home/homeComponent';
import { ContactoComponent } from './componentes/contacto/contactoComponent';
import { DepartamentoComponent } from './componentes/departamentos/departamentoComponent';
import { ProductoComponent } from './componentes/productos/productoComponent';
import { DetalleProductoComponent } from './componentes/productos/detalleProductoComponent';

//Custom modules
import { UsuariosModule } from './modules/usuarios/usuarios.module';

@NgModule({
  //Declaración de componentes, directivas y pipes que pertenecen al módulo.
  declarations: [
    MainComponent,
    HomeComponent,
    ContactoComponent,
    DepartamentoComponent,
    ProductoComponent,
    DetalleProductoComponent
  ],
  //Set de NgModules que son exportados con sus componentes, directivas y pipes 
  //paara ser utilizados en por los componentes de este módulo.
  imports: [
    /*Exporta servicios esenciales necesarios para lanzar y ejecutar una aplicación en un Browser.
      Los componentes del módulo principal () también necesitan acceso a directivas estructurales y
      directivas de atributo tales como *ngIf, *ngFor and *ngSwitch etc; y estas directivas están 
      disponibles a través del módulo CommonModule, el cual es automaticamente exportado por el 
      BrowserModule.  
    */
    BrowserModule,
    /*Prove una serie de directivas y providers que permiten la comunicación con los elementos del DOM
      cuando se construyen formularios para la captura de información.
      Dentro de las directivas que provee el módulo son:
        ngModel para el enlace de valores en unidirección y bidireccional.     
     */
    FormsModule,
    //routing
    AppRoutingModule,
    HttpClientModule,
    
    //Importamos el módulo de usuarios.
    UsuariosModule
  ],
  providers: [],
  //providers: [appRoutingProviders],
  //bootstrap: [MainComponent, ProductoComponent, DetalleProductoComponent]
  //Inicialización del componente proncipal de este módulo.
  bootstrap: [MainComponent]
})
export class AppModule { }
