import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        PagesRoutingModule,
    ],
})
export class PagesModule { }
