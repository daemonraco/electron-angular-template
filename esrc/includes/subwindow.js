'use strict';

const path = require('path');
const {
    BrowserWindow,
    ipcMain,
} = require('electron');

ipcMain.on('open-sub-window', ({ parent }) => {
    let win = new BrowserWindow({ width: 300, height: 300 });

    if (process.env.DEBUG !== undefined) {
        win.webContents.openDevTools();
    }

    win.on('closed', () => {
        win = null;
    });

    win.setMenu(null);

    win.loadURL(path.join(__dirname, '../../ui/index.html#subwindow'));
});
