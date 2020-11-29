import {Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'nz-demo-card-simple',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, public activatedRoute: ActivatedRoute, private cookieService: CookieService) {
    
  }
  ngOnInit(){     
    this.profileForm = this.fb.group({
    username: new FormControl(''),
    password: new FormControl('')
  })}

  onsubmit(){
    const nombreUsuario = this.profileForm.get('username').value;
    const contraseñaUser = this.profileForm.get('password').value;

    this.cookieService.set('username', nombreUsuario);
    this.cookieService.set('password', contraseñaUser);
    console.log(this.cookieService.get('username'));
    console.log(this.cookieService.get('password'));
    this.router.navigate(['/home']);
    }

  refreshPage() {
    window.location.reload();
   }
}
