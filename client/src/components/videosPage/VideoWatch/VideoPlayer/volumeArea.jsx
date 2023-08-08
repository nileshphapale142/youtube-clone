import {ytpMuteButtonPath} from "../../../ExtraComponenets/IconShapes/iconShapesPaths";
import React, {useRef, useState} from "react";

const VolumeArea = () => {
    let [left, setLeft] = useState(40)
    let [isVolumeBtnHover, setVolumeBtnHover] = useState(false)

    const handleSliderMouseClick = (e) => {
        let mousePos = e.clientX
        let handlerPos = e.target.getBoundingClientRect().left + left

        setLeft(Math.floor(Math.min(Math.max(left + (mousePos - 6 - handlerPos), 0), 40)))
    }

    const handleSliderHandlerMouseClickInner = (e) => {
        e.stopPropagation()
        let mousePos = e.clientX
        let handlerPos = e.target.getBoundingClientRect().left

        setLeft(Math.floor(Math.min(Math.max(left + (mousePos - 6 - handlerPos), 0), 40)))
    }

    // const handleMouseEnter = (e) => {
    //     setVolumeBtnHover(true)
    // }

    return (
        <span className={'ytp-volume-area'}>
            <button className={'ytp-mute-button ytp-button'}
                    aria-keyshortcuts={'m'}
                    data-title-no-tooltip={'Mute'}
                    aria-label={'Mute keyboard shortcut m'} title={'Mute (m)'}
                    onMouseEnter={() => setVolumeBtnHover(true)}
                    onMouseLeave={() => setVolumeBtnHover(false)}
            >
                <svg height={'100%'} version={'1.1'}
                     viewBox={'0 0 36 36'} width={'100%'}>
                    <use className={'ytp-svg-shadow'} href={'#ytp-id-15'}></use>
                    <use className={'ytp-svg-shadow'} href={'#ytp-id-16'}></use>
                    <defs>
                        <clipPath id={'ytp-svg-volume-animation-mask'}>
                            <path
                                d={'m 14.35 -0.14 l -5.86 5.86 l 20.73 20.78 l 5.86 -5.91 Z'}></path>
                            <path
                                d={'M 7.07 6.87 L -1.11 15.33 L 19.61 36.11 L 27.8 27.6 Z'}></path>
                            <path className={'ytp-svg-volume-animation-mover'}
                                  d={'M 9.09 5.2 L 6.47 7.88 L 26.82 28.77 L 29.66 25.99 Z'}
                                  transform={'translate(0, 0)'}
                            ></path>
                        </clipPath>
                        <clipPath
                            id={'ytp-svg-volume-animation-slash-mask'}>
                            <path
                                className={'ytp-svg-volume-animation-mover'}
                                d={'m -11.45 -15.55 l -4.44 4.51 l 20.45 20.94 l 4.55 -4.66 Z'}
                                transform={'translate(0, 0)'}
                            ></path>
                        </clipPath>
                    </defs>
                    <path
                        className={'ytp-svg-fill ytp-svg-volume-animation-speaker'}
                        clipPath={'url(#ytp-svg-volume-animation-mask)'}
                        d={ytpMuteButtonPath}
                        fill={'#fff'} id={'ytp-id-15'}
                    ></path>
                    <path
                        className={'ytp-svg-fill ytp-svg-volume-animation-hider'}
                        clipPath={'url(#ytp-svg-volume-animation-slash-mask)'}
                        d={'M 9.25 9 L 7.98 10.27 L 24.71 27 l 1.27 -1.27 Z'}
                        fill={'#fff'} id={'ytp-id-16'}
                        style={{display: "none"}}
                    ></path>
                </svg>
            </button>
            <div className={'ytp-volume-panel' + (isVolumeBtnHover ? ' ytp-volume-control-hover' : '')} role={'slider'}
                 aria-valuemin={0} aria-valuemax={100} tabIndex={0}
                 aria-valuenow={left * 2.5} aria-valuetext={(left * 2.5).toString() + '% volume'}
                 aria-label={'Volume'} title={'Volume'}
            >
                <div className={'ytp-volume-slider'} draggable={false}
                     style={{touchAction: "none"}}
                     onClick={handleSliderMouseClick}
                     onMouseEnter={() => isVolumeBtnHover ? setVolumeBtnHover(true) : null}
                     onMouseLeave={() => setTimeout(() => setVolumeBtnHover(false), 700)}
                >
                    <div className={'ytp-volume-slider-handle'}
                         style={{left: left.toString() + 'px'}}
                         onClick={handleSliderHandlerMouseClickInner}
                    ></div>
                </div>
            </div>
        </span>
    )
}

export default VolumeArea

