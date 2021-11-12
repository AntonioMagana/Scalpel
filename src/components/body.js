import HomeBody from './bodies/home.body'
import BestBuyBody from './bodies/bestBuy.body'
import AmazonBody from './bodies/amazon.body'
import WalmartBody from './bodies/walmart.body'
import HowToBody from './bodies/howTo.body'
import AboutUsBody from './bodies/aboutUs.body'

const Body = ( {bStock, bBB, bAma, bWal, bHow, bAbout}) => {

    return (
        <div className='body'>
            {bStock && <HomeBody   />}
            {bBB && <BestBuyBody   />}
            {bAma && <AmazonBody   />}
            {bWal && <WalmartBody  />}
            {bHow && <HowToBody    />}
            {bAbout && <AboutUsBody   />}
        </div>
    )
}

export default Body
