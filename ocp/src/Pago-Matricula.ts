// Clase base que representa un recibo
abstract class Recibo {
    protected estudiante: Estudiante;
    protected semestre: Semestre;
    protected montoBase: number;

    constructor(estudiante: Estudiante, semestre: Semestre, montoBase: number) {
        this.estudiante = estudiante;
        this.semestre = semestre;
        this.montoBase = montoBase;
    }

    // Método que deben implementar las subclases
    abstract calcularTotal(): number;

    // Genera el recibo con el total calculado
    generarRecibo(): void {
        const total = this.calcularTotal();
        console.log(`Recibo para ${this.estudiante.getNombre()} - Semestre: ${this.semestre.getNombre()} - Total a pagar: $${total}`);
    }
}

// Subclase para recibos de estudiantes nacionales
class ReciboEstudianteNacional extends Recibo {
    calcularTotal(): number {
        return this.montoBase;
    }
}

// Subclase para recibos de estudiantes internacionales
class ReciboEstudianteInternacional extends Recibo {
    calcularTotal(): number {
        const recargoInternacional = 500; // Recargo adicional para estudiantes internacionales
        return this.montoBase + recargoInternacional;
    }
}

// Subclase para recibos de estudiantes con beca
class ReciboEstudianteConBeca extends Recibo {
    private descuento: number;

    constructor(estudiante: Estudiante, semestre: Semestre, montoBase: number, descuento: number) {
        super(estudiante, semestre, montoBase);
        this.descuento = descuento;
    }

    calcularTotal(): number {
        return this.montoBase - this.descuento;
    }
}

// Servicio que orquesta la generación de recibos
class GeneradorDeRecibos {
    generarRecibo(recibo: Recibo): void {
        recibo.generarRecibo();
    }
}

// Clases de apoyo
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

class Semestre {
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

// Uso de las clases para generar recibos
const estudianteNacional = new Estudiante(1, "John Doe");
const estudianteInternacional = new Estudiante(2, "Jane Smith");
const estudianteConBeca = new Estudiante(3, "Alice Brown");
const semestre = new Semestre(1, "Primavera 2024");

const montoBase = 2000;

const reciboNacional = new ReciboEstudianteNacional(estudianteNacional, semestre, montoBase);
const reciboInternacional = new ReciboEstudianteInternacional(estudianteInternacional, semestre, montoBase);
const reciboConBeca = new ReciboEstudianteConBeca(estudianteConBeca, semestre, montoBase, 1000);

const generadorDeRecibos = new GeneradorDeRecibos();

generadorDeRecibos.generarRecibo(reciboNacional);
generadorDeRecibos.generarRecibo(reciboInternacional);
generadorDeRecibos.generarRecibo(reciboConBeca);
