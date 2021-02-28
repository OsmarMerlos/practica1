import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
//import RolesModel from "./rolesModel.js";
class todoModel{
    constructor(){
        //var roles = new RolesModel();
        this.Schema = mongoose.Schema;
        this.todoSchema = new this.Schema({
            name: String,
            description: String,
            date: Date,
            hour: String,
            done: Boolean,
       
        });
 
        if (modelenum["todos"] == null) {
            this.mymodel = mongoose.model("todos", this.todoSchema);
            modelenum["todos"] = this.mymodel;
          } else {
            this.mymodel = modelenum["todos"];
        }

        //this.mymodel = mongoose.model("restos",this.restSchema);
    }

    createtodo(name, description, date, hour, done){
            var DO = {
                name,
                description,
                date,
                hour,
                done,
            };
            var newDo = new this.mymodel(DO);
            //aqui viene la validacion:
            var error = newDo.validateSync();
            return new Promise((resolve,reject)=>{
                if(error){
                    resolve(error);
                    return;
               }
                newDo.save().then((docs)=>{
                    console.log("Homework register successful");
                    resolve(docs);
                });
            });
        }
    gettodo(){
        return new Promise((resolve,reject)=>{
            this.mymodel.find({}, (err,docs)=>{
                if (err) {
                    console.log (err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

    updatetodo(id, todoUpdate){
        return new Promise((resolve,reject)=>{
            this.mymodel.update({ _id: id}, {$set: todoUpdate}, (err,docs) => {
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });    
    }
    deletetodo(id) {
        return new Promise((resolve, reject) => {
          this.mymodel.remove({ _id: id }).then((err, docs) => {
            if (err) {
              console.log(err);
              resolve(err);
              return;
            }
            resolve(docs);
          });
        });
      }
    getModel(){
        return this.mymodel
    }
    getSchema(){
        return this.todoSchema;
    }
}
export default todoModel;
