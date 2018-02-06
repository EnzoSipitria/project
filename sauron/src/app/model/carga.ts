import { Camion } from './camion';

export class Carga {
    id: number;
    camion: Camion;
    anden: string;
    llegadaRDC?: Date;
    enrampe?: Date;
    empiezaCarga?: Date;
    terminaCarga?: Date;
    initFacturacion?: Date;
    endFacturacion?: Date;
    salidaRDC?: Date;
    llegadaDeposito?: Date;
}
