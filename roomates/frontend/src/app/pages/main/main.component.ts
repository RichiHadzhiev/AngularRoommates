import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(pagePath: string) {
    this.router.navigate([pagePath])
  }

  showNavigation() {
    return this.router.routerState.snapshot.url != "/login";
  }

}
