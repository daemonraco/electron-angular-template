'use strict';

const {
    Menu,
    app,
    shell,
} = require('electron');

module.exports = {
    setDefaultMenu: ({ window }) => {
        const menu = Menu.buildFromTemplate([{
            label: '&File',
            submenu: [{
                label: 'JUST CLICK IT!',
                click() {
                    window.webContents.send('just-click-it', { some: 'data' });
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
        }]);
        Menu.setApplicationMenu(menu);
    }
};
