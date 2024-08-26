import { TestBed } from '@angular/core/testing';
import { ModeLocalStorageService } from './ngx-mode-storage.service';
import { Mode } from 'ngx-mode-switcher';

describe('ModeLocalStorageService', () => {
    let service: ModeLocalStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ModeLocalStorageService]
        });
        TestBed.configureTestingModule({});
        service = TestBed.inject(ModeLocalStorageService);
    });

    beforeEach(() => {
        localStorage.clear();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('should save mode data to localStorage', () => {
        it('isSystem = true', () => {
            const mode: Mode = Mode.DARK;
            const isSystem = true;

            service.save(mode, isSystem);

            const storedData = JSON.parse(localStorage.getItem("ngx-mode-switcher") || '{}');
            expect(storedData.mode).toBe(mode);
            expect(storedData.isSystem).toBe(isSystem);
        });

        it('isSystem = false', () => {
            const mode: Mode = Mode.DARK;

            service.save(mode);

            const storedData = JSON.parse(localStorage.getItem("ngx-mode-switcher") || '{}');
            expect(storedData.mode).toBe(mode);
        });


    });

    it('should retrieve mode data from localStorage', () => {
        const mode: Mode = Mode.LIGHT;
        const isSystem = false;
        const modeData = { mode, isSystem };

        localStorage.setItem("ngx-mode-switcher", JSON.stringify(modeData));

        const result = service.getMode();
        expect(result).toBe(JSON.stringify(modeData));
    });
});
