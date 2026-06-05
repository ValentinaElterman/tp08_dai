import 'dotenv/config' 
import fs from 'fs';  

class LogHelper {     
    constructor() {         
        this.filePath            = process.env.LOG_FILE_PATH;         
        this.fileName            = process.env.LOG_FILE_NAME;         
        this.logToFileEnabled    = process.env.LOG_TO_FILE_ENABLED.toLowerCase() === 'true';         
        this.logToConsoleEnabled = process.env.LOG_TO_CONSOLE_ENABLED.toLowerCase() === 'true'; 
    }      
        
    /** 
     *Este método almacena en un archivo de texto y/o por muestra consola información del Error.      
    * @param {*} errorObject      
    */     
   
     logError(errorObject) {         
        //YYYY-MM-DDTHH:mm:ss --> toISOString
        const mensaje = "[" + new Date().toISOString() + "] ERROR: " + errorObject.message + "\n";

        // Si la consola está activada (es igual a true), mostramos el error en la pantalla
        if (this.logToConsoleEnabled === true) {
            console.error(mensaje);
        }

        // Si el archivo está activado (es igual a true), lo guardamos en el disco
        if (this.logToFileEnabled === true) {
            
            // Si la carpeta NO existe (es igual a false), le decimos a Node.js que la cree
            if (fs.existsSync(this.filePath) === false) {
                fs.mkdirSync(this.filePath, { recursive: true });
            }
            
            // Juntamos la ruta de la carpeta con el nombre del archivo
            const rutaCompleta = this.filePath + this.fileName;

            // Guardamos el texto al final del archivo
            fs.appendFileSync(rutaCompleta, mensaje, 'utf-8');
        }
    }     
}
export default new LogHelper();