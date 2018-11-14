const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidv4 = require('uuid/v4');
const moment = require('moment');

async function createTask(title,description){
    if(!title  || typeof title != "string"){
        throw "You must provide title, title has to be a string";
    }
    if(!description || typeof description != "string"){
        throw "You must provide description, description has to be a string"
    }
    const todoCollection = await todoItems();

    let newTask = {
        _id:uuidv4(),
        title:title,
        description:description,
        completed:false,
        completedAt:null
    }

    const insertTodoInfo = await todoCollection.insertOne(newTask);
    if (insertTodoInfo.insertedCount === 0) throw "Could not add todoItem";

    const newId = insertTodoInfo.insertedId;

    const newItem = await this.getTask(newId);
    return newItem;
}

async function getAllTasks(){
    const taskCollection = await todoItems();

    const tasks = await taskCollection.find({}).toArray();

    return tasks;
}

async function getTask(id){
    if (!id) throw "You must provide an id to search for getTask";
    const taskCollection = await todoItems();
    const result = await taskCollection.findOne({ _id: id });
    if (result === null) throw "No todoItems with that id";

    return result;
}

async function completeTask(taskId){
    if(!taskId){
        throw "You must provide an id to search for in compeltedTask";
    }
    const taskCollection = await todoItems();
    const currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

    // const taskInfo = await this.getTask(taskId);
    // const title = taskInfo.title;
    // const description = taskInfo.description;

    const updatedTask = {
        // title:title,
        // description:description,
        completed:true,
        completedAt:currentDate
    };
    const updatedInfo = await taskCollection.updateOne({_id:taskId},{$set:{completed:true,completedAt:currentDate}});
    if (updatedInfo.modifiedCount === 0) {
        throw "could not update task successfully";
    }
    //updatedInfo.upsertedId
    return await this.getTask(taskId);
}

async function removeTask(id){
    if (!id) throw "You must provide an id to search for";

    const taskCollection = await todoItems();
    const deletionInfo = await taskCollection.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete dog with id of ${id}`;
    }
}

module.exports={
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
}