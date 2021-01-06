import { RazaService } from './../../service/raza.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nz-form-forma',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  validateForm!: FormGroup;
  perros: Array<any> = [];

  razaElegida = 'affenpinscher';

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  genderChange(value: string): void {
    this.validateForm
      .get('note')!
      .setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }

  constructor(private fb: FormBuilder, private razaService: RazaService) {
    this.razaService.getRaza().subscribe(
      (resp: any) => {
        this.perros = Object.getOwnPropertyNames(resp['message']);

        console.log(this.perros);
      },
      (error) => console.log(error),
      () => console.log('Complete')
    );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      note: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    });
  }
}
