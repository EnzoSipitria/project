import { Carga } from '../model/carga';

export const CARGAS: Carga[] = [
    {
        id: 1,
        camion: {
            id: 'M01',
            nombre: 'Macro 1',
            conductor: null
        },
        anden: '1',
        llegadaRDC: new Date(2018, 1, 1, 14, 30),
        enrampe: new Date(2018, 1, 1, 14, 45),
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
        anden: 'S',
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
            id: 'M13',
            nombre: 'Monterrey 3',
            conductor: null
        },
        anden: '27',
        llegadaRDC: new Date(2018, 0, 31, 18, 10),
        enrampe: new Date(2018, 0, 31, 18, 17),
        empiezaCarga: new Date(2018, 0, 31, 18, 47),
        terminaCarga: new Date(2018, 0, 31, 19, 57),
        initFacturacion: new Date(2018, 0, 31, 20, 14),
        endFacturacion: new Date(2018, 0, 31, 20, 47),
        salidaRDC: new Date(2018, 0, 31, 21, 7),
        llegadaDeposito: new Date(2018, 1, 1, 8, 17)
    },
    {
        id: 5,
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
        id: 6,
        camion: {
            id: 'S01',
            nombre: 'Soriana 1',
            conductor: null
        },
        anden: '6',
        llegadaRDC: new Date(2018, 1, 1, 8, 38),
        enrampe:  new Date(2018, 1, 1, 8, 42),
        empiezaCarga:  new Date(2018, 1, 1, 9, 12),
        terminaCarga:  null,
        initFacturacion: null,
        endFacturacion: null,
        salidaRDC: null,
        llegadaDeposito: null

    },
    {
        id: 7,
        camion: {
            id: 'M03',
            nombre: 'Macro 3',
            conductor: null
        },
        anden: 'F',
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
        id: 8,
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
        id: 9,
        camion: {
            id: 'S03',
            nombre: 'Soriana 3',
            conductor: null
        },
        anden: '15',
        llegadaRDC: new Date(2018, 1, 1, 8, 10),
        enrampe: null,
        empiezaCarga: null,
        terminaCarga: null,
        initFacturacion: null,
        endFacturacion: null,
        salidaRDC: null,
        llegadaDeposito: null
    },
    {
        id: 10,
        camion: {
            id: 'M04',
            nombre: 'Macro 4',
            conductor: null
        },
        anden: 'S',
        llegadaRDC: new Date(2018, 1, 1, 9, 30),
        enrampe: new Date(2018, 1, 1, 9, 45),
        empiezaCarga: new Date(2018, 1, 1, 9, 53),
        terminaCarga: new Date(2018, 1, 1, 11, 48),
        initFacturacion: new Date(2018, 1, 1, 11 , 52),
        endFacturacion: new Date(2018, 1, 1, 12, 23),
        salidaRDC: new Date(2018, 1, 1, 12, 45),
        llegadaDeposito: new Date(2018, 1, 1, 18, 25)
    },
    {
        id: 11,
        camion: {
            id: 'S04',
            nombre: 'Soriana 4',
            conductor: null
        },
        anden: '16',
        llegadaRDC: new Date(2018, 1, 1, 14, 10),
        enrampe: new Date(2018, 1, 1, 14, 24),
        empiezaCarga: new Date(2018, 1, 1, 14, 53),
        terminaCarga: new Date(2018, 1, 1, 15, 32),
        initFacturacion: new Date(2018, 1, 1, 15, 48),
        endFacturacion: new Date(2018, 1, 1, 16, 7),
        salidaRDC: new Date(2018, 1, 1, 16, 25),
        llegadaDeposito: null
    },
    // {
    //     id: 11,
    //     camion: {
    //         id: 'M13',
    //         nombre: 'Monterrey 3',
    //         conductor: null
    //     },
    //     anden: '27',
    //     llegadaRDC: new Date(2018, 0, 31, 18, 10),
    //     enrampe: new Date(2018, 0, 31, 18, 17),
    //     empiezaCarga: new Date(2018, 0, 31, 18, 47),
    //     terminaCarga: new Date(2018, 0, 31, 19, 57),
    //     initFacturacion: new Date(2018, 0, 31, 20, 14),
    //     endFacturacion: new Date(2018, 0, 31, 20, 47),
    //     salidaRDC: new Date(2018, 0, 31, 21, 7),
    //     llegadaDeposito: new Date(2018, 1, 1, 8, 17)
    // }

];
