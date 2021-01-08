import { RazaService } from './../../service/raza.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Forma } from 'src/app/model/forma.model';

@Component({
  selector: 'nz-form-forma',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  validateForm!: FormGroup;
  perros: Array<any> = [];

  forma : Forma[] = [];

  perro:String = "";
  dueno:String = "";
  razaElegida:String= "affenpinscher"
  constructor(private fb: FormBuilder, private razaService: RazaService) {

    console.log(this.forma.values);

    this.razaService.getRaza().subscribe(
      (resp: any) => {
        this.perros = Object.getOwnPropertyNames(resp['message']);
      },
      (error) => console.log(error),
      () => console.log('Complete')
    );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      perro: [null, [Validators.required]],
      dueño: [null, [Validators.required]],
    });
  }
}

