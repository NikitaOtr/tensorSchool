import React from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import { Aside } from './content/Aside/Aside';
import { Footer } from './content/Footer/Footer';
import { Header } from './content/Header/Header';

import { MainPage } from './content/pages/MainPage/MainPage';
import { SearchPage } from './content/pages/SearchPage/SearchPage';
import { CollectionReleasesPage } from './content/pages/CollectionPage/CollectionPage';
import { PlaylistPage } from './content/pages/PlaylistPage/PlaylistPage';
import { NotFoundPage } from './content/pages/NotFoundPage/NotFoundPage';
import { ArtistPage } from './content/pages/ArtistPage/ArtistPage';

export const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Aside/>
            <main className='main'>
                <Routes>
                    <Route path='/'>
                        <Route index element={<MainPage/>}/>

                        <Route path='search/'>
                            <Route index element={<SearchPage/>}/>
                            <Route path='collection/:type/:searchText' element={<CollectionReleasesPage/>}/>
                        </Route>

                        <Route path='artist/:id'>
                            <Route index element={<ArtistPage/>}/>
                            <Route path='collection/:type/:id' element={<CollectionReleasesPage/>}/>
                        </Route>

                        <Route path='collection/:type/:searchText' element={<CollectionReleasesPage/>}/>
                        <Route path='playlist/:type/:id' element={<PlaylistPage/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
};