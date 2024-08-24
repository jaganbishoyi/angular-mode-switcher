import { NgModule } from '@angular/core';
import { NgxModeSwitcherComponent } from './ngx-mode-switcher.component';
import { MODE_STORAGE_SERVICE, ModeLocalStorageService } from './ngx-mode-storage.service';
import { NgxModeSwitcherService } from './ngx-mode-switcher.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NgxModeSwitcherComponent
    ],
    providers: [
        NgxModeSwitcherService,
        {
            provide: MODE_STORAGE_SERVICE,
            useClass: ModeLocalStorageService,
        },
    ],
    imports: [CommonModule],
    exports: [
        NgxModeSwitcherComponent
    ]
})
export class NgxModeSwitcherModule { }
