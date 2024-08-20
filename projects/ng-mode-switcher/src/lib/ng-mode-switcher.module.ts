import { NgModule } from '@angular/core';
import { NgModeSwitcherComponent } from './ng-mode-switcher.component';
import { MODE_STORAGE_SERVICE, ModeLocalStorageService } from './ng-mode-storage.service';
import { NgModeSwitcherService } from './ng-mode-switcher.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NgModeSwitcherComponent
    ],
    providers: [
        NgModeSwitcherService,
        {
            provide: MODE_STORAGE_SERVICE,
            useClass: ModeLocalStorageService,
        },
    ],
    imports: [CommonModule],
    exports: [
        NgModeSwitcherComponent
    ]
})
export class NgModeSwitcherModule { }
