import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreComponent } from './../abstract-components';

@Component({
    selector: 'app-directs',
    templateUrl: './directs.component.html',
    styleUrls: ['./directs.component.scss']
})
export class DirectsComponent extends CoreComponent implements OnInit {
    constructor(router: Router) {
        super(router);
    }

    ngOnInit() {}
}
