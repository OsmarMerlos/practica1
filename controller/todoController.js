
import todoModel from "../models/ToDoModel.js";

var TODO = new todoModel(); /*solo una instancia*/
class TodoController{
    constructor(){}
    //services
    async createTodo(request,response){
        var data = request.body;

        var result = await TODO.createtodo( /*esto hace referencia a la class de RestModel*/
            data.name,
            data.description,
            data.date,
            data.hour,
            data.done,
            //data.map,
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