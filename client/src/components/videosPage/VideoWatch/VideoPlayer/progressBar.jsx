import React, {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";

import {currentTimeState, playPauseState, progressBarInfoState} from "../../../../recoil/recoilStates";
import {ytpPauseButtonPath} from "../../../ExtraComponenets/IconShapes/iconShapesPaths";

const ProgressBar = ({videoLength}) => {

    let videoMinutes = Math.floor(videoLength / 60)
    let videoSeconds = videoLength % 60

    const [currentTime, setCurrentTime ] = useRecoilState(currentTimeState)
    const [progressInfo, setProgressInfo] = useRecoilState(progressBarInfoState)
    const [playPause, setPlayPause] = useRecoilState(playPauseState)

    let progressBarWidth = useRef(null)

    const handleTimeJump = (e) => {

        if (currentTime.seconds + currentTime.minutes * 60 === videoLength)
            setPlayPause({state: 'Play', icon: ytpPauseButtonPath, id: 93})

        const mousePos = e.clientX, progressBar = e.target.getBoundingClientRect()
        const widthToSeconds = progressBar.width / videoLength
        const currentSecond = Math.max(Math.min(Math.round((mousePos - progressBar.left) / widthToSeconds), videoLength), 0)

        let barScale = currentSecond / videoLength
        let scrubPos = Math.min(barScale * progressBar.width, progressBar.width)

        setCurrentTime({
            minutes: Math.floor(currentSecond / 60),
            seconds: currentSecond % 60
        })

        setProgressInfo({
            seconds: currentSecond,
            scale: barScale,
            pos: scrubPos,
            barWidth: progressBar.width
        })
    }

    useEffect(() => {
        setProgressInfo((prevInfo) => (
            prevInfo ? {...prevInfo, barWidth: progressBarWidth?.current.offsetWidth} : null
        ))
    }, [])


    return (
        <div className={'ytp-progress-bar-container'}>
            <div className={'ytp-progress-bar'} tabIndex={0} role={'slider'}
                 aria-label={'Seek slider'} draggable={true}
                 aria-valuemin={0} aria-valuemax={videoLength} aria-valuenow={progressInfo.seconds}
                 aria-valuetext={Math.floor(progressInfo.seconds / 60).toString() + ' Minutes ' + (progressInfo.seconds % 60) +' Seconds of ' + videoMinutes + ' Minutes ' + videoSeconds +' Seconds'}
                 style={{touchAction: "none"}}
            >
                <div className={'ytp-chapters-container'}>
                    <div className={'ytp-chapters-hover-container'} style={{width: "1015px"}}>
                        <div ref={progressBarWidth} className={'ytp-progress-bar-padding'} onClick={handleTimeJump}></div>
                        <div className={'ytp-progress-list'}>
                            <div className={'ytp-play-progress ytp-swatch-background-color'}
                                 style={{left: "0px", transform: `scaleX(${progressInfo.scale}`}}
                            ></div>
                            <div className={'ytp-progress-linear-live-buffer'}></div>
                            <div className={'ytp-load-progress'}
                                 style={{left: "0", transform: "scaleX(1)"}}></div>
                            <div className={'ytp-hover-progress'}
                                 style={{left: "465.5px", transform: "scaleX(0)"}}></div>
                            <div className={'ytp-ad-progress'}></div>
                        </div>
                    </div>
                </div>
                <div className={'ytp-timed-markers-container'} onClick={handleTimeJump}></div>
                <div className={'ytp-clip-start-exclude'} style={{width: "0"}}></div>
                <div className={'ytp-clip-end-exclude'} style={{left: "100%", width: "0"}}></div>
                <div className={'ytp-scrubber-container'} style={{transform: `translateX(${progressInfo.pos}px)`}}>
                    <div className={'ytp-scrubber-button ytp-swatch-background-color'}>
                        <div className={'ytp-scrubber-pull-indicator'}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar