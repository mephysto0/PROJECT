import { RazaService } from './../../service/raza.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nz-form-forma',
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control [nzSpan]="12" nzErrorTip="Please select your gender!">
          <nz-select
            id="gender"
            formControlName="gender"
            [(ngModel)]="razaElegida"
            nzPlaceHolder="Select a option and change input text above"
            (ngModelChange)="genderChange($event)"
          >
            <nz-option
              *ngFor="let p of perros"
              [nzValue]="p"
              [nzLabel]="p"
            ></nz-option>
          </nz-select>
        </nz-form-control>
        <nz-form-label [nzSpan]="5" nzRequired nzFor="note">Note</nz-form-label>
        <nz-form-control [nzSpan]="12" nzErrorTip="Please input your username!">
          <input id="note" type="text" nz-input formControlName="note" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5" nzFor="gender" nzRequired
          >Gender</nz-form-label
        >
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzSpan]="12" [nzOffset]="5">
          <button nz-button nzType="primary">Submit</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [
    `
      [nz-form] {
        max-width: 600px;
      }
    `,
  ],
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
