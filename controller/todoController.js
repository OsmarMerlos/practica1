
import todoModel from "../models/ToDoModel.js";
var TODO = new todoModel(); 
class TodoController{
    constructor(){}
    async createTodo(request,response){
        var data = request.body;

        var result = await TODO.createtodo( 
            data.name,
            data.description,
            data.date,
            data.hour,
            data.done,
        );
        response.status(200).json(result);
    }
    async getTodo(request, response){
            var result = await TODO.gettodo();
            response.status(200).json(result);
    }
    async updateTodo(request, response){
        var id = request.params.id;
        var updatedata = request.body;
        var result = await TODO.updatetodo(id, updatedata);
        response.status(200).json(result);
    }

    async deleteTodo(request, response){
        var id = request.params.id;
        var result = await TODO.deletetodo(id);
        response.status(200).json(result);
    }

}
export default TodoController;