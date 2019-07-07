import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'chat-info',
    templateUrl: './chat-info.component.html',
    styleUrls: ['./chat-info.component.scss']
})
export class ChatInfoComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    closeChatInfo(): void {
        this.router.navigate([{ outlets: { primary: 'home' } }]);
    }
}
