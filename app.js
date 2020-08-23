//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv
const color = require('colors')

const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0].toLowerCase();

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)
        break;
    case 'listar':
        let listar = porHacer.getListado();
        for (tareas of listar) {
            console.log('======== Por Hacer ========'.green)
            console.log(tareas.descripcion)
            console.log('Estado', tareas.completado)
            console.log('==========================='.green)

        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar)
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar)
        break;

    default:
        console.log('Comando no se reconoce');
        break;

}