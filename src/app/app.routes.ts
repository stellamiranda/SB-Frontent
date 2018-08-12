import { RouterModule, Routes } from '@angular/router';

// Compounents
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';


// Routes declarations
const APP_ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'login', component: LoginComponent,
    },
    {
        path: 'register', component: RegisterComponent
    },
    { path: '**', component: PagenotfoundComponent },
];

// Export routes
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

