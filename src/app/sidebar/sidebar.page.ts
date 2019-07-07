import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.page.html',
    styleUrls: ['./sidebar.page.scss']
})
export class SidebarPage implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    openTab(tab: string): void {
        switch (tab) {
            case 'groups':
                this.router.navigate([{ outlets: { sidebar: 'groups' } }]);
                break;
            case 'directs':
                this.router.navigate([{ outlets: { sidebar: 'directs' } }]);
                break;
            case 'patients':
                this.router.navigate([{ outlets: { sidebar: 'patients' } }]);
                break;
            default:
                break;
        }
    }
}
