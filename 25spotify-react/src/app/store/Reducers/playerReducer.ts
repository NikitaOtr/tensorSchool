import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EnumOfStatusPlayer } from '../../types/playerTypes';
import { IPlaylist, ITrack } from '../../types/commonTypes';

const initialState = {
    status: EnumOfStatusPlayer.Success,
    currentTrackIndex: 0,
    playlist: null as null | IPlaylist,
    track: null as null | ITrack,
    isReadyPlaying: false,
    saveVolume: 0.5,
    volume: 0.5,
    duration: 0,
    currentTime: 0,
    isPlaying: false,
};

export const playerReducer = createSlice({
    name: 'playerReducer',
    initialState,
    reducers: {
        setIsReadyPlaying(state, { payload }: PayloadAction<boolean>) {
            state.isReadyPlaying = payload;
        },

        togglePlaying(state) {
            state.isPlaying = !state.isPlaying;
        },

        setDuration(state, { payload }: PayloadAction<number>) {
            state.duration = payload;
        },

        setCurrentTime(state, { payload }: PayloadAction<number>) {
            state.currentTime = payload;
        },

        setVolume(state, { payload }: PayloadAction<number>) {
            state.volume = payload;
        },

        resetVolume(state) {
            state.saveVolume = state.volume;
            state.volume = 0;
        },

        setVolumeFromSaveVolume(state) {
            state.volume = state.saveVolume;
        },

        setPlaylist(state, { payload }: PayloadAction<{playlist: IPlaylist, startIndex?: number}>) {
            state.playlist = payload.playlist;
            state.currentTrackIndex = payload.startIndex || 0;
            state.track = state.playlist.tracks[state.currentTrackIndex];
            state.isPlaying = true;
            state.isReadyPlaying = false;
        },

        nextTrack(state) {
            if (state.playlist) {
                state.currentTrackIndex = (state.currentTrackIndex + 1) % state.playlist.tracks.length;
                state.track = state.playlist.tracks[state.currentTrackIndex];
                state.isReadyPlaying = false;
            }
        },

        previousTrack(state) {
            if (state.playlist) {
                const countTracks = state.playlist.tracks.length;
                state.currentTrackIndex = (state.currentTrackIndex + (countTracks - 1)) % countTracks;
                state.track = state.playlist.tracks[state.currentTrackIndex];
                state.isReadyPlaying = false;
            }
        },

        setPlayerStatus(state, { payload }: PayloadAction<EnumOfStatusPlayer>) {
            state.status = payload;
        },
    },
});

export const playerReducerActions = playerReducer.actions;
