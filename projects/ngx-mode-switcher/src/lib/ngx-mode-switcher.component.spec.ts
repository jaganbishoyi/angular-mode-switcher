import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxModeSwitcherComponent } from './ngx-mode-switcher.component';

describe('NgxModeSwitcherComponent', () => {
    let component: NgxModeSwitcherComponent;
    let fixture: ComponentFixture<NgxModeSwitcherComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxModeSwitcherComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NgxModeSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
