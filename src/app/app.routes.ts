import { PagesComponent } from './pages/pages.component';
import {RouterModule, Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const appRoutes:Routes = [
   
    
    { path: 'login',component: LoginComponent },
    { path: 'register',component: RegisterComponent },
    
   
    { path: '**',component: DashboardComponent },

];
export const APP_ROUTES =RouterModule.forRoot(appRoutes, { useHash:true });