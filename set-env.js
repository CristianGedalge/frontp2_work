const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

// Cargar variables desde el .env local del Frontend
const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });

// Directorio destino
const targetPath = './src/environments/environment.ts';
const envDirectory = './src/environments';

// Asegurarse de que el directorio exista
if (!fs.existsSync(envDirectory)) {
  fs.mkdirSync(envDirectory, { recursive: true });
}

// Variables por defecto (si no están en el .env, usa estas de fallback)
const API_URL = process.env.API_URL || 'https://backend-principal.up.railway.app';

const envConfigFile = `
export const environment = {
  production: true, // Siempre en true para evitar el error de importación si no hay environment.development.ts
  apiUrl: '${API_URL}'
};
`;

console.log('Generando archivo de entorno con la URL:', API_URL);

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log("El archivo " + targetPath + " fue generado correctamente.");
  }
});
