import Dashboard from './dashboard'
import BestBuyBody from './_body/bestBuy.body'
import AmazonBody from './_body/amazon.body'
import WalmartBody from './_body/walmart.body'
import HowToBody from './_body/howTo.body'
import AboutUsBody from './_body/aboutUs.body'

const Body = ({bStock, bBB, bAma, bWal, bHow, bAbout}) => {

    return (
        <div className='body'>
            {bStock &&  <Dashboard/>}
            {bBB &&     <BestBuyBody/>}
            {bAma &&    <AmazonBody/>}
            {bWal &&    <WalmartBody/>}
            {bHow &&    <HowToBody/>}
            {bAbout &&  <AboutUsBody/>}
        </div>
    )
}

export default Body
