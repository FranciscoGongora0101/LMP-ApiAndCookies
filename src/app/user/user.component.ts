import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usuarioCookie: string;
  passwordCookie: string;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.usuarioCookie = this.cookieService.get('username');
    this.passwordCookie = this.cookieService.get('password');
  }

}
