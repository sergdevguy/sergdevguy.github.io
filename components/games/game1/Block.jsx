import React, { useState } from 'react';
import styles from './game1.module.scss'

const Block = (props) => {
    const [content] = useState(props.content);
    const [status, setStatus] = useState(props.status);

    const test = props.changeStatus;
    const getStatus = props.getStatus(status);

    return (
        <div 
            onClick={getStatus}
            className={styles.card}
        >
            {status === 'opened' 
                ? content
                : ''
            }
        </div>
    )
}

export default Block;