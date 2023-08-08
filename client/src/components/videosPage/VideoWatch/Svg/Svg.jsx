import './Svg.scss';
export const Svg = (props) => {
    return (
        <svg height={'100%'} version={'1.1'}
             viewBox={'0 0 36 36'} width={'100%'} opacity={props?.opacity ? props.opacity : null}>
            {props.iconPaths ?  //If multiple paths
                props.iconPaths.map((item) =>
                        <g className={props.commonClass + item.class.toString()}>
                            <use className={'ytp-svg-shadow'} href={'#ytp-id-' + item.id.toString()}></use>
                            <path className={'ytp-svg-fill'} d={item.path} id={'ytp-id-' + item.id.toString()}                            >
                            </path>
                        </g>
                ) : //else
                <>
                    <use className={'ytp-svg-shadow'} href={'#ytp-id-' + props.id.toString()}></use>
                    <path className={'ytp-svg-fill'} d={props?.iconPath} id={'ytp-id-' + props.id.toString()}
                          fill={props?.fill ? props.fill : null} fillRule={props?.fillRule ? props.fillRule : null}
                    >
                    </path>
                </>

            }

        </svg>)
}