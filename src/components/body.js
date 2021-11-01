import Home from './Bodies/home'
import BestBuy from './Bodies/bestBuy'
import Amazon from './Bodies/amazon'
import Walmart from './Bodies/walmart'
import HowTo from './Bodies/howTo'
import AboutUs from './Bodies/aboutUs'

const Body = ( {bStock, bBB, bAma, bWal, bHow, bAbout}) => {

    return (
        <div className='body'>
            {bStock && <Home/>}
            {bBB && <BestBuy/>}
            {bAma && <Amazon/>}
            {bWal && <Walmart/>}
            {bHow && <HowTo />}
            {bAbout && <AboutUs/>}
        </div>
    )
}

export default Body
