import './videoWatch.scss'
import VideoPlayer from "./VideoPlayer/videoPlayer";

let video = {
    video_id: "video_id",
    captionsAvailable: true
}


export default function VideoWatch() {
    return (<ytd-watch-flexy class={'ytd-page-manager hide-skeleton'}
                             js-panel-height_ flexy-enable-samll-window-sizzing
                             flexy-enable-large-window-sizzing cinematics-enabled
                             flexy rounded-info-panel is-dark-theme
        // is-four-three-to-sixteen-nine-video_
                             watch-metadata-refresh is-two-columns_ use-side-metadata
                             flexy-large-window_
                             style={{
                                 "--ytd-watch-flexy-scrollbar-width": "17px",
                                 "--ytd-watch-flexy-space-below-player": "136px",
                                 "--ytd-watch-flexy-panel-max-height": "548px",
                                 "--ytd-watch-flexy-chat-max-height": "548px",
                                 "--ytd-watch-flexy-structured-description-max-height": "548px",
                                 "--ytd-watch-flexy-comments-panel-max-height": "548px",
                                 "--ytd-watch-flexy-width-ratio": "1",
                                 "--ytd-watch-flexy-height-ratio": "0.52734375"
                             }}
                             role={'main'}
                             video-id={video.video_id}
                             should-stamp-chat
                             should-collpase-donation-shelf
                             is-extra-wide-video_
    >
        <div id={'columns'} className={'ytd-watch-flexy'}>
            <div id={'primary'} className={'ytd-watch-flexy'}>
                <div id={'primary-inner'} className={'ytd-watch-flexy'}>
                    <div id={'player'} className={'ytd-watch-flexy'}>
                        <div id={'player-container-outer'} className={'ytd-watch-flexy'}>
                            <div id={'player-container-inner'} className={'ytd-watch-flexy'}>
                                <div id={'player-container'} role={'complementary'} className={'ytd-watch-flexy'}
                                     style={{touchAction: "auto"}}
                                >
                                    <VideoPlayer/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ytd-watch-flexy>)
}