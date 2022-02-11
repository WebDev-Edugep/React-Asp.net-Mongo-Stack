import { TaskItem } from "./itens/taskItem"
import React from "react";
import { AddTask } from "./add task/addTask";
const demotasks = [
    {id:0, description:"a", completed:"", initialDate:""+new Date(Date.now()).toLocaleDateString('pt-PT')},
    {id:1, description:"b", completed:"", initialDate:""+ new Date(Date.now()).toLocaleDateString('pt-PT')},
    {id:2, description:"c", completed:"", initialDate: ""+new Date(Date.now()).toLocaleDateString('pt-PT')}
]
export function TaskList (){
    const [tasks, setTasks] =React.useState(demotasks)
    function deleteTask(id){
     setTasks(tasks.filter(item=>item.id!==id))
    }
    return(<>
    <AddTask tasks={tasks} setTasks={setTasks}></AddTask>
    <table>
        <thead>
        <tr>
            <th>Done</th>
            <th>Description</th>
            <th>DateAdded</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {tasks.map((item,index) => <TaskItem key={index} task={item} deleteTask={()=>deleteTask(item.id)}></TaskItem>)}
        </tbody>
        </table></> )
}