import { Component, HostListener } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @HostListener("window:scroll", [])

  public hide: boolean = false;
  public autoHided: boolean = false;
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact'
  }

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

  hideNavbar(): void {
    this.hide = !this.hide;
  }
}
