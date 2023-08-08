import {currentTimeState, targetVideoState} from "../../../../recoil/recoilStates";
import {useRecoilValue} from "recoil";

const TimeDisplay = () => {

    const currentTime = useRecoilValue(currentTimeState)
    const targetVideo = useRecoilValue(targetVideoState)

    return (
        <div className={'ytp-time-display notranslate'}>
            <span>
                <span className={'ytp-time-current'}>
                    {currentTime.minutes}:{(currentTime.seconds.toString().length === 1 ? '0' : '') + currentTime.seconds}
                </span>
                <span className={'ytp-time-separator'}> / </span>
                <span className={'ytp-time-duration'}>
                    {targetVideo?.minutes}:{(targetVideo.seconds.toString().length === 1 ? '0' : '') + targetVideo.seconds}
                </span>
            </span>
        </div>
    )
}

export default TimeDisplay
