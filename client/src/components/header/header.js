import './header.scss'
import YoutubeIconShape from "../ExtraComponenets/IconShapes/iconShape";
import {
    buttonNearSignInPath,
    menuButtonPath,
    searchButtonPath,
    signInButtonPath,
    voiceButtonPath,
    youtubeLogoInsideSVG
} from "../ExtraComponenets/IconShapes/iconShapesPaths";
import YTButtonRenderer from "../ExtraComponenets/Buttons/button";

function YoutubeLogo({color}) {

    return (
        <ytd-topbar-logo-renderer id={'logo'} class={'ytd-masthead'}>
            <a className={'yt-simple-endpoint ytd-topbar-logo-renderer'} id={'logo'}
               href={'http://localhost:3000'} title={'CloneTube Home'}>
                <div className={'ytd-topbar-logo-renderer'}>
                    <ytd-logo class={'ytd-topbar-logo-renderer'}>
                        <yt-icon id={'logo-icon'} class={'ytd-logo'}>
                            <YoutubeIconShape isYoutubeIcon={true} shape={youtubeLogoInsideSVG}/>
                        </yt-icon>
                    </ytd-logo>
                </div>
            </a>
        </ytd-topbar-logo-renderer>
    )
}

export function YoutubeIcon({path, color}) {
    return (
        <div className={'yt-spec-button-shape-next__icon'} aria-hidden={'true'}>
            <yt-icon style={{width: '24px', height: '24px'}}>
                <YoutubeIconShape path={path} color={color}/>
            </yt-icon>
        </div>
    )
}

export function SignInButton() {

    const signInButtonClasses =
        'yt-spec-button-shape-next ' +
        'yt-spec-button-shape-next--outline ' +
        'yt-spec-button-shape-next--call-to-action ' +
        'yt-spec-button-shape-next--size-m ' +
        'yt-spec-button-shape-next--icon-leading'

    return (
        <YTButtonRenderer path={signInButtonPath} name={'Sign In'} label={'Sign in'} type={'anchor'}
                          classes={signInButtonClasses}/>
    )
}

function Start() {
    return (
        <div id={'start'} className={'ytd-masthead'}>
            <yt-icon-button id={'guide-button'} class={'ytd-masthead'}
                            toggleable={'true'}>
                <button id='button' aria-pressed={'true'} className={'yt-icon-button'}
                        aria-label={'Guide'} aria-pressed={'true'}>
                    <yt-icon id={'guide-icon'} icon={'yt-icons:menu'}
                             class={'ytd-masthead'}>
                        <YoutubeIconShape path={menuButtonPath} color={'white'}/>
                    </yt-icon>
                </button>
            </yt-icon-button>
            <YoutubeLogo color={'white'}/>
        </div>
    )
}

function Middle() {
    const voiceButtonClasses =
        'yt-spec-button-shape-next ' +
        'yt-spec-button-shape-next--text ' +
        'yt-spec-button-shape-next--overlay ' +
        'yt-spec-button-shape-next--size-m ' +
        'yt-spec-button-shape-next--icon-only-default'


    return (
        <div id={'center'} className={'middle ytd-masthead'}>
            <ytd-searchbox id={'search'} class={'search ytd-masthead'}>
                <form id='search-form' className={'ytd-searchbox'} action={'/results'}>
                    <div id={'container'} className={'ytd-searchbox'}>
                        <div id={'search-input'} className={'ytd-searchbox-spt'}
                             slot={'search-input'}>
                            <input id={'search'} autoCapitalize={'none'}
                                   autoComplete={'off'} autoCorrect={'off'}
                                   name={'search_query'} tabIndex={0} type={'text'}
                                   spellCheck={'false'} placeholder='Search' aria-label={'Search'}
                                   role={'combobox'} aria-haspopup={'false'} aria-autocomplete={'list'}
                                   dir={'ltr'} className={'ytd-searchbox'} style={{outline: "none"}}
                            />
                        </div>
                    </div>
                </form>
                <button id={'search-icon-legacy'} className={'ytd-searchbox'}>
                    <yt-icon>
                        <YoutubeIconShape path={searchButtonPath} color={'white'}/>
                    </yt-icon>
                </button>
            </ytd-searchbox>
            <div id={'voice-search-button'} className={'ytd-masthead'}>
                <YTButtonRenderer path={voiceButtonPath} classes={voiceButtonClasses}
                                  label={'Search with your voice'} type={'button'} color={'white'}/>
            </div>
        </div>
    )
}

function End(props) {

    return (
        <div id={'end'} className={'ytd-masthead'}>
            <div id={'buttons'} className={'ytd-masthead'}>
                <ytd-topbar-menu-button class={'ytd-masthead'} use-keyboard-focused
                                        is-icon-button has-no-text
                >
                    <div id={'button'} className={'ytd-topbar-menu-button'}>
                        <a className={'yt-simple-endpoint ytd-topbar-menu-button'}
                           tabIndex={-1}>
                            <yt-icon-button id={'button'} class={'ytd-topbar-menu-button'}>
                                <button id={'button'} className={'yt-icon-button'}
                                        aria-label={'Setting'}
                                        onClick={props.onMenuButtonClick}
                                >
                                    <yt-icon class={'ytd-topbar-menu-button'}>
                                        <YoutubeIconShape path={buttonNearSignInPath} color={'white'}/>
                                    </yt-icon>
                                </button>
                            </yt-icon-button>
                        </a>
                    </div>
                </ytd-topbar-menu-button>

                <SignInButton/>
            </div>
        </div>
    )
}

export default function Header(props) {
    return (
        <div id={'masterhead-container'} className={'ytd-app'}>
            <ytd-masthead id={'masthead'} logo-type={'YOUTUBE_LOGO'} slot={'masthead'}
                          clas={'masthead-finish'} page-dark-theme darker-dark-theme role={'banner'}
                          dark guide-persistent-and-visible>
                <div id={'container'} className={'ytd-masthead'}>
                    <Start/>
                    <Middle/>
                    <End onMenuButtonClick={props.onMenuButtonClick}/>
                </div>

            </ytd-masthead>
        </div>
    )
}