import Features from "./Features"
import Getin from "./GetIn"
import Hero from "./Hero"
import Home from "./Home"
import Howit from "./Howit"
import { Layer } from "./Layer"
import Price from "./Price"
import ScreenShots from "./ScreenShot"
import Subtxt from "./Subtxt"
import Twitter from "./Twitter"
import Work from "./Work"

export const HomeScreen = ()=>{
    return(
        <div>
            <Hero/>
            <Home/>
            <Features/>
            <Layer/>
            <Howit/>
            <Price/>
            <ScreenShots/>
            <Work/>
            <Twitter/>
            <Subtxt/>
            <Getin/>
        </div>
    )
}