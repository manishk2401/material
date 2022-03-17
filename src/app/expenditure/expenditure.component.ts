import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';

import { uid } from 'uid';
@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {

  localItem: string;
  expenditures = [];
  curExp = {}
  constructor() { 
    this.localItem = localStorage.getItem("expenditures");
    if(this.localItem == null){
    this.expenditures = [];
    }
    else{ 
      this.expenditures = JSON.parse(this.localItem); 
    }
   }

  expForm = new FormGroup({
    traType : new FormControl(null, Validators.required),
    price : new FormControl(null, Validators.required),
    date : new FormControl(null, Validators.required)
  })

  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  onSubmit(){
    if (!this.expForm.invalid) {
      this.expForm.value['uid'] = uid(10)
      this.expenditures.push(this.expForm.value)
      localStorage.setItem('expenditures', JSON.stringify(this.expenditures))
      this.expForm.reset()
    } else{
      alert('All Fields are Required')
    }
  }
  editModal(id:any){
    this.curExp = JSON.parse(this.localItem).filter((el: { uid: number; })=> el.uid == id)
  }
 
  onEdit(id:any){
    if (!this.expForm.invalid) {
      this.expForm.value['uid'] = this.curExp[0].uid
      const index = this.expenditures.map(i => i.uid).indexOf(this.curExp[0].uid);
      this.expenditures.splice(index, 1);
      this.expenditures.push(this.expForm.value)
      localStorage.setItem('expenditures', JSON.stringify(this.expenditures))
      
      this.expForm.reset()
    } else{
      alert('All Fields are Required')
    }
  }

  onDelete(id:any){
    const index = this.expenditures.map(i => i.uid).indexOf(id);
    this.expenditures.splice(index, 1);
    localStorage.setItem("expenditures", JSON.stringify(this.expenditures));
  }

  // onEdit(id: any){
  //   alert(id)
  // }

  ngOnInit(){
  }

}
