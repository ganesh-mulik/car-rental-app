import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { CarsComponent } from './pages/cars/cars.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:"",redirectTo:"login",pathMatch:'full'},
    {path:"login",component:LoginComponent},
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"dashboard",component:DashboardComponent
            },
            {
                path:"bookings",component:BookingsComponent
            },
            {
                path:"cars",component:CarsComponent
            }
        ]
    }
];
