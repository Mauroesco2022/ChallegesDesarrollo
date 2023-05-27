const {Schema, model} = require('mongoose')

const UsuarioScheme = Schema({
    nombre: {
        type: String, 
        required: true
    },
    correo: {
        type: String, 
        required: true,
        unique: true
    },
    clave: {
        type: String, 
        required: true
    }
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true 
    }
});

UsuarioScheme.virtual('tareas', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
})

module.exports = model('Usuario', UsuarioScheme)