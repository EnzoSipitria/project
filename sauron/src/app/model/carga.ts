import { Camion } from './camion';
import { PorcentajeCarga } from './porcentajeCarga';
import { Etapa } from './etapa';

export class Carga {
    id: number;
    camion: Camion;
    anden: string;
    etapas: Etapa[];

    public getFullMixIndex() {
        return 3;
    }

}
