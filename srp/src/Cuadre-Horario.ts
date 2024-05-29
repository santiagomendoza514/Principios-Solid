// Clase que representa a un estudiante
class Estudiante {
    private id: number;
    private nombre: string;
    private materiasInscritas: Materia[] = [];

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }

    inscribir(materia: Materia) {
        this.materiasInscritas.push(materia);
    }

    getMateriasInscritas(): Materia[] {
        return this.materiasInscritas;
    }
}

// Clase que representa una materia
class Materia {
    private id: number;
    private titulo: string;
    private creditos: number;

    constructor(id: number, titulo: string, creditos: number) {
        this.id = id;
        this.titulo = titulo;
        this.creditos = creditos;
    }

    getId(): number {
        return this.id;
    }

    getTitulo(): string {
        return this.titulo;
    }

    getCreditos(): number {
        return this.creditos;
    }
}

// Clase que representa un semestre
class Semestre {
    private id: number;
    private nombre: string;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }

    getId(): number {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }
}

// Clase que gestiona la inscripción de una materia
class Inscripcion {
    private estudiante: Estudiante;
    private materia: Materia;
    private semestre: Semestre;

    constructor(estudiante: Estudiante, materia: Materia, semestre: Semestre) {
        this.estudiante = estudiante;
        this.materia = materia;
        this.semestre = semestre;
    }

    inscribir() {
        this.estudiante.inscribir(this.materia);
        console.log(`Estudiante ${this.estudiante['nombre']} inscrito en la materia ${this.materia.getTitulo()} para el semestre ${this.semestre.getNombre()}.`);
    }
}

// Servicio que orquesta el proceso de inscripción
class InscripcionService {
    inscribirEstudianteEnMateria(estudiante: Estudiante, materia: Materia, semestre: Semestre) {
        const inscripcion = new Inscripcion(estudiante, materia, semestre);
        inscripcion.inscribir();
    }
}

// Uso de las clases para simular el proceso de inscripción
const estudiante = new Estudiante(1, "John Doe");
const materia1 = new Materia(101, "Matemáticas", 3);
const materia2 = new Materia(102, "Historia", 2);
const semestre = new Semestre(1, "Primavera 2024");

const inscripcionService = new InscripcionService();

inscripcionService.inscribirEstudianteEnMateria(estudiante, materia1, semestre);
inscripcionService.inscribirEstudianteEnMateria(estudiante, materia2, semestre);

console.log(`Materias inscritas para ${estudiante['nombre']}:`, estudiante.getMateriasInscritas().map(materia => materia.getTitulo()));
