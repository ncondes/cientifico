import router from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

// CommonJS
require('regenerator-runtime/runtime');

// ECMAScript 2015
import 'regenerator-runtime/runtime.js';
