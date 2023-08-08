import './sidebar.scss'
import YoutubeIconShape from "../ExtraComponenets/IconShapes/iconShape";
import {sections} from "./section";
import {footerSections} from "./footerSections";
import {SignInButton} from "../header/header";

function EntryRenderer(props) {
    return (
        <ytd-guide-entry class={'ytd-guide-section-renderer'}
                         active is-primary line-end-style={'none'}>
            <a id={'endpoint'} className={'yt-simple-endpoint ytd-guide-entry-renderer'}
               tabIndex={-1} role title={props.entry.title} href={'/'}>
                <tp-yt-paper-item class={'ytd-guide-entry-renderer'} role={'link'} style-target={'host'}
                                  tabIndex={0} aria-disabled={'false'}>
                    <yt-icon class={'guide-icon ytd-guide-entry-renderer'}>
                        <YoutubeIconShape path={props.entry.path} isYoutubeIcon={props.entry.isYoutubeIcon}
                                          shape={props.entry.inSideSvg}/>
                    </yt-icon>
                    <yt-formatted-string
                        class={'title ytd-guide-entry-renderer'}>{props.entry.title}</yt-formatted-string>
                </tp-yt-paper-item>
            </a>
        </ytd-guide-entry>
    )
}

function SectionRenderer(props) {

    let entries = props.section.entries.map((entry) =>
        <EntryRenderer entry={entry}></EntryRenderer>
    )

    const displayHeading = (heading) => {
        if (heading !== '') return (
            <h3 className={'ytd-guide-section-renderer'}>
                <yt-formatted-string id={'guide-section-title'} link-inherit-color
                                     class={'ytd-guide-section-renderer'}>
                    {props.section.heading}
                </yt-formatted-string>
            </h3>
        )
    }

    return (
        <ytd-guide-section class={'ytd-guide-renderer'}>
            {displayHeading(props.section.heading)}
            <div id={'items'} className={'ytd-guide-section-renderer'}>
                {entries}
            </div>
        </ytd-guide-section>
    )
}

function SignInSectionRenderer() {
    return (
        <ytd-guide-sign-in-promo-renderer class={'ytd-guide-renderer'}>
            <yt-formatted-string class={'ytd-guide-sign-in-promo-renderer'}>
                Sign in to like videos, comment, subscribe.
            </yt-formatted-string>
            <yt-button-renderer id={'sign-in-button'} class={'ytd-guide-sign-in-promo-renderer'}
            button-renderer button-next>
                <SignInButton/>
            </yt-button-renderer>
        </ytd-guide-sign-in-promo-renderer>
    )
}

function Footer({footers}) {
    const FooterLinks = (links, title) => {
        return links.map((link) =>
            <a slot={'guide-links-' + title} href={link.link}
            style={{display:"none"}}>
                {link.name}
            </a>
        )
    }

    const footerItems = footers.map((sec) =>
        <div id={'guide-links-' + sec.title} className={'ytd-guide-renderer'}>
            {FooterLinks(sec.links, sec.title)}
        </div>
    )

    return (
        <div id={'footer'} className={'ytd-guide-renderer'}>
            {footerItems}
            <div id={'copyright'} slot={'copyright'}
                style={{display: "none"}}>
                <div dir={'ltr'} style={{display: "inline"}}>
                     2023 Adam Warlock
                </div>
            </div>
        </div>
    )
}

export default function SideBar(props) {

    let sectionItems = sections.map((section, index) =>
        section.isSignIn ? <SignInSectionRenderer/> :
            <SectionRenderer section={section}/>
    )

    return (
        <tp-yt-app-drawer id={'guide'} role={'navigation'} align={'start'}
                          style={{transitionDuration: '0ms', touchAction: 'pan-y'}} position={'left'}
                          swipe-open persistent opened>
            <div id={'contentContainer'} className={'tp-yt-app-drawer'} style={{transitionDuration: '0ms'}}
                 position={'left'} swipe-open persistent opened>
                <div id={'guide-wrapper'} className={'ytd-app'}>
                    <div id={'guide-spacer'} className={'ytd-app'}></div>
                    <div id={'guide-content'} className={'ytd-app'}>
                        <div id={'guide-inner-content'} className={'ytd-app'}>
                            <ytd-guide id={'guide-renderer'} class={'ytd-app'}>
                                <div id={'sections'} className={'ytd-guide-renderer'}>
                                    {sectionItems}
                                </div>
                                <Footer footers={footerSections}/>
                            </ytd-guide>
                        </div>
                    </div>
                </div>
            </div>
        </tp-yt-app-drawer>
    )
}