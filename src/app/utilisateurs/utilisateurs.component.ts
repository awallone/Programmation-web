import { Component, OnInit } from '@angular/core';

import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  selectedUtilisateur: Utilisateur;

  utilisateurs: Utilisateur[];

  constructor(private utilisateurService: UtilisateurService, private messageService: MessageService)
  { }

  ngOnInit(): void {
    this.getUtilisateurs();
  }


  onSelect(utilisateur: Utilisateur): void {
  this.selectedUtilisateur = utilisateur;
this.messageService.add(`UtilisateursComponent: Selected utilisateur id=${utilisateur.id}`);

}


getUtilisateurs(): void {
  this.utilisateurService.getUtilisateurs()
      .subscribe(utilisateurs => this.utilisateurs = utilisateurs);
}

}
