import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';


@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

constructor(
  private authentificationService: AuthenticationService,
  private router: Router
) { }
ngOnInit() { }
public isLoggedIn(): boolean {
 return this.authentificationService.isLoggedIn();
}
private onLogout(): void {
 this.authentificationService.logout();
 this.router.navigateByUrl('#');
 return;
}
}

