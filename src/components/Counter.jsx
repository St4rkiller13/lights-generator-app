import {Text} from "./Text.jsx";
import {IconDecrement} from "./icons/IconDecrement.jsx";
import {IconIncrement} from "./icons/IconIncrement.jsx";

import styles from "./Counter.module.css";
import {useState} from "react";

export const Counter = (props) => {
    const [value,setValue] = useState(0);

    const  handleIncrement = () => {
        setValue(value+1);
    };

    const  handleDecrement = () => {
        if (value <= 0) {
            return;
        }
        setValue(value-1);
    };

    return (
        <div className={styles.wrapper}>
        <Text>
            {value} {props.text}
        </Text>
            <nav>
                <IconDecrement onClick={handleDecrement} />
                <IconIncrement onClick={handleIncrement} />
            </nav>
        </div>
    );
};