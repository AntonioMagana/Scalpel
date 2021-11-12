import { useState } from "react"
import Header from './components/header'
import TopNav from './components/topNav'
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

  return (
    <div className='container'>
{/** header.js **/}
      <Header />

{/** this is topNav.js **/}
      <TopNav
        homeClick={() => setBodyStock(!bodyStock)} 
        bbClick={() => setBodyBB(!bodyBB)} 
        amazonClick={() => setBodyAmazon(!bodyAmazon)} 
        walmartClick={() => setBodyWalmart(!bodyWalmart)} 
        howClick={() => setBodyHow (!bodyHow)} 
        aboutClick={() => setBodyAbout(!bodyAbout)} 
      />

{/** this is bodies.js **/}
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
