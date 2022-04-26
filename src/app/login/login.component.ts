import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


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
