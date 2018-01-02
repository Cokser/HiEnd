import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MarkupComponent} from './markup/markup.component';
import {AuthComponent} from './auth/auth.component';

// В данном примере настройки маршрутизации выделены в отдельный модуль.

@NgModule({
  imports: [RouterModule.forRoot([
    // {path: '', redirectTo: '/auth', pathMatch: 'full'},
    // {path: 'auth', component: AuthComponent},
    {path: 'markup', component: MarkupComponent}

  ])],
  exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule {
}
