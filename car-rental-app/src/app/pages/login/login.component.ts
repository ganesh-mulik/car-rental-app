import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);

  loginForm:FormGroup = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  })

  onLogin(){
    const loginObj = this.loginForm.value;
    if(loginObj.userName==="admin"&&loginObj.password==="123456"){
      this.router.navigateByUrl("/dashboard");
    }
    else{
      alert("Enter correct details");
    }
  }
}

