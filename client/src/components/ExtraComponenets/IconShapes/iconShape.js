import './iconShape.scss'
export default function YoutubeIconShape(props) {

    const returnShape = () => {
        if (props.isYoutubeIcon)
            return props.shape;
        return (
            <path d={props.path} fill={props.color}></path>
        )
    }

    const SvgViewBox = () => {
        if (props.hasViewBox)
            return props.viewBox
        else return "0 0 24 24"
    }

    return (
        <yt-icon-shape>
            <icon-shape class={'yt-spec-icon-shape'}>
                <div style={{
                    width: '100%', height: '100%', color: "currentcolor"
                }}>
                    <svg height="24" viewBox={SvgViewBox} width="24" focusable="false">
                        {returnShape()}
                    </svg>
                </div>
            </icon-shape>
        </yt-icon-shape>
    )
}
