import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreComponent } from './../abstract-components';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent extends CoreComponent implements OnInit {
    constructor(router: Router) {
        super(router);
    }

    ngOnInit() {}
}
