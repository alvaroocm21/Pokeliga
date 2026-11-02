// Copia la web ya compilada a www/ (la carpeta que Capacitor empaqueta dentro de la app).
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const f of ['index.html', 'manifest.webmanifest']) fs.copyFileSync(path.join(root, f), path.join(out, f));   // sin sw.js: dentro de la app no hace falta
for (const d of ['assets', 'icons']) fs.cpSync(path.join(root, d), path.join(out, d), { recursive: true });
console.log('www/ listo');
