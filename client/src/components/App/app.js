import './app.scss'
import Header from "../header/header";
import SideBar from "../sidebar/sidebar";
import VideosPage from "../videosPage/videosPage";
import {PopupContainer} from "../popupContainer/popupContainer";
import {useEffect, useState} from "react";
import {type} from "@testing-library/user-event/dist/type";

export default function App() {
    let [pageMenuOptionsVisibility, setPageMenuOptionsVisibility] = useState(false)
    let [data, setData] = useState(null)


    // useEffect(() => {
    //     fetch('/some')
    //         .then(response => response.json())
    //         .then(body => setData(body))
    // }, [])

    const handlePageMenuOptions = () => {
        setPageMenuOptionsVisibility(!pageMenuOptionsVisibility)
    }

    // if (typeof data.some !== undefined) alert('Message is : ' + data.some)

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