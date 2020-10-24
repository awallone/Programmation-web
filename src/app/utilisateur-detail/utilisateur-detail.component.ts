import { Component, OnInit, Input} from '@angular/core';
import { Utilisateur } from '../utilisateur';


@Component({
  selector: 'app-utilisateur-detail',
  templateUrl: './utilisateur-detail.component.html',
  styleUrls: ['./utilisateur-detail.component.css']
})
export class UtilisateurDetailComponent implements OnInit {
@Input() utilisateur: Utilisateur;

  constructor() { }

  ngOnInit(): void {
  }

}
