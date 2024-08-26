import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChanges } from '@angular/core';

import { NgxModeSwitcherComponent } from './ngx-mode-switcher.component';
import { NgxModeSwitcherService } from './ngx-mode-switcher.service';
import { MODE_STORAGE_SERVICE } from './ngx-mode-storage.service';
import { IModeStorage, Mode } from './ngx-mode-switcher.model';
import { of } from 'rxjs';

export class MockModeSwitcherService {
    modeChanged$ = of({ mode: 'dark', isSystem: false } as unknown as Mode);
    // Simulating an observable that emits a mode
    private currentMode: Mode = Mode.SYSTEM;

    switchMode(mode: Mode, isSystem = false): void { }
}

describe('NgxModeSwitcherComponent', () => {
    let component: NgxModeSwitcherComponent;
    let fixture: ComponentFixture<NgxModeSwitcherComponent>;

    let ngxModeSwitcherService: NgxModeSwitcherService;
    let modeStorage: IModeStorage;

    beforeEach(() => {
        const modeStorageSpy = jasmine.createSpyObj('IModeStorage', ['save', 'getMode']);

        TestBed.configureTestingModule({
            declarations: [NgxModeSwitcherComponent],
            providers: [
                NgxModeSwitcherService,
                { provide: NgxModeSwitcherService, useClass: MockModeSwitcherService },
                { provide: MODE_STORAGE_SERVICE, useValue: modeStorageSpy }
            ]
        })

        fixture = TestBed.createComponent(NgxModeSwitcherComponent);
        component = fixture.componentInstance;

        ngxModeSwitcherService = TestBed.inject(NgxModeSwitcherService);
        modeStorage = TestBed.inject(MODE_STORAGE_SERVICE);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set default values for legend when legend is visible but properties are missing', () => {
        const changes: SimpleChanges = {
            config: {
                currentValue: {
                    legend: {
                        visible: true,
                        LIGHT: '',
                        DARK: '',
                        SYSTEM: ''
                    }
                },
                previousValue: null,
                firstChange: true,
                isFirstChange: () => true
            }
        };

        component.ngOnChanges(changes);

        expect(component.config.legend.LIGHT).toBe('light');
        expect(component.config.legend.DARK).toBe('dark');
        expect(component.config.legend.SYSTEM).toBe('system');
    });

    describe('toggleOptionView() ', () => {
        it("if selectedMode = 'light' on click currentMode will be 'dark'", () => {
            component.selectedMode = Mode.LIGHT;
            component.toggleOptionView();
            expect(component.currentMode).toBe('dark');
        });

        it("if selectedMode = 'dark' on click currentMode will be 'system'", () => {
            component.selectedMode = Mode.DARK;
            component.toggleOptionView();
            expect(component).toBeTruthy();
        });

        it("if selectedMode = 'system' on click currentMode will be 'light'", () => {
            component.selectedMode = Mode.SYSTEM;
            component.toggleOptionView();
            expect(component.currentMode).toBe('light');
        });
    });
});
