import {atom, selector} from "recoil";
import {ytpPauseButtonPath} from "../components/ExtraComponenets/IconShapes/iconShapesPaths";

export const targetVideoState = atom({
    key : 'targetVideo',
    default : null
})

export const playPauseState = atom({
    key: 'playPause',
    default: {state: 'Play', icon: ytpPauseButtonPath, id: 93}
})

export const currentTimeState = atom({
    key : 'currentPlayingSecond',
    default : {
        minutes: 0,
        seconds: 0
    }
})

export const progressBarInfoState = atom({
    key: 'progressBarInfo',
    default: null
})