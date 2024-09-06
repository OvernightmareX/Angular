import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "admin", component: AdminComponent},
    {path: "panier", component: PanierComponent},
    {path: "home", redirectTo: ''},
    {path: "**", redirectTo: ''},
];
