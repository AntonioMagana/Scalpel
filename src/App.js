import { useState } from "react"
import Header from './components/Header'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Body from './components/Body'

function App() {
    //Stock Body
    const [bodyStock, setBodyStock] = useState(
    true //Set to true when using real website
    )
    
    //Best Buy Form
    const [bodyBB, setBodyBB] = useState(
    false
    )
    
    //Amazon Form
    const [bodyAmazon, setBodyAmazon] = useState(
    false
    )
    
    //Walmart Form
    const [bodyWalmart, setBodyWalmart] = useState(
    false
    )

    //How To Body
    const [bodyHow, setBodyHow] = useState(
    false  //set to false when using real website
    )

    //About Us Body
    const [bodyAbout, setBodyAbout] = useState(
    false
    )

  return (
    <div className='container'>
      <Header />

      <TopNav 
        homeClick={() => setBodyStock(!bodyStock)} 
        bbClick={() => setBodyBB(!bodyBB)} 
        amazonClick={() => setBodyAmazon(!bodyAmazon)} 
        walmartClick={() => setBodyWalmart(!bodyWalmart)} 
        howClick={() => setBodyHow (!bodyHow)} 
        aboutClick={() => setBodyAbout(!bodyAbout)} 
      />

      <div className='divider'></div>

      <Body 
      bStock={bodyStock} 
      bBB={bodyBB}  
      bAma={bodyAmazon}  
      bWal={bodyWalmart}  
      bHow={bodyHow}  
      bAbout={bodyAbout}  
      />

      <Footer />
    </div>
  );
}

export default App;
