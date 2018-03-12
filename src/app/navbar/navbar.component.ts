import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { AppUser } from '../model/app.user';

@Component({
  selector: 'sm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public appUser: AppUser;
  show = false;
  constructor(private authService: AuthService, public userService: UserService) {
    this.userService.appUser$.subscribe(appUser=> this.appUser = appUser);
   }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }
  toggleMenu(){
    this.show = !this.show;
  }

}
