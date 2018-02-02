import { Carga } from '../model/carga';

export const CAMIONES : Carga[] = [

    
    {
        camion : {
            id: 34,
            nombre: "DP Macro 1",
            conductor: ""
        },
        anden : "1",
        llegadaRDC : new Date(2018, 1, 1, 14, 30, 0, 0),
        enrampe : new Date(2018, 1, 1, 14, 45, 0, 0),
        empiezaCarga : new Date(2018, 1, 1, 15, 0, 0, 0),
        terminaCarga: new Date(2018, 1, 1, 15, 10, 0, 0),
        initFacturacion: new Date(2018, 1, 1, 15, 10, 0, 0),
        endFacturacion: new Date(2018, 1, 1, 15, 10, 0, 0),
        salidaRDC: new Date(2018, 1, 1, 15, 10, 0, 0),
        llegadaDeposito: new Date(2018, 1, 1, 15, 10, 0, 0),

    },
    {
        camion : {
            id: 523,
            nombre: "DP Macro 2",
            conductor: ""
        },
        anden: "24",
        llegadaRDC : new Date(),
        enrampe : new Date(),
        empiezaCarga : new Date(),
        terminaCarga: new Date(),
        initFacturacion: new Date(),
        endFacturacion: new Date(),
        salidaRDC: new Date(),
        llegadaDeposito: new Date(),

    }

];