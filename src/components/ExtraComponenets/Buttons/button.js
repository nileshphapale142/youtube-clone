import './button.scss'
import {YoutubeIcon} from "../../header/header";

export default function YTButtonRenderer(props) {

    const haveAnyName = (name) => {
        if (props.name) return (
            <div className={'yt-spec-button-shape-next__button-text-content'}>
                <span className={'yt-' + name.toLowerCase().replace(' ', '-') +'-button'}>
                    {name}
                </span>
            </div>
        )
    }

    const buttonType = (type, label) => {
        if (type.toString().toLowerCase() === 'anchor')
            return (
                <a className={props.classes} aria-label={label}>
                    <YoutubeIcon path={props.path} color={props.color}/>
                    {haveAnyName(props.name)}
                </a>
            )
        else
            return (
                <button className={props.classes} aria-label={label}>
                    <YoutubeIcon path={props.path} color={props.color}/>
                    {haveAnyName(props.name)}
                </button>
            )
    }

    return (
        <ytd-button-renderer class={props.class} button-renderer button-next>
            <yt-button-shpae>
                {buttonType(props.type, props.label)}
            </yt-button-shpae>
        </ytd-button-renderer>
    )
}