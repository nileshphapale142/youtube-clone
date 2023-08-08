import {ytpPauseButtonPath, ytpPlayButtonPath} from "../../../ExtraComponenets/IconShapes/iconShapesPaths";
import {Svg} from "../Svg/Svg";
import React, {useEffect, useState} from "react";
import {playPauseState} from "../../../../recoil/recoilStates";
import {useRecoilState} from "recoil";

const PlayPauseButton = (props) => {

    let [playPause, setPlayPause] = useRecoilState(playPauseState)

    const handlePlayPause = () => {
        if (playPause.state === 'Replay')
            props.timeHandler.reset()

        setPlayPause((prevState) => (
            prevState.state === 'Replay' ?
                {state: 'Play', icon: ytpPauseButtonPath, id: 93} :
                prevState.state === 'Play' ?
                    {state: 'Pause', icon: ytpPlayButtonPath, id: 106} :
                    {state: 'Play', icon: ytpPauseButtonPath, id: 93}

            )
        )
    }

    useEffect(() => {
        if (playPause.state === 'Play') props.timeHandler.update()
        else if (playPause.state === 'Pause') props.timeHandler.stop()
    }, [playPause])

    return (
        <button className={'ytp-play-button ytp-button'} aria-keyshortcuts={'k'}
                data-title-no-tooltip={playPause.state}
                aria-label={playPause.state + ' keyboard shortcut k'}
                title={playPause.state === 'Replay' ? 'Replay' : (playPause.state === 'Play' ? 'Pause' : 'Play') + ' (k)'}
                onClick={handlePlayPause}
        >
            <Svg iconPath={playPause.icon} id={playPause.id}/>
        </button>
    )
}

export default PlayPauseButton
