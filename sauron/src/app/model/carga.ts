import { Camion } from './camion';
import { Porcentaje} from './porcentaje';

export class Carga {
    id?: Number;
    camion: Camion;
    anden: string;
    porcentajes?: Porcentaje;
    llegadaRDC?: Date;
    enrampe?: Date;
    empiezaCarga?: Date;
    terminaCarga?: Date;
    initFacturacion?: Date;
    endFacturacion?: Date;
    salidaRDC?: Date;
    llegadaDeposito?: Date;
}
