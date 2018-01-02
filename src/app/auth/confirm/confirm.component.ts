import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {User} from '../user';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  user: User;

  constructor(public auth: AuthService,
              public router: Router) {
  }

  ngOnInit() {
    this.user = this.auth.user$;
  }

}
