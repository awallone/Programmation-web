import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UTILISATEUR } from '../mock-utilisateur';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

Utilisateur = UTILISATEUR;
selectedUtilisateur : Utilisateur;

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(utilisateur: Utilisateur): void {
  this.selectedUtilisateur = utilisateur;
}

}
