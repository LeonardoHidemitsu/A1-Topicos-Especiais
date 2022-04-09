import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LeonardoComponent } from './leonardo/leonardo.component';
import { LeonardoListaComponent } from './leonardo-lista/leonardo-lista.component';
import { LeonardoDisciplinasService } from './leonardo-disciplinas.service';
import { RouterModule } from '@angular/router';
import { LeonardoDetalhesComponent } from './leonardo-detalhes/leonardo-detalhes.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: 'leonardo', component: LeonardoComponent},
      {path: 'lista', component: LeonardoListaComponent},
      {path: 'lista/:index', component: LeonardoDetalhesComponent}
    ]),
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    LeonardoComponent,
    LeonardoListaComponent,
    LeonardoDetalhesComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: [
    LeonardoDisciplinasService
  ]
})
export class AppModule { }