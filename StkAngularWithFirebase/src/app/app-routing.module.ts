import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes de la aplicación.
import { HomeComponent } from './componentes/home/homeComponent';
import { ProductoComponent } from './componentes/productos/productoComponent';
import { AddProductoComponent } from './componentes/productos/addProductoComponent';
import { AutenticarComponent } from './componentes/login/autenticarComponent';
import { AutorizacionService } from './servicios/seguridad/autorizacion.service';

/*
  Archivo en el cual se define el sistema de rutas que nos permitirá 
  poder navegar dentro de la aplicación Web.
*/

//Se definen los paths o rutas de la aplicación.
const routes: Routes = [
  //Cuando el path o ruta este vacia ("")
  {path: "login", component: AutenticarComponent},
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "productos", component: ProductoComponent, canActivate: [AutorizacionService]},
  {path: "addProducto", component: AddProductoComponent, canActivate: [AutorizacionService]},
  //Cuando el path o ruta no exista
  {path: "**", component: HomeComponent}
];

//export const appRoutingProviders: any[] = [];
//export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

@NgModule({
  //Inicializa el router y comienza a eschucar cambios en el browser.
  imports: [RouterModule.forRoot(routes)],
  //Exporta el RouterModule para que se encuentre disponible a través de la aplicación.
  exports: [RouterModule]
})
export class AppRoutingModule { }
