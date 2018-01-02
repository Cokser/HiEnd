import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validator-messages',
  templateUrl: './validator-messages.component.html',
  styleUrls: ['./validator-messages.component.scss']
})
export class ValidatorMessagesComponent {

  @Input() field: FormControl;

  public get validatorMessages() {

    const field = this.field;

    if ( !field || !field.errors ) {

      return null;

    }

    const errors = [];

    const config = {
      'passwordMatch': 'Ваши пароли не совпадают',
      'required': 'Обязательное поле!',
      'email': 'Неарвельно введен Email',
      'pattern': 'Неарвельно введены данные',
      'maxlength': 'Вы ввели много символов!',
      'minlength': 'Вы ввели недостаточно символов!'
    };

    Object.keys(field.errors).forEach((error: string) => {

      errors.push(config[error]);

    });

    return errors;
  }

}
