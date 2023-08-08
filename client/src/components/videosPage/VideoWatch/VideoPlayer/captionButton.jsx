import {Svg} from "../Svg/Svg";
import {ytpCaptionButtonPath} from "../../../ExtraComponenets/IconShapes/iconShapesPaths";
import React, {useState} from "react";


let video = {
    video_id: "video_id",
    captionsAvailable: true
}

const CaptionButton = () => {

    let [isCaptionsOn, setCaptions] = useState(false)

    const handleCaptions = () => {
        setCaptions((prevState) => !prevState)
    }

    return (
        <button className={'ytp-subtitles-button ytp-button'} aria-keyshortcuts={'c'}
                data-priority={3} data-title-toolitp={'Subtitles/closed captions unavailable'}
                aria-pressed={isCaptionsOn}
                aria-label={'Subtitles/closed captions ' + (video.captionsAvailable ? '' : 'unavailable ') + 'keyboard shortcut c'}
                title={'Subtitles/closed captions ' + (video.captionsAvailable ? '' : 'unavailable')}
                onClick={video.captionsAvailable ? handleCaptions : null}
        >
            <Svg iconPath={ytpCaptionButtonPath} id={17}
                 opacity={video.captionsAvailable ? 1 : 0.3} fill={'#fff'}/>
        </button>
    )
}

export default CaptionButton