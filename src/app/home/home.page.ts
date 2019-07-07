import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    constructor(public router: Router) {}

    showChatInfo(): boolean {
        return this.router.url.indexOf('chat-info') > -1 ? true : false;
    }

    openChatInfo(): void {
        this.router.navigate([{ outlets: { primary: 'home/chat-info' } }]);
    }
}
