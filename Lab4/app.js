const todoList = require("./todo");
const connection = require("./mongoConnection");


async function main(){

    // 1.Create a task with the following details:
    var firstTaskId;
    var firstTask = {
        title: "Ponder Dinosaurs",
        description: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
    }
    var addFirstTask = await todoList.createTask(firstTask.title,firstTask.description);
    firstTaskId = addFirstTask._id;
    console.log(addFirstTask);
    console.log("Step 1 done");

    //2. Log the task, and then create a new task with the following details:
    var secondTask={
        title: "Play Pokemon with Twitch TV",
        description: "Should we revive Helix?"
    }
    var addSecondTask = await todoList.createTask(secondTask.title,secondTask.description);
    console.log(addSecondTask);
    console.log("Step 2 done");

    //3. After the task is inserted, query all tasks and log them
    var getAllTask = await todoList.getAllTasks();
    console.log(getAllTask);
    console.log("Step 3 done");
    
    //4. After all the tasks are logged, remove the first task
    await todoList.removeTask(firstTaskId);

    //5. Query all the remaining tasks and log them
    var getAllRemainTask = await todoList.getAllTasks();
    console.log(getAllRemainTask);
    console.log("Step 4,5 done");

  
    //6. Complete the remaining task
    for(var i=getAllRemainTask.length-1;i>=0;i--){
        await todoList.completeTask(getAllRemainTask[i]['_id']);
    }

    //7. Log the task that has been completed with its new value.
    const allNewTasks = await todoList.getAllTasks();
    console.log(allNewTasks);
    console.log("Step 6,7 done");

    const db = await connection();
    await db.serverConfig.close();
  
    console.log("Done!");
}

main().catch(error => {
    console.log(error);
  });

