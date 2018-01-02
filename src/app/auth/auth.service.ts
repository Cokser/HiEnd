import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {FormArray, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import {User} from './user';


@Injectable()
export class AuthService {

  public userForm: FormGroup;
  public user$: User;

  constructor(private router: Router) {
  }

  public emailSignUp(user: User) {
    console.log(user);
    this.user$ = user;
  }
}
