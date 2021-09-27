import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <div className={styles.Navigation}>
            <h1> Navigation </h1>
            <div className={styles.navigationButtonContainer}>
                <Link to="/">
                <button className={styles.navigationButton}>Home</button>
                </Link>
                <Link to="/Contact">
                <button className={styles.navigationButton}>Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Navigation
