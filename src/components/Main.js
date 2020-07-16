import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import FilterList from "./FilterList";
import TaskList from "./TaskList";
import { nanoid } from "nanoid";

const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Main(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState('All');

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const deleteTask = (id) => {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    const editTask = (id, newName) => {
        const editedTaskList = tasks.map(task => {
            if (id === task.id) {
                return { ...task, name: newName }
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    function addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="todoapp stack-large">
            <AddTodoForm addTask={addTask} />
            <FilterList
                filter={filter}
                filters={FILTER_NAMES}
                setFilter={setFilter}
            />
            <TaskList
                filter={filter}
                filterMap={FILTER_MAP}
                tasks={tasks}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </div>
    );
}

export default Main;