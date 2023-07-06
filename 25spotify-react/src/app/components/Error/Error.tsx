import React from 'react';
import s from './Error.module.scss';

export const Error = () => {
    return (
        <div>
            <h2 className={s.text}>Что-то пошло не так. Попробуйте в другой раз</h2>
        </div>
    );
};
