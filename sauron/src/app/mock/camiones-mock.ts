import { Carga } from '../model/carga';

export const CAMIONES: Carga[] = [
    {
        camion: {
            id: 34,
            nombre: "DP Macro 1",
            conductor: ""
        },
        anden: "1",
        llegadaRDC: new Date(2018, 1, 1, 14, 30),
        enrampe: new Date(2018, 1, 1, 14, 45),
        empiezaCarga: new Date(2018, 1, 1, 15),
        terminaCarga: new Date(2018, 1, 1, 15, 10),
        initFacturacion: new Date(2018, 1, 1, 15, 50),
        endFacturacion: new Date(2018, 1, 1, 16, 5),
        salidaRDC: new Date(2018, 1, 1, 16, 30),
        llegadaDeposito: new Date(2018, 1, 1, 17, 30),
    },
    {
        camion: {
            id: 78,
            nombre: "DP Monterrey 1",
            conductor: ""
        },
        anden: "4",
        llegadaRDC: new Date(2018, 1, 1, 11, 30),
        enrampe: new Date(2018, 1, 1, 12, 0),
        empiezaCarga: new Date(2018, 1, 12, 15)
    },
    {
        camion: {
            id: 15,
            nombre: "DP Monterrey 2",
            conductor: ""
        },
        anden: "4",
        llegadaRDC: new Date(2018, 1, 1, 21, 10),
        enrampe: new Date(2018, 1, 1, 21, 15),
        empiezaCarga: new Date(2018, 1, 21, 30),
        terminaCarga: new Date(2018, 1, 22, 0),
        initFacturacion: new Date(2018, 1, 22, 20)
    },
    {
        camion: {
            id: 523,
            nombre: "DP Macro 2",
            conductor: ""
        },
        anden: "24",
        llegadaRDC: new Date(2018, 1, 1, 18, 0),
        enrampe: new Date(2018, 1, 1, 18, 15),
        empiezaCarga: new Date(2018, 1, 1, 18, 55),
        terminaCarga: new Date(2018, 1, 1, 19, 0),
        initFacturacion: new Date(2018, 1, 1, 19, 5),
        endFacturacion: new Date(2018, 1, 1, 19, 20),
        salidaRDC: new Date(2018, 1, 1, 20, 0),
        llegadaDeposito: new Date(2018, 1, 1, 20, 45),

    },
    {
        camion: {
            id: 24,
            nombre: "Soriana 1",
            conductor: ""
        },
        anden: "6",
        llegadaRDC: new Date(2018, 1, 1, 8, 30),
        enrampe: new Date(2018, 1, 1, 8, 40),
        empiezaCarga: new Date(2018, 1, 1, 9, 0),
        terminaCarga: new Date(2018, 1, 1, 9, 15)

    }

];
