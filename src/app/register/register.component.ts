import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  regForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    age:new FormControl(''),
    email:new FormControl(''),
    password: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
