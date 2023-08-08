import './vidoesPage.scss'
import VideoBrowse from "./VideoBrowse/videoBrowse";
import VideoWatch from "./VideoWatch/videoWatch";

//TODO: Arrows to do in chips bar
//TODO: Separating row and item into individual component

export default function VideosPage(props) {

    return (
        <ytd-page-manager id={'page-manager'} class={'ytd-app'}>
            <VideoWatch/>
            {/*<VideoBrowse/>*/}
        </ytd-page-manager>
    )
}