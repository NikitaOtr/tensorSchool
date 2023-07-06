import React from 'react';
import s from './Aside.module.scss';

import { Link } from 'react-router-dom';
import { NavigationLink } from './NavigationLink/NavigationLink';

import logo  from './img/LogoSpotify.svg';
import home from './img/home.svg';
import heart from './img/heart.svg';
import book from './img/book.svg';
import search from './img/search.svg';

export const Aside = () => {
    return (
        <aside className={s.aside}>
            <div className={s.containerLink}>
                <Link className={s.logo} to='/'>
                    <img src={logo} alt="Логотип"/>
                </Link>
            </div>

            <nav className={s.navigation}>
                <NavigationLink title='Главная' img={home} to='/' />
                <NavigationLink title='Поиск' img={search} to='search'/>
                <NavigationLink title='Подборка' img={book} to='collection/playlists/zara'/>
                <NavigationLink title='Подборка треков' img={heart} to='playlist/playlist/0n9vv15rU5Yh2SNCXzYdT6'/>
            </nav>

            <div className={s.line}/>
        </aside>
    );
};
