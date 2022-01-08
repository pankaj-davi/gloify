import React from 'react';
import classes from "./Layout.module.css";

const Layout = (props) => {
    return (
        <div className={classes.layout}>
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;
