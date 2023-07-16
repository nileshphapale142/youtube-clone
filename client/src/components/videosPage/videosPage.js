import './vidoesPage.scss'
import YTButtonRenderer from "../ExtraComponenets/Buttons/button";
import {chipsRightArrowButtonPath} from "../ExtraComponenets/IconShapes/iconShapesPaths";
import {useEffect, useState} from "react";

//TODO: Arrows to do in chips bar
//TODO: Separating row and item into individual component


class YoutubeVideo {
    constructor(title, thumbnail, views, uploadTime, uploadDate, channelName, channelLogo) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.views = views;
        this.uploadTime = uploadTime;
        this.uploadDate = uploadDate;
        this.channelName = channelName;
        this.channelLogo = channelLogo;
    }
}


let videos = [
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
    new YoutubeVideo('Some title', 'Some thumbnail', 'Some views', 'Some time', 'Some Date', 'Some channel', 'Some logo'),
]



const chipsArray = [
    'All', 'Music', 'Live', 'Scene', 'Dramedy',
    'Bollywood Music', 'News', 'Gaming', 'Movies', 'Cricket',
    'Football', 'Mantra', 'Gadgets and the best', 'Universe'
]

function YTFeedChipsRenderer(props) {

    let chips = props.chips.map((chip) =>
        <yt-chip-cloud-chip-renderer class={'ytd-feed-filter-chip-bar-renderer iron-selection'}
                                     aria-selected={'true'} role={'tab'} tabindex={0}
                                     chip-style={'STYLE_HOME_FILTER'}>
            <yt-formatted-string id={'text'} ellipsis-truncate
                                 class={'yt-chip-cloud-chip-renderer'} ellipsis-truncate-styling title={chip}>
                {chip}
            </yt-formatted-string>
        </yt-chip-cloud-chip-renderer>
    )

    return (
        <iron-selection id={'chips'} active-event role={'tablist'} selected-attribute
                        class={'ytd-feed-filter-chip-bar-renderer'} style={{transform: 'translateX(0px)'}}>
            {chips}
        </iron-selection>
    )
}

function Header() {

    const rightArrowButtonClasses =
        'yt-spec-button-shape-next ' +
        'yt-spec-button-shape-next--text ' +
        'yt-spec-button-shape-next--mono ' +
        'yt-spec-button-shape-next--size-m ' +
        'yt-spec-button-shape-next--icon-only-default'

    let [chips, setChips] = useState([])


    useEffect(() => {
        fetch('/chips' ).then(response => response.json()).then(body => setChips(body))
    }, [])

    return (
        <div id={'header'} className={'ytd-rich-grid-renderer'}>
            <ytd-feed-filter-chip-bar-renderer class={'ytd-rich-grid-renderer'}
                                               is-dark-theme component-style={'FEED_FILTER_CHIP_BAR_STYLE_TYPE_DEFAULT'}
                                               style={{
                                                   '--ytd-rich-grid-chips-bar-width': '1280px',
                                                   '--ytd-rich-grid-chips-bar-top': '56px'
                                               }} at-start>
                <div id={'chips-wrapper'} className={'ytd-feed-filter-chip-bar-renderer'}>
                    <div id={'scroll-container'} className={'ytd-feed-filter-chip-bar-renderer'}
                         style={{touchAction: "pan-y"}}>
                        <YTFeedChipsRenderer chips={chips}/>
                    </div>
                    <div id={'right-arrow'} className={'ytd-feed-filter-chip-bar-renderer'}>
                        <div id={'right-arrow-button'} className={'ytd-feed-filter-chip-bar-renderer'}>
                            <YTButtonRenderer path={chipsRightArrowButtonPath} label={'Next'}
                                              class={'ytd-feed-filter-chip-bar-renderer'}
                                              classes={rightArrowButtonClasses} type={'button'}/>
                        </div>
                    </div>
                </div>
            </ytd-feed-filter-chip-bar-renderer>
        </div>
    )
}

function ItemRenderer(props) {
    return (
        <ytd-rich-item-renderer class={'ytd-rich-grid-row'} item-per-row={3}>
            <div id={'content'} className={'ytd-rich-item-renderer'}>
                <ytd-rich-grid-media class={'ytd-rich-item-renderer'} lockup={'true'}>
                    <div id={'dismissible'} className={'ytd-rich-grid-media'}>
                        <ytd-thumbnail rich-grid-thumbnail use-hovered-property width={'9999'}
                                       class={'ytd-rich-grid-media'} size={'large'} loaded>
                            <a id={'thumbnail'} className={'yt-simple-endpoint ytd-thumbnail'}
                               aria-hidden={"true"} tabIndex={-1} rel={'null'} href={'/'}>
                                <yt-image alt ftl-eligible notify-on-loaded notify-on-unloaded
                                          class={'ytd-thumbnail'}>
                                    <img alt style={{backgroundColor: 'transparent'}}
                                         className={'yt-core-image--fill-parent-height ' +
                                             'yt-core-image--fill-parent-width ' +
                                             'yt-core-image ' +
                                             'yt-core-image--content-mode-scale-aspect-fill ' +
                                             'yt-core-image--loaded'}
                                         src={'https://c4.wallpaperflare.com/wallpaper/548/258/439/galaxy-4k-for-computer-hd-wallpaper-preview.jpg'}/>
                                </yt-image>
                            </a>
                        </ytd-thumbnail>
                        <div id={'details'} className={'ytd-rich-grid-media'}>
                            <a id={'avatar-link'} className={'yt-simple-endpoint ytd-rich-grid-media'}
                               tabIndex={-1} title={'Some Galaxy'} href={'/'}
                            >
                                <yt-img-shadow id={'avatar'} width={'48'} class={'ytd-rich-grid-media no-transition'}
                                               style={{backgroundColor: "transparent"}} loaded
                                >
                                    <img id={'img'} draggable={'false'} className={'yt-img-shadow'}
                                         alt width={'48'} src={'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'}
                                    />
                                </yt-img-shadow>
                            </a>
                            <div id={'meta'} className={'ytd-rich-grid-media'}>
                                <h3 className={'ytd-rich-grid-media'}>
                                    <a id={'video-title-link'} className={'yt-simple-endpoint ' +
                                        'focused-on-expand ytd-rich-grid-media'} 
                                       aria-label={'Exaggerated Galaxy'}
                                       title={'Exaggerated Galaxy'} 
                                       href={'/'}
                                    >
                                        <yt-formatted-string id={'video-title'} 
                                        class={'ytd-rich-grid-media'} 
                                        aria-label={'Exaggerated Galaxy'}>
                                            {props.video?.title ? props.video?.title : "Adam"}
                                        </yt-formatted-string>
                                    </a>
                                </h3>
                                <ytd-video-meta-block class={'grid ytd-rich-grid-media byline-separator'}
                                    rich-meta amsterdam-post-mvp
                                >
                                    <div id={'metadata'} className={'ytd-video-meta-block'}>
                                        <div id={'byline-container'} className={'ytd-video-meta-block'}>
                                            <ytd-channel-name id={'channel-name'} class={'ytd-video-meta-block'}>
                                                <div id={'container'} className={'ytd-channel-name'}>
                                                    <div id={'text-container'} className={'ytd-channel-name'}>
                                                        <yt-formatted-string id={'text'} link-inherit-color title
                                                        class={'ytd-channel-name complex-string'} ellipsis-truncate
                                                        ellipsis-truncate-styling has-link-only_>
                                                            <a className={'yt-simple-endpoint yt-formatted-string'}
                                                            spellCheck={'false'} href={'/'} dir={'auto'}>
                                                                {props.video?.channelName ? props.video?.channelName : "Adam"}
                                                            </a>
                                                        </yt-formatted-string>
                                                    </div>
                                                </div>
                                            </ytd-channel-name>
                                        </div>
                                        <div id={'metadata-line'} className={'ytd-video-meta-block'}>
                                            <span className={'inline-metadata-item ytd-video-meta-block'}>
                                                {props.video?.views ? props.video?.views : "Adam"}
                                            </span>
                                            <span className={'inline-metadata-item ytd-video-meta-block'}>
                                                {props.video?.uploadTime ? props.video?.uploadTime : "Adam"}
                                            </span>
                                        </div>
                                    </div>
                                </ytd-video-meta-block>
                            </div>
                        </div>
                    </div>
                </ytd-rich-grid-media>
            </div>
        </ytd-rich-item-renderer>
    )
}

function VideoRowRenderer(props) {

    let videoRenderer = props.videos.map((video) =>
        <ItemRenderer video={video}/>
    )

    console.log("Number of video in a row : "  + props.videos.length)

    return (
        <ytd-rich-grid-row className={'ytd-rich-grid-renderer'}>
            <div id={'contents'} className={'ytd-rich-grid-row'}>
                {videoRenderer}
            </div>
        </ytd-rich-grid-row>
    )
}

function Contents(props) {

    let rowVideos = []
    let n = props.videos.length

    for (let i = 0; i < n / 3;  i ++) {
        rowVideos.push(props.videos.slice(3 * i, Math.min(3 * i + 3, n)))
        console.log(rowVideos[i].length)
    }

    console.log('Number of rows : '  + rowVideos.length)

    const rowWiseVideos = rowVideos.map((rV) =>
        <VideoRowRenderer videos={rV}/>
    )

    return (
        <div id={'contents'} className={'ytd-rich-grid-renderer'}>
            {rowWiseVideos}
        </div>
    )
}

export default function VideosPage() {
    return (
        <ytd-page-manager id={'page-manager'} class={'ytd-app'}>
            <ytd-browse class={'ytd-page-manager'} rounded-container darker-dark-theme page-subtype={'home'}
                        rich-grid-watch-status={'inactive'} role={'main'} amsterdam has-sidebar
                        guide-persistent-and-visible>
                <ytd-two-column-browse-results-renderer class={'ytd-browse grid grid-disabled'} page-subtype={'home'}
                                                        disabled-grid-state-aware style={{touchAction: 'pan-down'}}>
                    <div id={'primary'} className={'ytd-two-column-browse-results-renderer'}>
                        <ytd-rich-grid-renderer class={'ytd-two-column-browse-results-renderer'}
                                                style={{
                                                    "--ytd-rich-grid-item-max-width": "360px",
                                                    "--ytd-rich-grid-item-min-width": "320px",
                                                    "--ytd-rich-grid-items-per-row": "3",
                                                    "--ytd-rich-grid-posts-per-row": "3",
                                                    "--ytd-rich-grid-slim-items-per-row": "5",
                                                    "--ytd-rich-grid-game-cards-per-row": "5"
                                                }}>
                            <Header/>
                            <Contents videos={videos}/>
                        </ytd-rich-grid-renderer>
                    </div>
                </ytd-two-column-browse-results-renderer>
            </ytd-browse>
        </ytd-page-manager>
    )
}