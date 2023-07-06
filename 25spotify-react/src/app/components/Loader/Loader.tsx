import React from 'react';
import s from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={s.skFadingCircleWrap}>
            <div className={s.skFadingCircle}>
                <span className={s.skCircle1}></span>
                <span className={s.skCircle2}></span>
                <span className={s.skCircle3}></span>
                <span className={s.skCircle4}></span>
                <span className={s.skCircle5}></span>
                <span className={s.skCircle6}></span>
                <span className={s.skCircle7}></span>
                <span className={s.skCircle8}></span>
                <span className={s.skCircle9}></span>
                <span className={s.skCircle10}></span>
                <span className={s.skCircle11}></span>
                <span className={s.skCircle12}></span>
            </div>
        </div>
    );
};