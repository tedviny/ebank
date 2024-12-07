import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '../app/features/navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, 

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }