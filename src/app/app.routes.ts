import { Routes } from '@angular/router';

export const routes: Routes = [{ 
    path: '', loadComponent :() => import('./parent/parent.component').then(m => m.ParentComponent)},
    {path: 'viewRef', loadComponent :() => import('./dynamic-load/dynamic-load.component').then(m => m.DynamicLoadComponent)},
    {path: 'users',loadComponent: () => import('./user-parent-table/user-parent-table.component').then(m => m.UserParentTableComponent)},
    {path: 'form',loadComponent: () => import('./forms/forms.component').then(m => m.FormsComponent)},
    {path: 'view',loadComponent: () => import('./view-child-parent/view-child-parent.component').then(m => m.ViewChildParentComponent)},
    {path: 'flex',loadComponent: () => import('./css-flex/css-flex.component').then(m => m.CssFlexComponent)}
];
