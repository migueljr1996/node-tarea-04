const fs = require('fs');

let listado = [];

const guardar = () => {
    let data = JSON.stringify(listado);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo guardar por', err);
    });
}

const leer = () => {
    try {

        listado = require('../db/data.json');
    } catch (error) {
        listado = [];
    }

}

const crear = (descripcion) => {
    leer();
    let porHacer = {
        descripcion,
        completado: false
    };
    listado.push(porHacer)
    guardar();
    return porHacer
}

const getListado = () => {
    leer();
    return listado
}

const actualizar = (descripcion, completado) => {
    leer();
    let index = listado.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listado[index].completado = completado
        guardar();
        return true
    } else {
        return false
    }

}

const borrar = (descripcion) => {
    leer();
    let i = listado.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (i >= 0) {
        listado.splice(i, 1);
        guardar();
        return true
    } else {
        return false;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}