export function TaskItem ({task,deleteTask}){
   function MarkAsCompleted(){
task.completed=  Date.now()
    }
    function handleDelete(e){
        e.preventDefault()
        deleteTask(task.id)
    }
    function EditDescription (description){
        task.description= description 
    }
    return(<>
    <tr id = {task.id}>
        <td><input type = "checkbox" checked={(task.completed!="")} onClick = {MarkAsCompleted}/></td>
        <td>{task.description}</td>
        <td>{task.initialDate}</td>
        <td><input type = "button" value = "edit"/><input onClick={handleDelete} type = "button" value = "delete"/></td>
    </tr></>)
}