import { Camion } from './camion';
import { PorcentajeCarga } from './porcentajeCarga';
import { Etapa } from './etapa';
import { EtapaProgreso } from './etapaProgreso';

export class Carga {
    id: number;
    camion: Camion;
    anden: string;
    etapas: Etapa[];

    public getStep(name : string) {
        return this.etapas[this.getStepIndex(name)];
    }

    public getStepIndex(name : string) {
        return this.etapas.findIndex(etapa => etapa.nombre == name);
    }
}
