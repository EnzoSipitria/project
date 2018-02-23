import { Estado } from './estado';

export class Etapa {
    nombre: string;
    hora?: Date; // hora a la que llego
    horaEstimada?: Date; // hora a la que deberia llegar
    estado: Estado;

    constructor(data?: Partial<Etapa>) {
        Object.assign(this, data);
    }

    getValue(): any {
        return this.hora;
    }




}