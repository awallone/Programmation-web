import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

ConnexionForm = this.fb.group({

      email: ['', Validators.required],
      password: ['', Validators.required]

  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.ConnexionForm.value);
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
