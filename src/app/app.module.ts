import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { UtilisateurDetailComponent } from './utilisateur-detail/utilisateur-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    UtilisateursComponent,
    UtilisateurDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
