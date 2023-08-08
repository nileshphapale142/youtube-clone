import React, {useState} from "react";

const AutoPlayButton = () => {

    let [isAutoPlayOn, setAutoPlay] = useState(false)

    const handleAutoPlay = () => {
        setAutoPlay((prevState) => !prevState)
    }

    return (
        <button className={'ytp-button'} data-priority={2}
                data-tooltip-target-id={'ytp-autonav-toggle-button'}
                aria-label={'Autoplay is ' + (isAutoPlayOn ? 'On' : 'Off')}
                title={'Autoplay is ' + (isAutoPlayOn ? "On" : 'Off')}
                onClick={handleAutoPlay}
        >
            <div className={'ytp-autonav-toggle-button-container'}>
                <div className={'ytp-autonav-toggle-button'} aria-checked={isAutoPlayOn}>
                </div>
            </div>
        </button>
    )
}

export default AutoPlayButton

