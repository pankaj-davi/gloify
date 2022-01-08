import React, { Fragment } from 'react';
import Image from "next/image";
import classes from "./TaskItemCard.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const TaskItemCard = (props) => {

    const tasks = props.todoData;
    
    const { deleteTasksHandler } = props.eventHandler;

    const todo = tasks.map((item, idx) => {

        let { id, message, assigned_name, assigned_to, created_on, due_date, priority } = item;
    
        let priorityClassName;

        switch (priority) {
            case "1":
                priority = "High"
                priorityClassName = priority === "High" && `${classes.red}`;
                break;
            
            case "2":
                priority = "Medium";
                priorityClassName = priority === "Medium" && `${classes.green}`;
                break;

            case "3":
                priority = "Low";
                priorityClassName = priority === "Low" && `${classes.green}`;
                break;
            
            default:
                break;
        }

        return (
            <div id={id} key={idx} className={classes.card} >
                <h6>{message}</h6>
                <div className={classes.icons}>
                    <span className={classes.delete} onClick={() => deleteTasksHandler(id)}>
                        <AiTwotoneDelete  />
                    </span>
                    <span className={classes.edit}>
                        <FiEdit  />
                    </span>
                </div>
                <div className={classes.details}>
                    <span className={priorityClassName}>{priority}</span>
                    {assigned_name ? <p>Assign to : {assigned_name}</p> : <p>Not Assign Yet</p>}
                </div>
            </div>
        );
    })

   

    return (
        <Fragment>{todo}</Fragment>
    );
}

export default TaskItemCard


