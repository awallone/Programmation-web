import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
        email: ['', Validators.required],
        phonenumber: [''],
        licencenumber: [''],
        password: ['', Validators.required]

    });


   onSubmit() {
     // TODO: Use EventEmitter with form value
     console.warn(this.inscriptionForm.value);
   }

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
  }

}
