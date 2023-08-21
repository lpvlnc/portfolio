import { Component, HostListener, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @HostListener("window:scroll", [])

  public hide: boolean = false;
  public autoHided: boolean = false;
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact'
  }
  public angleLeft = faAngleLeft;
  public angleRight = faAngleRight;

  constructor() { }

  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (!this.hide) {
        this.hide = true;
        this.autoHided = true;
      }
    }
    else {
      if (this.autoHided) {
        this.hide = false;
        this.autoHided = false;
      }
    }
  }

  ngOnInit(): void {
  }
  hideNavbar(): void {
    this.hide = !this.hide;
  }
}
