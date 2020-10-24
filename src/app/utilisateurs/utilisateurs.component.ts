import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UTILISATEUR } from '../mock-utilisateurs';


@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

utilisateurs = UTILISATEUR;
selectedUtilisateur : Utilisateur;

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(utilisateur: Utilisateur): void {
  this.selectedUtilisateur = utilisateur;
}

}
