import { Injectable, InjectionToken } from "@angular/core";
import { IModeStorage, Mode } from './ngx-mode-switcher.model';

export const MODE_STORAGE_SERVICE = new InjectionToken<IModeStorage>("MODE_STORAGE");

@Injectable()
export class ModeLocalStorageService implements IModeStorage {
    save(mode: Mode, isSystem = false): void {
        const modeData = {
            mode: mode,
            isSystem: isSystem
        };
        localStorage.setItem("ngx-mode-switcher", JSON.stringify(modeData));
    }

    getMode(): string {
        return <string>localStorage.getItem("ngx-mode-switcher");
    }
}
