import './app.scss'
import Header from "../header/header";
import SideBar from "../sidebar/sidebar";
import VideosPage from "../videosPage/videosPage";
import {PopupContainer} from "../popupContainer/popupContainer";
import {useState} from "react";

export default function App() {
    let [pageMenuOptionsVisibility, setPageMenuOptionsVisibility] = useState(false)

    const handlePageMenuOptions = () => {
        setPageMenuOptionsVisibility(!pageMenuOptionsVisibility)
    }

    return  (
        <ytd-app darker-dark-theme guide-persistent-and-visible>
            <div id={'contents'}>
                <Header onMenuButtonClick={handlePageMenuOptions}/>
                <SideBar/>
                <VideosPage/>
            </div>
            <PopupContainer isVisible={pageMenuOptionsVisibility}/>
        </ytd-app>
    )
}