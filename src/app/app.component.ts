import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LMP-ApiAndCookies';


  constructor(private router: Router, public activatedRoute: ActivatedRoute, private cookieService: CookieService) {

  }
  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
    this.cookieService.deleteAll();
    this.ngOnInit();

  }
}
