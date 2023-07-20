import {Text} from "./Text.jsx";
import {IconDecrement} from "./icons/IconDecrement.jsx";
import {IconIncrement} from "./icons/IconIncrement.jsx";

import styles from "./Counter.module.css";
import {useState} from "react";

export const  Counter = (props) => {


    return (
        <div className={styles.wrapper}>
        <Text>
            {props.count} {props.text}
        </Text>
            <nav>
                <IconDecrement onClick={props.onDecrement} />
                <IconIncrement onClick={props.onIncrement} />
            </nav>
        </div>
    );
};