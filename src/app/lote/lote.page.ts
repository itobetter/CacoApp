import { Component, OnInit } from '@angular/core';
import { Questions } from './lote.questions'
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lote',
  templateUrl: './lote.page.html',
  styleUrls: ['./lote.page.scss'],
})
export class LotePage implements OnInit {
  lote : FormGroup;
  questions: ({
    name: string;
    type: string;
    options: ({
      value?: any;
      label?: any;
    } | {
      id: number;
      value: string;
   })[];
    string: string;
  })[] = Questions

  constructor(
    private formBuilder: FormBuilder, 
  ) {
    const obj = this.questions.reduce((o, key) => 
      ({ ...o, [key.name]: [""]}), {}
    )
    this.lote = this.formBuilder.group(obj)
  }


  ngOnInit() {
  }
  LoteForm(){
    console.log(this.lote.value)
  }

}
