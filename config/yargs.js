const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento', {
        descripcion
    })
    .command('actualizar', 'Actualizar un elemento', {
        descripcion,
        completado
    }).command('borrar', 'borrar un elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}