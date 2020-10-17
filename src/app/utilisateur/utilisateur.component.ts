import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {


  utilisateur: Utilisateur = {
    id: 1,
    firstname: 'Baba',
    lastname: 'Bobo',
    email:  'baba.bobo@hotmail.fr',
    phonenumber: '0642254690',
    licencenumber: '78864988848',
    password: 'Bababobobibi'

  };


  constructor() { }

  ngOnInit(): void {
  }

}
