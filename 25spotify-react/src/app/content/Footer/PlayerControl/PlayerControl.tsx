import React, { VFC, useEffect } from 'react';
import s from './PlayerControl.module.scss';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppActions } from '../../../hooks/useAppAction';

import { EnumOfStatusPlayer } from '../../../types/playerTypes';

import { ButtonPlay } from '../../../components/ButtonPlay/ButtonPlay';
import { ButtonMove } from './ButtonMove/ButtonMove';
import { TimeControl } from './TimeControl/TimeControl';

import left from './img/left.svg';
import right from './img/right.svg';

interface IProps {
    audio : HTMLAudioElement
}

export const PlayerControl: VFC<IProps> = ({ audio }) => {
    const isPlaying = useAppSelector(state => state.playerReducer.isPlaying);
    const track = useAppSelector(state => state.playerReducer.track);
    const isReadyPlaying = useAppSelector(state => state.playerReducer.isReadyPlaying);

    const { previousTrack, nextTrack, togglePlaying, setDuration,
        setPlayerStatus, setIsReadyPlaying } = useAppActions();

    useEffect(() => {
        const setDurationHandler = () => setDuration(audio.duration);
        audio.addEventListener('loadedmetadata', setDurationHandler);

        const nextTrackHandler = () => nextTrack();
        audio.addEventListener('ended', nextTrackHandler);

        const downloadFullDataHandler = () => setIsReadyPlaying(true);
        audio.addEventListener('loadeddata', downloadFullDataHandler);

        return () => {
            audio.removeEventListener('loadedmetadata', setDurationHandler);
            audio.removeEventListener('ended', nextTrackHandler);
            audio.removeEventListener('loadeddata', downloadFullDataHandler);
        };
    }, []);

    useEffect(() => {
        if (track) {
            if (track.preview_url) {
                audio.src = track.preview_url;
                setPlayerStatus(EnumOfStatusPlayer.Success);
            } else {
                audio.src = '';
                setPlayerStatus(EnumOfStatusPlayer.Error);
            }
        }
    }, [track]);

    useEffect(() => {
        if (isReadyPlaying && track && track.preview_url) {
            isPlaying ? audio.play() : audio.pause();
        }
    }, [isPlaying, isReadyPlaying]);

    return (
        <div className={s.playerControl}>
            <div className={s.playerControl__buttons}>
                <ButtonMove img={left} onClick={previousTrack}/>
                <ButtonPlay size={40} isPlaying={isPlaying} onClick={togglePlaying}/>
                <ButtonMove img={right} onClick={nextTrack}/>
            </div>
            <TimeControl audio={audio}/>
        </div>
    );
};