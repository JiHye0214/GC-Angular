import { Routes } from '@angular/router';
import { Tasks } from './pages/tasks/tasks';
import { Home } from './pages/home/home';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'tasks', component: Tasks },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
];
