import express from "express";
import IndexController from "../controller/indexController.js";
import TodoController from "../controller/todoController.js";
import RolesController from "../controller/rolesContoller.js";
import JsonWebTokenManagement from "../middleware/JsonWebTokenManagement.js";

var router = express.Router();
var indexControler = new IndexController();
var rolesController = new RolesController();
var jsonwebtokenmanagement = new JsonWebTokenManagement();

var todoController = new TodoController();
/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los usuarios
 */
router.get("/", indexControler.index);
router.post("/login", indexControler.login);
/**
 * SERVICIO PROTEGIDO
 */

/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los ROLES
 */
router.post("/roles", rolesController.createRol);
router.get("/roles", rolesController.getRol);
router.get("/roles/:key", rolesController.getRol);
router.put("/roles/:id", rolesController.updateRol);
router.delete("/roles/:id", rolesController.deleteRol);
/* 
Implemente 
*/
router.get("/todo", todoController.getTodo);
router.post("/todo", todoController.createTodo); 
router.put("/todo/:id", todoController.updateTodo);
router.delete("/todo/:id", todoController.deleteTodo);


export default router;
