// braille_th.js
module.exports = {
    'Table' : {
        'ก' : '\u281b'
    }
}
//index.js
var braille_tab = require('./braille_th');
console.log(braille_tab.Table['ก']);
