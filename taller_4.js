//Copiar Objetos
//En este caso copiaremos la informacion con objetos para que combine la información de un usuario y detalles
'use strict';
const user = {
    nombre: "Heyer",
    apell: "Tinoco",
    edad: 20
};

const infoExtra = {
    direccion: {
        ciudad: "Quito",
        telefono: "0987542666",
        calle: "Calderon"
    },
    videojuegos: ['League of Legends', 'Valorant', 'Hollow Knight'],
}

const todaInfo = { ...user, ...infoExtra};
console.log(todaInfo);

//this en Objetos:
'use strict';
//Usaremos el this para referirse a propiedades del objeto
const carro = {
    marca: "Toyota",
    modelo: "Camry",
    anio: 2022,
    iniciarMecanismo(){
        console.log(`${this.marca} ${this.modelo}' inicio el mecanismo`);
    },
    detenerMecanismo: function(){
        console.log(`${this.modelo} ${this.modelo}' detener el mecanismo`);
    }
};

carro.iniciarMecanismo(); //Imprime "Toyota Camry inicio el mecanismo"
carro.detenerMecanismo(); //Imprime "Toyota Camry detener el mecanismo"