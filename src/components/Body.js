import Home from './Bodies/Home'
import BestBuy from './Bodies/BestBuy'
import Amazon from './Bodies/Amazon'
import Walmart from './Bodies/Walmart'
import HowTo from './Bodies/HowTo'
import AboutUs from './Bodies/AboutUs'

const Body = ( {bStock, bBB, bAma, bWal, bHow, bAbout}) => {

    return (
        <div className='body'>
            {bStock && <Home   />}
            {bBB && <BestBuy   />}
            {bAma && <Amazon   />}
            {bWal && <Walmart  />}
            {bHow && <HowTo    />}
            {bAbout && <AboutUs   />}
        </div>
    )
}

export default Body
