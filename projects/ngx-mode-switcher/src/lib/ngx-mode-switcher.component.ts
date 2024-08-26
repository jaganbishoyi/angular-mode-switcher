import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxModeSwitcherService } from './ngx-mode-switcher.service';
import { IConfig, IModeStorage, Mode } from './ngx-mode-switcher.model';
import { MODE_STORAGE_SERVICE } from './ngx-mode-storage.service';

@Component({
    selector: 'ngx-mode-switcher',
    templateUrl: "./ngx-mode-switcher.component.html",
    styleUrls: ['./ngx-mode-switcher.component.scss']
})
export class NgxModeSwitcherComponent implements OnChanges {
    @Input() config: IConfig = {
        legend: {
            visible: true,
            LIGHT: "light",
            DARK: "dark",
            SYSTEM: "system"
        }
    };

    currentMode: Mode = Mode.SYSTEM;
    selectedMode: Mode = Mode.SYSTEM;
    isSystem = false;

    constructor(
        private modeSwitcherService: NgxModeSwitcherService,
        @Inject(MODE_STORAGE_SERVICE) private modeStorage: IModeStorage
    ) {
        this.modeSwitcherService.modeChanged$.subscribe((mode: Mode) => {
            this.currentMode = mode;
            let currentMode = JSON.parse(this.modeStorage.getMode());
            this.selectedMode = currentMode.isSystem ? 'system' : currentMode.mode;
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes['config']) {
            const customConfig = changes['config'].currentValue;

            if (customConfig.legend.visible) {
                if (!customConfig.legend.LIGHT) {
                    this.config["legend"]["LIGHT"] = 'light';
                }

                if (!customConfig.legend.DARK) {
                    this.config["legend"]["DARK"] = 'dark';
                }

                if (!customConfig.legend.SYSTEM) {
                    this.config["legend"]["SYSTEM"] = 'system';
                }
            }
        }
    }

    changeMode(mode: string): void {
        switch (mode) {
            case 'light':
                this.currentMode = Mode.LIGHT;
                this.modeSwitcherService.switchMode(this.currentMode);

                break;

            case 'dark':
                this.currentMode = Mode.DARK;
                this.modeSwitcherService.switchMode(this.currentMode);

                break;

            case 'system':
                const deviceMode = window.matchMedia("(prefers-color-scheme: dark)");
                let mode: Mode = Mode.SYSTEM;
                deviceMode.matches ? (mode = Mode.DARK) : (mode = Mode.LIGHT);
                this.modeSwitcherService.switchMode(mode, true);

                break;
        }

    }

    toggleOptionView(): void {
        switch (this.selectedMode) {
            case 'light':
                this.changeMode('dark');

                break;

            case 'dark':
                this.changeMode('system');

                break;

            case 'system':
                this.changeMode('light');

                break;
        }
    }

}
