import './app.scss'
import Header from "../header/header";
import SideBar from "../sidebar/sidebar";
import VideosPage from "../videosPage/videosPage";
import {PopupContainer} from "../popupContainer/popupContainer";
import {useEffect, useState} from "react";
import {RecoilRoot} from "recoil";


function YtdApp(props) {
    let [pageMenuOptionsVisibility, setPageMenuOptionsVisibility] = useState(false)

    const handlePageMenuOptions = () => {
        setPageMenuOptionsVisibility(!pageMenuOptionsVisibility)
    }

    return (
        <ytd-app darker-dark-theme guide-persistent-and-visible={false}>
            <div id={'contents'}>
                <Header onMenuButtonClick={handlePageMenuOptions}/>
                {/*<SideBar/>*/}
                <VideosPage/>
            </div>
            <PopupContainer isVisible={pageMenuOptionsVisibility}/>
        </ytd-app>
    )
}

export default function App() {
    return  (
        <RecoilRoot>
            <YtdApp/>
        </RecoilRoot>
    )

}