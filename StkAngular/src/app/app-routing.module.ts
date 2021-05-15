import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes de la aplicación.
import { HomeComponent } from './componentes/home/homeComponent';
import { ContactoComponent } from './componentes/contacto/contactoComponent';
import { DepartamentoComponent } from './componentes/departamentos/departamentoComponent';
import { ProductoComponent } from './componentes/productos/productoComponent';
import { UsuarioComponent } from './modules/usuarios/componentes/usuarioComponent';

/*
  Archivo en el cual se define el sistema de rutas que nos permitirá 
  poder navegar dentro de la aplicación Web.
*/

//Se definen los paths o rutas de la aplicación.
const routes: Routes = [
  //Cuando el path o ruta este vacia ("")
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "productos", component: ProductoComponent},
  {path: "departamentos", component: DepartamentoComponent},
  {path: "usuarios", component: UsuarioComponent},
  {path: "usuarios/:id", component: UsuarioComponent},
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
