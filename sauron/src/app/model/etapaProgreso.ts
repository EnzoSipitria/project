import { Etapa } from "./etapa";

export class EtapaProgreso extends Etapa {

    progreso? : number;

    constructor(data?: Partial<EtapaProgreso>) {
        super();
        Object.assign(this, data);
    }

    getValue(){
        return this.progreso;
    }
}