import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {AuthComponent} from './auth.component';

const routes: Routes = [
  {path: '', component: AuthComponent, children: [
    {path: 'registration', component: RegistrationComponent},
    {path: 'confirm', component: ConfirmComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
