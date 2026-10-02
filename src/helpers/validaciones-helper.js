require('dotenv').config();
const fs = require('fs');
const path = require('path');

class LogHelper {     
    constructor() {         
        // Usamos siempre una carpeta "logs" dentro del proyecto para evitar errores de disco/ruta
        this.filePath            = path.join(__dirname, '../../logs');         
        this.fileName            = process.env.LOG_FILE_NAME || 'error.log';         
        this.logToFileEnabled    = (process.env.LOG_TO_FILE_ENABLED || 'true').toLowerCase() === 'true';         
        this.logToConsoleEnabled = (process.env.LOG_TO_CONSOLE_ENABLED || 'true').toLowerCase() === 'true'; 
    }      
        
    logError(errorObject) {     
        try {
            const errorMsg = errorObject ? (errorObject.stack || errorObject.message || errorObject) : 'Error desconocido';
            const mensaje = "[" + new Date().toISOString() + "] ERROR: " + errorMsg + "\n";

            if (this.logToConsoleEnabled) {
                console.error("LOG CONSOLA:", mensaje);
            }

            if (this.logToFileEnabled) {
                if (!fs.existsSync(this.filePath)) {
                    fs.mkdirSync(this.filePath, { recursive: true });
                }
                
                const rutaCompleta = path.join(this.filePath, this.fileName);
                fs.appendFileSync(rutaCompleta, mensaje);
            }
        } catch (err) {
            console.error("Falló la escritura del log en archivo:", err);
        }
    }     
}

module.exports = new LogHelper();