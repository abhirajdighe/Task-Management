const CurdRepository= require('../repository/curd-repository');

class CurdService{
    constructor(){
        this.curdRepository = new CurdRepository();
    }

    async createTask(data) {
        try {
          const task = await this.curdRepository.createTask(data);
          return task;
        } catch (error) {
          console.log("Error at service layer:", error.message);
          throw new Error(error);
        }
      }

    async deleteTask(taskId){
        try{
            const response = await this.curdRepository.deleteTask(taskId)
            return response;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw new Error(error);
        }
    }

    async updateTask(taskId, data) {
        try {
            const updatedTask = await this.curdRepository.updateTask(taskId, data);
            return updatedTask;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw new Error(error);
        }
    }    

    async getTask(taskId) {
        try {
            const task = await this.curdRepository.getTask(taskId);
            return task;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw new Error(error);
        }
    }    
 
    async getAllTasks(){
        try{
            const response = await this.curdRepository.getAllTasks();
            return response;
        }catch(error){
            console.log('Somthing went wrong at service layer');
            throw {error};
        }
    }
}

module.exports=CurdService;