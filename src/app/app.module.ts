import { BrowserModule } from '@angular/platform-browser';
import { ElectronService, NgxElectronModule } from 'ngx-electron';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppInitFactory } from './app.init';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicsModule } from './basics/basics.module';
import { WindowsModule } from './windows/windows.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BasicsModule,
        BrowserModule,
        FontAwesomeModule,
        NgxElectronModule,
        RouterModule.forRoot([], { enableTracing: true, useHash: true }),
        WindowsModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: AppInitFactory,
            deps: [
                ElectronService,
            ],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
