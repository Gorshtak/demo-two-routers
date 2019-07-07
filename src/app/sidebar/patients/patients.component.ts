import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreComponent } from './../abstract-components';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss']
})
export class PatientsComponent extends CoreComponent implements OnInit {
    constructor(router: Router) {
        super(router);
    }

    ngOnInit() {}
}
