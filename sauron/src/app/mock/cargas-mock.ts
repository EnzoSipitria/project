import { Carga } from '../model/carga';
import {PORCENTAJES} from './porcentajes-mock';

export const CARGAS: any[] = [
    {
        id: 1,
        camion: {
            id: 'M01',
            nombre: 'Macro 1',
            conductor: null
        },
        anden: '1',
        llegadaRDC: new Date(2018, 1, 1, 14, 30),
        enrampe:new Date(2018, 1, 1, 14, 45),
        empiezaCarga: new Date(2018, 1, 1, 14, 53),
        terminaCarga: new Date(2018, 1, 1, 15, 48),
        initFacturacion: new Date(2018, 1, 1, 15, 52),
        endFacturacion: new Date(2018, 1, 1, 16, 23),
        salidaRDC: new Date(2018, 1, 1, 16, 45),
        llegadaDeposito: null
    },
    {
        id: 2,
        camion: {
            id: 'M11',
            nombre: 'Monterrey 1',
            conductor: null
        },
        anden: '4',
        llegadaRDC: new Date(2018, 1, 1, 11, 34),
        enrampe: new Date(2018, 1, 1, 11, 42),
        empiezaCarga: new Date(2018, 1, 1, 11, 57),
        terminaCarga: null,
        initFacturacion: null,
        endFacturacion: null,
        salidaRDC: null,
        llegadaDeposito: null
    },
    {
        id: 3,
        camion: {
            id: 'M12',
            nombre: 'Monterrey 2',
            conductor: null
        },
        anden: '4',
        llegadaRDC: new Date(2018, 1, 1, 21, 10),
        enrampe: new Date(2018, 1, 1, 21, 17),
        empiezaCarga: null,
        terminaCarga: null,
        initFacturacion: null,
        endFacturacion: null,
        salidaRDC: null,
        llegadaDeposito: null
    },
    {
        id: 4,
        camion: {
            id: 'M02',
            nombre: 'Macro 2',
            conductor: null
        },
        anden: '24',
        llegadaRDC: new Date(2018, 1, 1, 18, 0),
        enrampe: new Date(2018, 1, 1, 18, 12),
        empiezaCarga: new Date(2018, 1, 1, 18, 23),
        terminaCarga: new Date(2018, 1, 1, 18, 57),
        initFacturacion: new Date(2018, 1, 1, 19, 12),
        endFacturacion: null,
        salidaRDC: null,
        llegadaDeposito: null
    },
    {
        id: 5,
        camion: {
            id: 'S01',
            nombre: 'Soriana 1',
            conductor: null
        },
        anden: '6',
        llegadaRDC: new Date(2018, 1, 1, 8, 38),
        enrampe:  new Date(2018, 1, 1, 8, 42),
        empiezaCarga:  new Date(2018, 1, 1, 9, 12),
        terminaCarga:  new Date(2018, 1, 1, 9, 30),
        initFacturacion: null,
        endFacturacion: null,
        salidaRDC: null,
        llegadaDeposito: null

    },
    {
        id: 6,
        camion: {
            id: 'M03',
            nombre: 'Macro 3',
            conductor: null
        },
        anden: '7',
        llegadaRDC: new Date(2018, 1, 1, 14, 30),
        enrampe: null,
        empiezaCarga: null,
        terminaCarga: null,
        initFacturacion: null,
        endFacturacion: null,
        salidaRDC: null,
        llegadaDeposito: null
    },
    {
        id: 7,
        camion: {
            id: 'S02',
            nombre: 'Soriana 2',
            conductor: null
        },
        anden: '21',
        llegadaRDC: new Date(2018, 1, 1, 14, 0),
        enrampe: new Date(2018, 1, 1, 14, 23),
        empiezaCarga: new Date(2018, 1, 1, 14, 45),
        terminaCarga: new Date(2018, 1, 1, 16, 23),
        initFacturacion: new Date(2018, 1, 1, 16, 47),
        endFacturacion: new Date(2018, 1, 1, 16, 58),
        salidaRDC: null,
        llegadaDeposito: null

    },
    {
        id: 8,
        camion: {
            id: 'S03',
            nombre: 'Soriana 3',
            conductor: null
        },
        anden: '15',
        llegadaRDC: new Date(2018, 1, 1, 8, 10),
        enrampe: '',
        empiezaCarga: '',
        terminaCarga: '',
        initFacturacion: '',
        endFacturacion: '',
        salidaRDC: '',
        llegadaDeposito: ''
    }

];
