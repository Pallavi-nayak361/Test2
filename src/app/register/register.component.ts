import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
"name": string;
"email": string;
"phone": number;
"password": string;
"confirmpassword": string;
  constructor() { }

  ngOnInit(): void {
  }
  saveRegister(registerForm: NgForm): void{
    console.log(registerForm.value);
  }

}
