import { useState } from "react"
import Header from './components/header'
import _top_nav from './components/_top_nav'
import Footer from './components/footer'
import Body from './body'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
function App() {
    // states

    const [bodyStock, setBodyStock] = useState(true) //Set to true when using real website)
    const [bodyBB, setBodyBB] = useState(false)
    const [bodyAmazon, setBodyAmazon] = useState(false)
    const [bodyWalmart, setBodyWalmart] = useState(false)
    const [bodyHow, setBodyHow] = useState(false)  //set to false when using real website)
    const [bodyAbout, setBodyAbout] = useState(false)
    const [bodySearch, setBodySearch] = useState(false);


    function toggleStateToFalse() {
        setBodyStock(false);
        setBodyBB(false);
        setBodyAmazon(false);
        setBodyWalmart(false);
        setBodyHow(false);
        setBodyAbout(false);
        setBodySearch(false);
    }

    return (
        <div className='container'>
            {/** header.js **/}
            <Header/>

            {/** this is topnav.js **/}
            <_top_nav
                homeClick={() => {
                    toggleStateToFalse()
                    setBodyStock(true)
                }}
                bbClick={() => {
                    toggleStateToFalse()
                    setBodyBB(true)
                }}
                amazonClick={() => {
                    toggleStateToFalse()
                    setBodyAmazon(true)
                }}
                walmartClick={() => {
                    toggleStateToFalse()
                    setBodyWalmart(true)
                }}
                howClick={() => {
                    toggleStateToFalse()
                    setBodyHow(true)
                }}
                aboutClick={() => {
                    toggleStateToFalse()
                    setBodyAbout(true)
                }}
                searchClick={() => {
                    toggleStateToFalse()
                    setBodySearch(true)
                }}
            />

            {/** this is pages.js **/}
            <Body
                bStock={bodyStock}
                bBB={bodyBB}
                bAma={bodyAmazon}
                bWal={bodyWalmart}
                bHow={bodyHow}
                bAbout={bodyAbout}
                bSearch={bodySearch}
            />

            {/** this is header.js **/}
            <Footer/>
        </div>
    );
}

export default App;
