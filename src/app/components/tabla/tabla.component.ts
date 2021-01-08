
import { Component, OnInit, ViewChild } from '@angular/core';

interface ItemData {
  id: string;
  razaP: string;
  nPerro: string;
  ndueno: string;
}

@Component({
  selector: 'app-tabla',
  templateUrl:'./tabla.component.html' ,

 styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  i = 0;
  editId: string | null = null;


  listOfData: ItemData[] = [];


  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        razaP: ``,
        nPerro: '',
        ndueno: ``
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
  }

}
