import { Carga } from '../model/carga';

export const CAMIONES: Carga[] = [
    {
        // id:1,
        camion: {
            id: 34,
            nombre: "DP Macro 1",
            conductor: ""
        },
        anden: "1",
        llegadaRDC: new Date(2018, 1, 1, 14, 30),
        enrampe: new Date(2018, 1, 1, 14, 45),
        empiezaCarga: new Date(2018, 1, 1, 15),
        full:100,
        mix:100,
        terminaCarga: new Date(2018, 1, 1, 15, 10),
        initFacturacion: new Date(2018, 1, 1, 15, 50),
        endFacturacion: new Date(2018, 1, 1, 16, 5),
        salidaRDC: new Date(2018, 1, 1, 16, 30),
        llegadaDeposito: new Date(2018, 1, 1, 17, 30),
       estado:true
    },
    {
        // // id:2,
        camion: {
            id: 78,
            nombre: "DP Monterrey 1",
            conductor: ""
        },
        anden: "4",
        llegadaRDC: new Date(2018, 1, 1, 11, 30),
        enrampe: new Date(2018, 1, 1, 12, 0),
        empiezaCarga: new Date(2018, 1, 12, 15),
        full:20,
        mix:0,
       estado:true
    },
    {
        // id:3,
        camion: {
            id: 15,
            nombre: "DP Monterrey 2",
            conductor: ""
        },
        anden: "4",
        llegadaRDC: new Date(2018, 1, 1, 21, 10),
        enrampe: new Date(2018, 1, 1, 21, 15),
        empiezaCarga: new Date(2018, 1, 21, 30),
        full:100,
        mix:99,
        terminaCarga: new Date(2018, 1, 22, 0),
        initFacturacion: new Date(2018, 1, 22, 20),
        //  estado: false,
        estado: true,
    },
    {
        // id:4,
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
    //    estado:false
       estado: true,

    },
    {
        // id:5,
        camion: {
            id: 65,
            nombre: "Soriana 2",
            conductor: ""
        },
        anden: "9",
        llegadaRDC: new Date(2018, 1, 1, 8, 30),
        enrampe: new Date(2018, 1, 1, 8, 40),
        estado: true,
        //    estado:false
    },
    {
        // id:6,
        camion: {
            id: 24,
            nombre: "Soriana 1",
            conductor: ""
        },
        anden: "6",
        llegadaRDC: new Date(2018, 1, 1, 8, 30),
        enrampe: new Date(2018, 1, 1, 8, 40),
        empiezaCarga: new Date(2018, 1, 1, 9, 0),
        full:70,
        mix:100,
        terminaCarga: new Date(2018, 1, 1, 9, 15),
        initFacturacion: new Date(2018,1,1,11,50),
        estado: true,
        // estado:false
    },
    {
        // id:7,
    camion: {
        id: 17,
        nombre: "DP Macro 3",
        conductor: ""
    },
    
    anden: "7",
    llegadaRDC: new Date(2018, 1, 1, 13, 25),
    enrampe: new Date(2018, 1, 1, 14, 0),
    empiezaCarga: new Date(2018, 1, 15, 15),
    full:100,
    mix:90,
    terminaCarga: new Date(2018, 1, 1, 15, 25),
    initFacturacion: new Date(2018, 1, 1, 15, 50),
    endFacturacion: new Date(2018, 1, 1, 16, 5),
    salidaRDC: new Date(2018, 1, 1, 16, 30),
    llegadaDeposito: new Date(2018, 1, 1, 17, 30),
    estado: true,
    // estado:false,
},
{
    // id:8,
    camion: {
        id: 17,
        nombre: "DP Macro 3",
        conductor: ""
    },
    
    anden: "10",
    llegadaRDC: new Date(2018, 1, 1, 7, 25),
    enrampe: new Date (2018,1,1,11,2),
    estado:true,
}

];
