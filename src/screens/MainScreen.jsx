import react from "react"
import HightlightsArea from "../components/HightlightsArea"
import TodayWeather from "../components/TodayWeather"

export default function MainScreen(props) {

    return (
        <div className="main-screen-wrapper">
            <TodayWeather />
            <HightlightsArea />
        </div>
    )
}