import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MODE_STORAGE_SERVICE } from './ng-mode-storage.service';
import { Mode, IModeStorage } from './ng-mode-switcher.model';

@Injectable()
export class NgModeSwitcherService {
    private currentMode: Mode = Mode.LIGHT;

    private modeChangedSubject = new BehaviorSubject(this.currentMode);

    modeChanged$: Observable<Mode>;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(MODE_STORAGE_SERVICE) private modeStorage: IModeStorage
    ) {
        this.modeChanged$ = this.modeChangedSubject.asObservable();
        this.init();
    }

    private updateCurrentMode(mode: Mode, isSystem = false): void {
        this.currentMode = mode;
        this.modeStorage.save(this.currentMode, isSystem);
        this.modeChangedSubject.next(this.currentMode);
    }

    private init(): void {
        const initMode = JSON.parse(this.modeStorage.getMode());

        if (initMode && initMode.mode) {
            this.updateCurrentMode(initMode.mode, initMode.isSystem);
        } else {
            const deviceMode = window.matchMedia("(prefers-color-scheme: dark)");
            let mode: Mode = Mode.SYSTEM;

            deviceMode.matches ? (mode = Mode.DARK) : (mode = Mode.LIGHT);
            this.updateCurrentMode(mode, deviceMode.matches);
        }

        this.document.body.classList.add(this.currentMode);
    }

    switchMode(mode: Mode, isSystem = false): void {
        this.document.body.classList.remove(Mode.LIGHT);
        this.document.body.classList.remove(Mode.DARK);
        this.document.body.classList.add(mode);
        this.updateCurrentMode(mode, isSystem);
    }
}
