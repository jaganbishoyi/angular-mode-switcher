import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModeSwitcherComponent } from './ng-mode-switcher.component';

describe('NgModeSwitcherComponent', () => {
    let component: NgModeSwitcherComponent;
    let fixture: ComponentFixture<NgModeSwitcherComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgModeSwitcherComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NgModeSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
