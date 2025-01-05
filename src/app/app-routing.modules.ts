import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '../app/features/navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ProtectedComponent } from './components/protected/components/protected/protected.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}, 
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'navigation', component: NavigationComponent },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }