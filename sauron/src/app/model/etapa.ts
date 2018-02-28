import { Estado } from './estado';

export class Etapa {
    nombre: string;
    hora?: Date; // hora a la que llego
    horaEstimada?: Date; // hora a la que deberia llegar
    estado: Estado;
    ignoreCompletion: boolean;

    constructor(data?: Partial<Etapa>) {
        Object.assign(this, data);
    }

    getValue(): any {
        if (this.horaEstimada && !this.hora) return this.horaEstimada;
        return this.hora;
    }

    isCompleted(overrideProperties: boolean = false) {
        if (this.ignoreCompletion) {
            if(!overrideProperties) return false;
        }
        switch (this.estado) {
            case Estado.DEMORADO: case Estado.TARDE: case Estado.FINALIZADO:
                return true;
            default:
                return false;
        }
    }
}