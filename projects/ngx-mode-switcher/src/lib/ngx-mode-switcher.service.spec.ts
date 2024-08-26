import { TestBed } from '@angular/core/testing';
import { NgxModeSwitcherService } from './ngx-mode-switcher.service';
import { MODE_STORAGE_SERVICE } from './ngx-mode-storage.service';
import { Mode } from './ngx-mode-switcher.model';
import { DOCUMENT } from '@angular/common';

describe('NgxModeSwitcherService', () => {
    let service: NgxModeSwitcherService;
    let documentMock: Document;
    let initSpy: jasmine.Spy;

    beforeEach(() => {
        const modeStorageSpy = jasmine.createSpyObj('IModeStorage', ['save', 'getMode']);

        documentMock = {
            body: {
                classList: {
                    add: jasmine.createSpy('add'),
                    remove: jasmine.createSpy('remove')
                }
            },
            querySelectorAll: jasmine.createSpy('querySelectorAll').and.returnValue([])
        } as unknown as Document;

        // Set up spies
        initSpy = spyOn(NgxModeSwitcherService.prototype as any, 'init').and.callThrough();

        TestBed.configureTestingModule({
            providers: [
                NgxModeSwitcherService,
                { provide: DOCUMENT, useValue: documentMock },
                { provide: MODE_STORAGE_SERVICE, useValue: modeStorageSpy }
            ]
        });

        service = TestBed.inject(NgxModeSwitcherService);
    });

    it('should initialize correctly', () => {
        // Verify that the init method is called
        expect(initSpy).toHaveBeenCalled();

        // Verify that modeChanged$ observable is set up
        expect(service.modeChanged$).toBeDefined();

        // Add more assertions as needed to check other initialization logic
    });

    it('should call document.body.classList.add when switchMode is called', () => {
        service.switchMode(Mode.DARK);

        expect(documentMock.body.classList.add).toHaveBeenCalledWith('dark');
    });
});
