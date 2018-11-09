'use strict';

const libPaths = [
    './includes/menus',
    './includes/subwindow',
];

module.exports = async args => {
    for (const libPath of libPaths) {
        const lib = require(libPath);
        if (lib && lib.init !== undefined) {
            await lib.init(args);
        }
    }
};
