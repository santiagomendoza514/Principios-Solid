// Interfaz que define los métodos para el préstamo de libros
interface IPrestamo {
    prestarLibro(libro: Libro, estudiante: Estudiante): void;
}

// Interfaz que define los métodos para la devolución de libros
interface IDevolucion {
    devolverLibro(libro: Libro, estudiante: Estudiante): void;
}

// Clase que representa un libro
class Libro {
    private id: number;
    private titulo: string;
    private disponible: boolean;

    constructor(id: number, titulo: string) {
        this.id = id;
        this.titulo = titulo;
        this.disponible = true;
    }

    getId(): number {
        return this.id;
    }

    getTitulo(): string {
        return this.titulo;
    }

    estaDisponible(): boolean {
        return this.disponible;
    }

    setDisponible(disponible: boolean): void {
        this.disponible = disponible;
    }
}

// Clase que representa a un estudiante
class Estudiante {
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

// Clase que implementa el préstamo y la devolución de libros
class Biblioteca implements IPrestamo, IDevolucion {
    private prestamos: { [key: number]: Estudiante } = {};

    prestarLibro(libro: Libro, estudiante: Estudiante): void {
        if (libro.estaDisponible()) {
            libro.setDisponible(false);
            this.prestamos[libro.getId()] = estudiante;
            console.log(`Libro '${libro.getTitulo()}' prestado a ${estudiante.getNombre()}.`);
        } else {
            console.log(`El libro '${libro.getTitulo()}' no está disponible para préstamo.`);
        }
    }

    devolverLibro(libro: Libro, estudiante: Estudiante): void {
        if (!libro.estaDisponible() && this.prestamos[libro.getId()] === estudiante) {
            libro.setDisponible(true);
            delete this.prestamos[libro.getId()];
            console.log(`Libro '${libro.getTitulo()}' devuelto por ${estudiante.getNombre()}.`);
        } else {
            console.log(`El libro '${libro.getTitulo()}' no fue prestado a ${estudiante.getNombre()} o ya fue devuelto.`);
        }
    }
}

// Uso de las clases para simular el préstamo y la devolución de libros
const estudiante1 = new Estudiante(1, "John Doe");
const estudiante2 = new Estudiante(2, "Jane Smith");

const libro1 = new Libro(101, "Introducción a la Programación");
const libro2 = new Libro(102, "Estructuras de Datos");

const biblioteca = new Biblioteca();

biblioteca.prestarLibro(libro1, estudiante1);
biblioteca.prestarLibro(libro2, estudiante2);

biblioteca.devolverLibro(libro1, estudiante1);
biblioteca.devolverLibro(libro2, estudiante2);

biblioteca.prestarLibro(libro1, estudiante2);
