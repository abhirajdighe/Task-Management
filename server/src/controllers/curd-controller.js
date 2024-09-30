const CurdService  = require('../services/curd-service');

const curdService = new CurdService();

const create = async (req, res) => {
    try {
        const taskData = {
            taskList: req.body.taskList  // Changed this to match the model field
        };
        console.log("Mapped Request body:", taskData);
        const task = await curdService.createTask(taskData);
        return res.status(201).json({
            data: task,
            success: true,
            message: 'Successfully created a task',
            error: {}
        });
    } catch (error) {
        console.log("Error at controller:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a task',
            error: error.message || "Internal server error"
        });
    }
};

  
  

// DELETE -> /city/:id
const destroy = async(req,res)=>{
    try{
        const response = await curdService.deleteTask(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully deleted a task',
            error: {}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a task',
            error: error.message || "Internal server error"
        })
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const task = await curdService.getTask(req.params.id);
        return res.status(200).json({
            data: task,
            success: true,
            message: 'Successfully fetched the task',
            error: {}
        });
    } catch (error) {
        console.log("Error at controller:", error.message);
        return res.status(error.message === 'Task not found' ? 404 : 500).json({
            data: {},
            success: false,
            message: error.message === 'Task not found' ? 'Task not found' : 'Not able to get the task',
            error: error.message || "Internal server error"
        });
    }
};

// Patch / PUT -> /city/:id
const update = async (req, res) => {
    try {
        const taskId = req.params.id;
        const taskData = req.body;

        if (!taskId || !taskData) {
            return res.status(400).json({
                data: {},
                success: false,
                message: 'Task ID and data are required',
                error: 'Missing required fields'
            });
        }

        const updatedTask = await curdService.updateTask(taskId, taskData);

        return res.status(200).json({
            data: updatedTask,
            success: true,
            message: 'Successfully updated the task',
            error: {}
        });
    } catch (error) {
        console.log("Error at controller:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the task',
            error: error.message || "Internal server error"
        });
    }
};

const getAll = async (req,res)=>{
    try{
        const response = await curdService.getAllTasks();
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetched all tasks',
            err:{}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the tasks',
            error: error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}