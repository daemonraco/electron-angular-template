'use strict';

const {
    Menu,
    app,
    ipcMain,
    shell,
} = require('electron');

const setDefaultMenu = ({ window }) => {
    Menu.setApplicationMenu(Menu.buildFromTemplate([{
        label: '&File',
        submenu: [{
            label: 'JUST CLICK IT!',
            click() {
                window.webContents.send('just-click-it', { some: 'data' });
            }
        }, {
            label: 'Sub Window',
            click() {
                ipcMain.emit('open-sub-window', { parent: window });
            }
        }, {
            type: 'separator',
        }, {
            label: '&Exit',
            click() {
                app.quit();
            }
        }]
    }, {
        label: '&Help',
        submenu: [{
            label: 'Author',
            click() {
                shell.openExternal('https://github.com/daemonraco');
            }
        }]
    }]));
};

module.exports = {
    init: args => {
        setDefaultMenu(args);
    },
    setDefaultMenu,
};
