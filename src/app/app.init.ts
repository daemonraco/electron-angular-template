import { ElectronService } from 'ngx-electron';

export const AppInitFactory = (
    electron: ElectronService) => {
    return async () => {
        console.log(`Initiazing...`);

        // @todo add any initiaization code here.
    };
}
