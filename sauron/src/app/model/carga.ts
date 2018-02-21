import { Camion } from './camion';
import { PorcentajeCarga } from './porcentajeCarga';

export class Carga {
    id: number;
    camion: Camion;
    anden: string;
    llegadaRDC: Date;
    enrampe?: Date;
    empiezaCarga?: Date;
    porcentaje?: PorcentajeCarga;
    terminaCarga?: Date;
    initFacturacion?: Date;
    endFacturacion?: Date;
    salidaRDC?: Date;
    llegadaDeposito?: Date;
}
