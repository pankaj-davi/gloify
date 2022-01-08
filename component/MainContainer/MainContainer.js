import React from 'react';
import ProcessContainer from '../ProcessContainer/ProcessContainer';
import classes from "./MainContainer.module.css";

const MainContainer = (props) => {
    return (
        <div className={classes.MainContainer}>
            <div className={classes.title}>
                <h1>Task Management</h1>
            </div>
            <div className={classes.sortBy}>
                <select>
                    <option selected>Default</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low" >Low</option>
                </select>
            </div>
            <ProcessContainer data={props.data} />
        </div>
    );
}

export default MainContainer
