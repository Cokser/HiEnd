import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthService} from './auth.service';
// import {NotifyService} from "../core/notify.service";
// import {AuthGuard} from "../core/auth.guard";
import {ConfirmComponent} from './confirm/confirm.component';
import {ValidatorMessagesComponent} from '../shared/validator-messages/validator-messages.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent],
  declarations: [
    RegistrationComponent,
    AuthComponent,
    ConfirmComponent,
    ValidatorMessagesComponent
  ],
  providers: [AuthService]
})
export class AuthModule {
}
