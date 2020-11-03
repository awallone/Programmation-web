import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { UtilisateurDetailComponent } from './utilisateur-detail/utilisateur-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';



@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    UtilisateursComponent,
    UtilisateurDetailComponent,
    MessagesComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
