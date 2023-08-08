import './videoPlayer.scss'

import {
    ytpFullScreenButtonCorner0Path,
    ytpFullScreenButtonCorner1Path,
    ytpFullScreenButtonCorner2Path,
    ytpFullScreenButtonCorner3Path,
    ytpMiniplayerButtonPath,
    ytpNextButtonPath, ytpReplayButtonPath,
    ytpSettingsButtonPath,
    ytpTheatreModeButtonPath
} from "../../../ExtraComponenets/IconShapes/iconShapesPaths";
import {Svg} from "../Svg/Svg";
import CaptionButton from "./captionButton";
import AutoPlayButton from "./autoPlayButton";
import VolumeArea from "./volumeArea";
import TimeDisplay from "./timeDisplay";
import PlayPauseButton from "./playPauseButton";
import ProgressBar from "./progressBar";

import {
    targetVideoState,
    currentTimeState, progressBarInfoState, playPauseState,
} from '../../../../recoil/recoilStates'

import React, {useEffect, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";


export default function VideoPlayer() {

    const [targetVideo, setTargetVideo] = useRecoilState(targetVideoState)
    const [currentTime, setCurrentTime] = useRecoilState(currentTimeState)
    const [progressInfo, setProgressInfo] = useRecoilState(progressBarInfoState)
    let [playPause, setPlayPause] = useRecoilState(playPauseState)
    const [timerId, setTimerId] = useState(null)

    let timerHandler = {
        update: function () {
            const timerID = setInterval(() => {
                setCurrentTime((prevTime) => ({
                    minutes: prevTime.minutes + Math.floor((prevTime.seconds + 1) / 60),
                    seconds: (prevTime.seconds + 1) % 60
                }));

                setProgressInfo((prevInfo) => {
                    return {
                        seconds: prevInfo.seconds + 1,
                        scale: (prevInfo.seconds + 1) / targetVideo.length,
                        pos: ((prevInfo.seconds + 1) / targetVideo.length) * prevInfo.barWidth,
                        barWidth: prevInfo.barWidth
                    }
                })
            }, 1000)
            setTimerId(timerID)
        },
        stop: function () {
            clearInterval(timerId)
            setTimerId(null)
        },
        reset: function () {
            setProgressInfo({seconds: 0, scale: 0, pos: 0, barWidth: 0})
            setCurrentTime({minutes: 0, seconds: 0})
        }
    }

    useEffect(() => {
        fetch('/watch')
            .then(response => response.json())
            .then(body => {
                setTargetVideo({
                    ...body,
                    minutes: Math.floor(body.length / 60),
                    seconds: body.length % 60
                })
                setProgressInfo({seconds: 0, scale: 0, pos: 0, barWidth: 0})
            })
    }, [])

    useEffect(() => {
        if (targetVideo && currentTime.seconds + currentTime.minutes * 60 === targetVideo.length) {
            timerHandler.stop()
            setPlayPause({state:'Replay', icon: ytpReplayButtonPath, id: 115})
        }

    }, [currentTime])


    return (
        <ytd-player id={'ytd-player'} context={'WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_WATCH'}
                    className={'ytd-player'} style={{touchAction: "pan-down"}}
        >
            <div id={'container'} className={'ytd-player'}>
                <div
                    className={'html5-video-player ' + 'ytp-transparent ' + 'ytp-exp-bottom-control-flexbox ' + 'ytp-exp-ppp-update ' + 'ytp-hide-info-bar ' + 'ytp-large-width-mode ' + 'ytp-fine-scrubbing-exp ' + 'ytp-autonav-endscreen-cancelled-state ' + 'ytp-rounded-miniplayer-not-regular-wide-video ' + 'ytp-fit-cover-video ' + 'ytp-heat-map ended-mode'}
                    tabIndex={-1} id={'movie_player'}
                    data-version={'todo'}
                    aria-label={'CloneTube Video Player'}
                >
                    <div className={'html5-video-container'} data-layer={0}>
                        <video tabIndex={-1} className={'video-stream html5-main-video'}
                               controlsList={'nodownload'}
                               style={{width: "1039px", height: "548px", left: "0", top: "0"}}
                               src={''}
                        >
                        </video>
                    </div>

                    {targetVideo &&
                        <div className={'ytp-chrome-bottom'} data-layer={'9'}
                             style={{width: "1015px", left: "12px"}}
                        >
                            <ProgressBar videoLength={targetVideo.length}/>
                            <div className={'ytp-chrome-controls'}>
                                <div className={'ytp-left-controls'}>
                                    <PlayPauseButton timeHandler={timerHandler}/>
                                    <a className={'ytp-next-button ytp-button'} role={'button'}
                                       data-title-no-tooltip={'next'}
                                       aria-keyshortcuts={'SHIFT + n'} aria-disabled={false}
                                       aria-label={'Next keyboard shortcut SHIFT + n'}
                                       data-duration={'5.26'} data-preview={''} data-tooltip-next={'Next video'}
                                       href={'http://localhost:3000/watch?v=next_Video'} title={'Next (SHIFT + n)'}
                                    >
                                        <Svg iconPath={ytpNextButtonPath} id={13}/>
                                    </a>
                                    <VolumeArea/>
                                    <TimeDisplay/>
                                </div>
                                <div className={'ytp-right-controls'}>
                                    <AutoPlayButton/>
                                    <CaptionButton/>
                                    <button className={'ytp-button ytp-settings-button'} aria-expanded={"false"}
                                            aria-haspopup={"true"} aria-controls={'ytp-id-18'} aria-label={'Settings'}
                                            data-tooltip-target-id={'ytp-settings-button'} title={'Settings'}
                                    >
                                        <Svg iconPath={ytpSettingsButtonPath} id={19} fill={'#fff'}/>
                                    </button>
                                    <button className={'ytp-miniplayer-button ytp-button'} aria-keyshortcuts={'i'}
                                            data-priority={6} data-tooltip-target-id={'ytp-miniplayer-button'}
                                            data-title-no-tooltip={'Miniplayer'}
                                            aria-label={'Miniplayer keyboard shortcut i'}
                                            title={'Miniplayer (i)'}
                                    >
                                        <Svg iconPath={ytpMiniplayerButtonPath} id={21} fill={'#fff'}/>
                                    </button>
                                    <button className={'ytp-size-button ytp-button'} aria-keyshortcuts={'t'}
                                            data-priority={8}
                                            data-title-no-tooltip={'Theatre mode'}
                                            aria-label={'Theatre mode keyboard shortcut t'}
                                            title={'Theatre mode (t)'}
                                    >
                                        <Svg iconPath={ytpTheatreModeButtonPath} id={31} fill={'#fff'}
                                             fillRule={'evenodd'}/>
                                    </button>
                                    <button className={'ytp-fullscreen-button ytp-button'} aria-keyshortcuts={'f'}
                                            data-priority={11} data-title-no-tooltip={'Full screen'}
                                            aria-label={'Full screen keyboard shortcuts f'}
                                            title={'Full screen (f)'}
                                    >
                                        <Svg iconPaths={[
                                            {path: ytpFullScreenButtonCorner0Path, id: 7, class: '0'},
                                            {path: ytpFullScreenButtonCorner1Path, id: 8, class: '1'},
                                            {path: ytpFullScreenButtonCorner2Path, id: 9, class: '2'},
                                            {path: ytpFullScreenButtonCorner3Path, id: 10, class: '3'}
                                        ]} commonClass={'ytp-fullscreen-button-corner-'}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </ytd-player>
    )
}