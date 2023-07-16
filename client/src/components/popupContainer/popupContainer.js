import './popupContainer.scss'
import YoutubeIconShape from "../ExtraComponenets/IconShapes/iconShape";
import {
    appearancePath,
    chipsRightArrowButtonPath,
    helpPath,
    keyboardShortcutsPath,
    languagesPath,
    locationPath,
    restrictedModePath, sendFeedbackPath,
    settingPath,
    yourDataInCloneTubePath
} from "../ExtraComponenets/IconShapes/iconShapesPaths";

class PageMenuSectionEntry {
    constructor(primaryText, subtitle, iconPath, hasSecondIcon=false) {
        this.label = primaryText;
        this.subTitle = subtitle;
        this.iconPath = iconPath;
        this.hasSecondIcon = hasSecondIcon
    }
}

class PageMenuSection {
    constructor(sectionHeading, entries) {
        this.sectionHeading = sectionHeading;
        this.entries = entries;
    }
}


const pageMenuSections = [
    new PageMenuSection('', [
        new PageMenuSectionEntry('Your data in cloneTube', '', yourDataInCloneTubePath)
    ]),
    new PageMenuSection('', [
        new PageMenuSectionEntry('Appearance:', 'Device Theme', appearancePath, true),
        new PageMenuSectionEntry('Language:', 'English', languagesPath, true),
        new PageMenuSectionEntry('Restricted mode:', 'Off', restrictedModePath, true),
        new PageMenuSectionEntry('Location:', 'India', locationPath, true),
        new PageMenuSectionEntry('Keyboard Shortcuts', '', keyboardShortcutsPath)
    ]),
    new PageMenuSection('',[
        new PageMenuSectionEntry('Setting', '', settingPath)
    ]),
    new PageMenuSection('',[
        new PageMenuSectionEntry('Help', '', helpPath),
        new PageMenuSectionEntry('Send feedback', '', sendFeedbackPath)
    ])
]

function PageMenuSectionEntryRenderer({entry}) {

    const returnSecondaryIcon = () => {
        if (entry.hasSecondIcon)
            return <YoutubeIconShape path={chipsRightArrowButtonPath} isYoutubeIcon={false}/>
    }

    const returnSubtitle = () => {
        if (entry.subTitle !== '')
            return (
                <yt-formatted-string id={'subtitle'} class={'ytd-compact-link-renderer'}>
                    {entry.subTitle}
                </yt-formatted-string>
            )
    }

    return (
        <ytd-compact-link-renderer class={'ytd-multi-page-menu-renderer'} compact-link-style
                                   hide-secondary-string={'true'}
                                   has-secondary={entry.hasSecondIcon}
        >
            <a id={'endpoint'} className={'yt-simple-endpoint ytd-compact-link-renderer'}
               tabIndex={-1} href={'/'}>
                <tp-yt-paper-item role={'link'} class={'ytd-compact-link-renderer'}
                                  style-target={'host'} tabindex={0} aria-disabled={'false'}
                >
                    <div id={'content-icon'} className={'ytd-compact-link-renderer'}>
                        <yt-icon class={'ytd-compact-link-renderer'}>
                            <YoutubeIconShape path={entry.iconPath} isYoutubeIcon={false} color={'white'}/>
                        </yt-icon>
                    </div>
                    <div id={'primary-text-container'} className={'ytd-compact-link-renderer'}>
                        <yt-formatted-string id={'label'} class={'ytd-compact-link-renderer'}>
                            {entry.label}
                        </yt-formatted-string>
                        {returnSubtitle()}
                    </div>
                    <yt-icon id={'right-icon'} class={'ytd-compact-link-renderer'}>
                        {returnSecondaryIcon()}
                    </yt-icon>
                </tp-yt-paper-item>
            </a>
        </ytd-compact-link-renderer>
    )
}

function PageMenuSectionRenderer({section}) {

    let entryItems = section.entries.map((ent) =>
        <PageMenuSectionEntryRenderer entry={ent}/>
    )

    return (
        <yt-multi-page-menu-section-renderer class={'ytd-multi-page-menu-renderer'}>
            <div id={'items'} className={'yt-multi-page-menu-section-renderer'}>
                {entryItems}
            </div>
        </yt-multi-page-menu-section-renderer>
    )
}
function PageMenuSections(props) {

    let sectionItems = props.sections.map((sec) =>
        <PageMenuSectionRenderer section={sec}/>
    )

    return (
        <div id={'sections'} className={'ytd-multi-page-menu-renderer'}>
            {sectionItems}
        </div>
    )
}

export function PopupContainer(props) {

    const returnDisplay = () => {
        if (!props.isVisible) return {display: "none"}
    }

    return (
        <ytd-popup-container class={'ytd-app'} style={returnDisplay()}>
            <tp-yt-iron-dropdown horizontal-align={'auto'} vertical-align={'top'}
                                 aria-disabled={'false'} class={'ytd-popup-container'}
                                 style={{
                                     outline: "none", zIndex: "2202", position: "fixed",
                                     left: "1097.8px", top: "48px"
                                 }}
                                 prevent-autonav={'true'}
            >
                <div id={'contentWrapper'} className={'tp-yt-iron-dropdown'}>
                    <ytd-multi-page-menu-renderer slot={'dropdown-content'} has-your-data-entry-button
                                                  scrollbar-rework class={'ytd-popup-container'} tabindex={-1}
                                                  menu-style={'multi-page-menu-style-type-system'}
                                                  style={{
                                                      outline: "none", boxSizing: "border-box", maxWidth: "300px",
                                                      maxHeight: "426.4px"
                                                  }}
                    >
                        <div id={'container'} className={'menu-container ytd-multi-page-menu-renderer'}>
                            <PageMenuSections sections={pageMenuSections}/>
                        </div>
                    </ytd-multi-page-menu-renderer>
                </div>
            </tp-yt-iron-dropdown>
        </ytd-popup-container>
    )
}

