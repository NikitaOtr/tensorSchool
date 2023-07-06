import React, { useState, VFC, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

interface IProps {
    sourceId: string;
}

export const Effects: VFC<IProps> = ({ sourceId }) => {
    const [lastMessage, setLastMessage] = useState(-1);

    useEffect(() => {
        const callback = (message: number) => {
            setLastMessage(message);
        };
        subscribe(sourceId, callback);
        setLastMessage(-1);
        return () => unsubscribe(sourceId, callback);
    }, [sourceId]);

    return <div>{`${sourceId}: ${lastMessage}`}</div>;
};
