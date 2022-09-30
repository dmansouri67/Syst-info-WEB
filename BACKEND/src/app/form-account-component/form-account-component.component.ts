import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-account-component',
  templateUrl: './form-account-component.component.html',
  styleUrls: ['./form-account-component.component.css']
})
export class FormAccountComponentComponent implements OnInit {

  constructor() { }
  firstname : String = "";
  lastname : String = "";
  address : String = "";
  postalCode: String =""
  city : String= ""
  phoneNumber : String = ""
  email :  String = ""

  recap : String = "";

  ngOnInit(): void {
  }
  clicChange (val : String) {
    this.recap = val;
  }
   
}
