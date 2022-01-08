import React, { Fragment } from 'react';
import classes from "./ProcessContainer.module.css";
import { useSelector } from 'react-redux';
import TaskItemCard from '../Layout/UI/TaskItemCard';



const ProcessContainer =  () => {

    const todoData = useSelector(state => state.item.taksItem);

    const deleteTasksHandler = async (id) => {
        
        console.log(id);

        const deleteUsers = await fetch(`https://devza.com/tests/tasks/delete`,{
            method: "DELETE",
            headers: {
            "AuthToken":process.env.API_KET,
            },
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            body: id,
            redirect: 'follow'
        })


        const deleteOne = await deleteUsers.json();

        console.log(deleteOne);
    }

    const updateTaskHandler = () => {

    }
    
    const eventHandler = {
        deleteTasksHandler,
        updateTaskHandler
    }

    
    return (
        <div className={classes.wrapper}>
            
            <div className={classes.heading}>
                <h3>TODO</h3>
                <div className={classes.listItem}>
                    
                    <TaskItemCard eventHandler={eventHandler} todoData={todoData}/>
                    
                </div>
               
            </div>
            <div className={classes.heading}>
                <h3>PROGRESS</h3>
                
            </div>
            <div className={classes.heading}>
                <h3>DONE</h3>
               
            </div>
            
        </div>
    );
};

export default ProcessContainer;
