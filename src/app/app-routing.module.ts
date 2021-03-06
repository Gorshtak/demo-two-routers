import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SidebarPageModule } from './sidebar/sidebar.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), SidebarPageModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
