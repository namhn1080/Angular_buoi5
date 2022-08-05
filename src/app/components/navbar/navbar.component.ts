import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }
  navigateTo(url:string){
    this.route.navigate([url])
  }
}
