import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: ''
  }
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(usercreds: String){
    let userlogin = this.auth.login(usercreds)
    userlogin.then(res=>{
      if(res.json().success)
      this.router.navigate(['/dashboard']);
    })
  }
}
