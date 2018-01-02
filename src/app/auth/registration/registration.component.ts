import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

// function  passwordMatchValidator(g: FormGroup) {
//   return g.get('userPassword').value === g.get('passwordConfirm').value
//     ? null : {'mismatch': true};
// }
function passwordMatchValidator(c: AbstractControl): any {

  if (!c.parent || !c) {
    return;
  }
  const pwd = c.parent.get('userPassword');
  const cpwd = c.parent.get('passwordConfirm');

  if (!pwd || !cpwd) {
    return;
  }
  if (pwd.value !== cpwd.value) {
    return { passwordMatch: false };
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {

  public singUpForm: FormGroup;
  public formSubmitAttempt = false;

  constructor(private fb: FormBuilder,
              public auth: AuthService,
              public router: Router) {
  }

  ngOnInit() {
    this.setForm();
  }

  private setForm() {
    this.singUpForm = this.fb.group({
      userName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(16)
        ]
      ],
      userLogin: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16)
        ]
      ],
      userEmail: ['',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
        ]
      ],
      userPassword: ['',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(16)
        ]
      ],
      passwordConfirm: ['',
        [
          Validators.required,
          passwordMatchValidator,
          Validators.minLength(6),
          Validators.maxLength(16)
        ]
      ]
    });
  }



  // Using getters will make your code look pretty
  get login() {
    return this.singUpForm.get('userLogin');
  }
  get name() {
    return this.singUpForm.get('userName');
  }

  get email() {
    return this.singUpForm.get('userEmail');
  }

  get password() {
    return this.singUpForm.get('userPassword');
  }

  public onSubmit() {
    if (this.singUpForm.valid) {
      this.auth.emailSignUp({name: this.name.value, login: this.login.value, email: this.email.value, password: this.password.value});
      this.singUpForm.reset();
      this.formSubmitAttempt = false;
      this.router.navigateByUrl('/confirm');
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
