import React from 'react';
import Todo from "./Todo";

const TaskList = ({ filter, filterMap, tasks, toggleTaskCompleted, deleteTask, editTask }) => {
    console.log(tasks)
    return (
        <>
            {
                tasks
                    .filter(filterMap[filter])
                    .map(task => {
                        return (
                            <Todo
                                id={task.id}
                                name={task.name}
                                completed={task.completed}
                                key={task.id}
                                toggleTaskCompleted={toggleTaskCompleted}
                                deleteTask={deleteTask}
                                editTask={editTask}
                            />
                        )
                    })
            }
        </>
    )
}

export default TaskList