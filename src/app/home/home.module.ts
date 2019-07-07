import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatInfoComponent } from './chat-info/chat-info.component';
import { HomePage } from './home.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage,
                children: [
                    {
                        path: 'chat-info'
                    }
                ]
            }
        ])
    ],
    declarations: [HomePage, ChatInfoComponent]
})
export class HomePageModule {}
