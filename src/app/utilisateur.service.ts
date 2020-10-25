import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Utilisateur } from './utilisateur';
import { UTILISATEUR } from './mock-utilisateurs';
import { MessageService } from './message.service';




@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private messageService: MessageService) { }

  getUtilisateurs(): Observable<Utilisateur[]> {

     this.messageService.add('UtilisateurService: fetched utilisateurs');
    return of (UTILISATEUR);
  }


}
