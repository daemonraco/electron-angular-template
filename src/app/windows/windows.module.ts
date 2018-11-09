import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';

import { WindowsRoutingModule } from './windows-routing.module';
import { SubwindowComponent } from './subwindow/subwindow.component';

@NgModule({
    declarations: [
        MainComponent,
        SubwindowComponent,
    ],
    exports: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        WindowsRoutingModule,
    ],
})
export class WindowsModule { }
