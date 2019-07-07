import { Router } from '@angular/router';
export class CoreComponent {
    constructor(private router: Router) {}

    openUserSettings(): void {
        this.router.navigate([{ outlets: { sidebar: 'user-settings' } }]);
    }
}
