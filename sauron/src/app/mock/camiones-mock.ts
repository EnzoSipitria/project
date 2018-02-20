import { Carga } from '../model/carga';
import {PORCENTAJES} from './porcentajes-mock';

export const CAMIONES: Carga[] = [
    {
        // id: 5,
        camion: {
            id: 34,
            nombre: 'DP Macro 1',
            conductor: ''
        },
        anden: '1',
        // porcentajes: for(let p in PORCENTAJES){ p.id_carga === this.id => porcentajes = p;},
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
            nombre: 'DP Monterrey 1',
            conductor: ''
        },
        anden: '4',
        llegadaRDC: new Date(2018, 1, 1, 11, 30),
        enrampe: new Date(2018, 1, 1, 12, 0),
        empiezaCarga: new Date(2018, 1, 12, 15)
    },
    {
        camion: {
            id: 15,
            nombre: 'DP Monterrey 2',
            conductor: ''
        },
        anden: '4',
        llegadaRDC: new Date(2018, 1, 1, 21, 10),
        enrampe: new Date(2018, 1, 1, 21, 15),
        empiezaCarga: new Date(2018, 1, 21, 30),
        terminaCarga: new Date(2018, 1, 22, 0),
        initFacturacion: new Date(2018, 1, 22, 20)
    },
    {
        camion: {
            id: 523,
            nombre: 'DP Macro 2',
            conductor: ''
        },
        anden: '24',
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
            nombre: 'Soriana 1',
            conductor: ''
        },
        anden: '6',
        llegadaRDC: new Date(2018, 1, 1, 8, 30),
        enrampe: new Date(2018, 1, 1, 8, 40),
        empiezaCarga: new Date(2018, 1, 1, 9, 0),
        terminaCarga: new Date(2018, 1, 1, 9, 15)

    },
    {
        camion: {
            id: 54,
            nombre: 'DP Macro 3',
            conductor: ''
        },
        anden: '7',
        llegadaRDC: new Date(2018, 1, 1, 14, 30),
        enrampe: new Date(2018, 1, 1, 14, 45),
        empiezaCarga: new Date(2018, 1, 1, 15),
        terminaCarga: new Date(2018, 1, 1, 15, 10),
        initFacturacion: new Date(2018, 1, 1, 16, 50)
    },
    {
        camion: {
            id: 225,
            nombre: 'DP Macro 4',
            conductor: ''
        },
        anden: '21',
        llegadaRDC: new Date(2018, 1, 1, 18, 0),
        enrampe: new Date(2018, 1, 1, 18, 15),
        empiezaCarga: new Date(2018, 1, 1, 18, 55),
        terminaCarga: new Date(2018, 1, 1, 19, 0),
        initFacturacion: new Date(2018, 1, 1, 19, 5),
        endFacturacion: new Date(2018, 1, 1, 19, 20),
        salidaRDC: new Date(2018, 1, 1, 20, 35),
        llegadaDeposito: new Date(2018, 1, 1, 20, 45),

    },
    {
        camion: {
            id: 34,
            nombre: 'DP Monterrey 5',
            conductor: ''
        },
        anden: '15',
        llegadaRDC: new Date(2018, 1, 1, 8, 10),
        enrampe: new Date(2018, 1, 1, 8, 15),
        empiezaCarga: new Date(2018, 1, 9, 30),
        terminaCarga: new Date(2018, 1, 9, 45),
        initFacturacion: new Date(2018, 1, 1, 10, 5)
    }

];
