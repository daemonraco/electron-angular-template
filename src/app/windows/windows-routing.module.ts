import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { SubwindowComponent } from './subwindow/subwindow.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'subwindow', component: SubwindowComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WindowsRoutingModule { }
