import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioComponent } from './componentes/usuarioComponent';

@NgModule({
  
  //Set de componentes, directivas y pipes que pertenecen al módulo.
  declarations: [
    UsuarioComponent
  ],
  imports: [
    /*Exporta todos las directivas y pipes de angular, tales como :
        *ngIf, *ngFor and *ngSwitch, ngForOf, DecimalPipe, etc.
      Este módulo es automaticamente re-exportado por el BrowserModule, el cual es incluido
      automaticamente por el módulo principal (AppModule) cuando crea una aplicación por 
      línea de comandos.
    */
    CommonModule
  ],
  //Propiedad del decorador ngModule a través del cual se indican los componentes que podrán
  //ser utilizados desde otros módulos.
  exports: [
    UsuarioComponent
  ]
})
export class UsuariosModule { }
