import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-markup',
  templateUrl: './markup.component.html',
  styleUrls: ['./markup.component.scss']
})
export class MarkupComponent implements OnInit {
  public toggleMenu = false;
  public popupFlag = false;

  constructor() {
  }

  public onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

  ngOnInit() {
  }

}
