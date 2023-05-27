const express = require('express');
const Tarea = require('../models/TareaScheme');

const crearTarea = async (req, res = express.request ) => {
    const task = new Tarea( req.body);

    try{
        task.user = req.uid;
        const saved = await task.saved();
        res.json({
            ok: true,
            task: saved
        })
    }catch(error){
        console.log(error);
        res.statusCode(500).json({
            ok: false,
            task: 'Internal Error'
        })
    }

}
const listarTarea = async (req, res = express.request) => {
    const tasks = await Task.find().populate('user', 'name');
    try{
        
        res.status(200).json({
            ok: true,
            tasks
        })
    }catch(error){
        console.log(error);
        res.statusCode(500).json({
            ok: false,
            task: 'Internal Error'
        })
    }



}

const actualizarTarea = async (req, res = express.request) => {
    try{
        const {id} = req.params;
        const tarea = await modelTask.findById(id).populate("user", "_id");
        if (!tarea){
            return res.status(404).json({
                ok : false,
                msg: `No existe una tarea con el id ${id}`,

            });
        }
        if (task.user.id !== req.uid){
            return res.status(403).json({
                ok:false,
                msg: 'No tienes permiso para ver esta tarea'
            });
        }
        const { title } = req.body;
        const newTarea = await modelTask.findByIdAndUpdate(id, {title}, {new: true});

        return res.status(200).json({
            ok:true,
            newTarea,
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            tarea: "Internal error",
        });

    }


};

const eliminarTarea = (req, res = express.request) => {


}

module.exports = {
    crearTarea,listarTarea, actualizarTarea,eliminarTarea
}