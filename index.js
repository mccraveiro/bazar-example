var bazar = require('bazar');

bazar.set('port', 3000);
bazar.set('connection', 'mongodb://localhost/bazar');

bazar.start();