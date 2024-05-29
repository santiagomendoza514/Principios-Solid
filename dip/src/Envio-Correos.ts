// Interfaz que define los métodos para enviar correos electrónicos
interface ICorreoService {
    enviarCorreo(destinatario: string, asunto: string, cuerpo: string): void;
}

// Implementación de la interfaz utilizando un servicio SMTP
class CorreoSMTPService implements ICorreoService {
    enviarCorreo(destinatario: string, asunto: string, cuerpo: string): void {
        // Aquí iría la lógica para enviar el correo usando SMTP
        console.log(`Enviando correo a ${destinatario} con asunto "${asunto}" y cuerpo "${cuerpo}" utilizando SMTP.`);
    }
}

// Clase que representa a un estudiante
class Estudiante {
    private id: number;
    private nombre: string;
    private correo: string;

    constructor(id: number, nombre: string, correo: string) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
    }

    getCorreo(): string {
        return this.correo;
    }

    getNombre(): string {
        return this.nombre;
    }
}

// Clase que gestiona la comunicación por correo electrónico
class GestionCorreo {
    private correoService: ICorreoService;

    constructor(correoService: ICorreoService) {
        this.correoService = correoService;
    }

    enviarCorreoBienvenida(estudiante: Estudiante): void {
        const asunto = "Bienvenido a la Universidad";
        const cuerpo = `Hola ${estudiante.getNombre()},\n\nBienvenido a la Universidad. Nos alegra tenerte con nosotros.`;
        this.correoService.enviarCorreo(estudiante.getCorreo(), asunto, cuerpo);
    }
}

// Uso de las clases para enviar correos electrónicos
const correoService = new CorreoSMTPService();
const gestionCorreo = new GestionCorreo(correoService);

const estudiante1 = new Estudiante(1, "John Doe", "john.doe@example.com");

gestionCorreo.enviarCorreoBienvenida(estudiante1);
