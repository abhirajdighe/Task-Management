const {task} = require('../models/index')

class CurdRepository{

    async createTask(data) {
        try {
            const addedTask = await task.create(data);
            return addedTask;
        } catch (error) {
            console.log("Error occurred while creating the task. At Repository Layer");
            throw new Error(error);
        }
    }

    async deleteTask(taskId){
        try{
            await task.destroy({
                where:{
                    id:taskId
                }
            })
        }
        catch(error){
            console.log("Error occure while deleting task. At Repository Layer")
        }
    }

    async updateTask(taskId, data) {
        try {
            const taskToUpdate = await task.findByPk(taskId);
    
            if (!taskToUpdate) {
                throw new Error('Task not found');
            }
    
            taskToUpdate.taskList = data.taskList;
            await taskToUpdate.save();
    
            return taskToUpdate;
        } catch (error) {
            console.log("Error occurred while updating the task. At Repository Layer");
            throw new Error(error);
        }
    }    
    
    async getTask(taskId) {
        try {
            const taskData = await task.findByPk(taskId);
            if (!taskData) {
                throw new Error('Task not found');
            }
            console.log(taskData);
            return taskData;
        } catch (error) {
            console.log("Error occurred while getting task. At Repository Layer");
            throw new Error(error);
        }
    }    
    
    async getAllTasks(){
        try{
            const data = await task.findAll();
            return data;
        }
        catch(error){
            console.log("Error occure while fetching task. At Repository Layer");
            throw {error};
        }
    }
}

module.exports = CurdRepository;