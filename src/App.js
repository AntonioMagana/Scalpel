import { useState } from "react"
import Header from './components/header'
import TopNavBar from './components/topNavBar'
import Footer from './components/footer'
import Body from './components/body'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    //Stock Body
    const [bodyStock, setBodyStock] = useState(true) //Set to true when using real website)
    //Best Buy Form
    const [bodyBB, setBodyBB] = useState(false)
    //AmazonBody Form
    const [bodyAmazon, setBodyAmazon] = useState(false)
    //WalmartBody Form
    const [bodyWalmart, setBodyWalmart] = useState(false)
    //How To Body
    const [bodyHow, setBodyHow] = useState(false)  //set to false when using real website)
    //About Us Body
    const [bodyAbout, setBodyAbout] = useState(false)
    //Body Flag
    const [bodyFlag, setBodyFlag] = useState(false)

    function toggleStateToFalse() {
        setBodyStock(false);
        setBodyBB(false);
        setBodyAmazon(false);
        setBodyWalmart(false);
        setBodyHow(false);
        setBodyAbout(false);
    }

  return (
    <div className='container'>
{/** header.js **/}
      <Header />

{/** this is topNavBar.js **/}
      <TopNavBar
        homeClick={() => {
            toggleStateToFalse()
            setBodyStock(true)
        }}
        bbClick={() =>{
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
            setBodyHow (true)
        }}
        aboutClick={() => {
            toggleStateToFalse()
            setBodyAbout(true)
        }}
      />

{/** this is _body.js **/}
      <Body
      bStock={bodyStock} 
      bBB={bodyBB}  
      bAma={bodyAmazon}  
      bWal={bodyWalmart}  
      bHow={bodyHow}  
      bAbout={bodyAbout}  
      />

{/** this is header.js **/}
      <Footer />
    </div>
  );
}

export default App;
