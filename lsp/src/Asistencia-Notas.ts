// Interfaz que define el seguimiento
interface ISeguimiento {
    registrar(): void;
    obtenerRegistro(): any;
}

// Clase que representa a un estudiante
class Estudiante {
    private id: number;
    private nombre: string;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }

    getNombre(): string {
        return this.nombre;
    }
}

// Clase para el seguimiento de la asistencia
class SeguimientoAsistencia implements ISeguimiento {
    private estudiante: Estudiante;
    private asistencia: { [fecha: string]: boolean } = {};

    constructor(estudiante: Estudiante) {
        this.estudiante = estudiante;
    }

    registrarAsistencia(fecha: string, asistio: boolean) {
        this.asistencia[fecha] = asistio;
    }

    registrar(): void {
        // Este método podría implementar lógica adicional si es necesario
    }

    obtenerRegistro(): { [fecha: string]: boolean } {
        return this.asistencia;
    }
}

// Clase para el seguimiento de las calificaciones
class SeguimientoCalificaciones implements ISeguimiento {
    private estudiante: Estudiante;
    private calificaciones: { [materia: string]: number } = {};

    constructor(estudiante: Estudiante) {
        this.estudiante = estudiante;
    }

    registrarCalificacion(materia: string, calificacion: number) {
        this.calificaciones[materia] = calificacion;
    }

    registrar(): void {
        // Este método podría implementar lógica adicional si es necesario
    }

    obtenerRegistro(): { [materia: string]: number } {
        return this.calificaciones;
    }
}

// Servicio que orquesta el seguimiento
class GestionSeguimiento {
    gestionarRegistro(seguimiento: ISeguimiento) {
        seguimiento.registrar();
    }

    obtenerRegistro(seguimiento: ISeguimiento): any {
        return seguimiento.obtenerRegistro();
    }
}

// Uso de las clases para simular el seguimiento de asistencia y calificaciones
const estudiante1 = new Estudiante(1, "John Doe");

const seguimientoAsistencia = new SeguimientoAsistencia(estudiante1);
seguimientoAsistencia.registrarAsistencia("2024-05-27", true);
seguimientoAsistencia.registrarAsistencia("2024-05-28", false);

const seguimientoCalificaciones = new SeguimientoCalificaciones(estudiante1);
seguimientoCalificaciones.registrarCalificacion("Matemáticas", 85);
seguimientoCalificaciones.registrarCalificacion("Historia", 90);

const gestionSeguimiento = new GestionSeguimiento();

gestionSeguimiento.gestionarRegistro(seguimientoAsistencia);
gestionSeguimiento.gestionarRegistro(seguimientoCalificaciones);

console.log(`Registro de asistencia para ${estudiante1.getNombre()}:`, gestionSeguimiento.obtenerRegistro(seguimientoAsistencia));
console.log(`Registro de calificaciones para ${estudiante1.getNombre()}:`, gestionSeguimiento.obtenerRegistro(seguimientoCalificaciones));
