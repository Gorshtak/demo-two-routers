import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DirectsComponent } from './directs/directs.component';
import { GroupsComponent } from './groups/groups.component';
import { PatientsComponent } from './patients/patients.component';
import { SidebarPage } from './sidebar.page';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
    {
        path: '',
        component: SidebarPage,
        outlet: 'sidebar',
        children: [
            {
                path: '',
                component: DirectsComponent
            },
            {
                path: 'directs',
                component: DirectsComponent
            },
            {
                path: 'groups',
                component: GroupsComponent
            },
            {
                path: 'patients',
                component: PatientsComponent
            },
            {
                path: 'user-settings',
                component: UserSettingsComponent
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [SidebarPage, DirectsComponent, GroupsComponent, PatientsComponent, UserSettingsComponent],
    exports: [SidebarPage, DirectsComponent, GroupsComponent, PatientsComponent, UserSettingsComponent]
})
export class SidebarPageModule {}
