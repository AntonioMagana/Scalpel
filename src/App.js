import React, { useState } from "react"
import Header from './components/Header'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Body from './components/Body'
import api from './api.js'

function App() {
    //Stock Body
    const [bodyStock, setBodyStock] = useState(true) //Set to true when using real website
    //Best Buy Form
    const [bodyBB, setBodyBB] = useState(false)
    //Amazon Form
    const [bodyAmazon, setBodyAmazon] = useState(false)
    //Walmart Form
    const [bodyWalmart, setBodyWalmart] = useState(false)
    //How To Body
    const [bodyHow, setBodyHow] = useState(false)  //set to false when using real website)
    //About Us Body
    const [bodyAbout, setBodyAbout] = useState(false)


    // Create state variable to hold response data
    let [responseData, setResponseData] = useState(false)

    //TODO: Fix setReponseData
    // Define function that calls a function on our imported obj containing Axios call
    let arr = [];
    const fetchData = async (e) => {
        try
        {
            e.preventDefault()
            await api.getData()
                .then(response => {
                    let jsonRes = JSON.stringify(response.data.description); // Convert Listing Obj to JSON String
                    setResponseData(jsonRes)
                    console.log(typeof jsonRes)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        catch (err)
        {
           console.error(err);
        }

    }

    return (
    <div className='container'>
        <Header/>

        <TopNav
            homeClick={()       => setBodyStock(!bodyStock)     }
            bbClick={()         => setBodyBB(!bodyBB)           }
            amazonClick={()     => setBodyAmazon(!bodyAmazon)   }
            walmartClick={()    => setBodyWalmart(!bodyWalmart) }
            howClick={()        => setBodyHow (!bodyHow)        }
            aboutClick={()      => setBodyAbout(!bodyAbout)     }
        />

        <Body
            bStock={   bodyStock   }
            bBB={      bodyBB      }
            bAma={     bodyAmazon  }
            bWal={     bodyWalmart }
            bHow={     bodyHow     }
            bAbout={   bodyAbout   }
        />

        {/*
        Displays data using JSX and
        dot-notation to access data in the response object
        */}
        {/*{ responseData && responseData.results.map(result => {
                return <p>{ result }</p>
            })}*/}
        <div>
            <ul>{ responseData }</ul>
            <button onClick={(e) => fetchData(e)} type='button'>
                Amazon API Data
            </button>
            { }



        </div>


      <Footer />
    </div>
  );
}

export default App;
