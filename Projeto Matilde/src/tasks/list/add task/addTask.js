import React from "react"; 
export function AddTask ({tasks, setTasks}){
    const [newTask, setNewTask] = React.useState()
    function handleSubmit(e){
        e.preventDefault()
        let element ={id:tasks.length, description:newTask, completed:"", initialDate:""+ Date.now()}
        setTasks ([...tasks, element])
    }

    return (
    <>
    <form onSubmit={handleSubmit}>
                <label>NewTask</label>
                <input onChange={(e)=>setNewTask(e.target.value)} type="text" required />
                <input type="submit" value="Add Task"/>
     </form> 
     </>)
}