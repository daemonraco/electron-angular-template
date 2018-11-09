import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { faGlasses, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'ui-main',
    templateUrl: './main.component.html',
    styles: []
})
export class MainComponent implements OnInit {
    public data: any = null;
    public icons = { faGlasses, faUser };

    constructor(
        private cd: ChangeDetectorRef,
        private electron: ElectronService) {
    }

    public openWebsite(): void {
        this.electron.shell.openExternal(`https://github.com/daemonraco`);
    }

    ngOnInit() {
        this.electron.ipcRenderer.on('just-click-it', (event, data) => {
            this.data = data;
            this.cd.detectChanges();
        });
    }
}
