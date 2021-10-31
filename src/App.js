import React, {useEffect, useState} from "react"
import Header from './components/Header'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Body from './components/Body'
import Table from './components/Table';
import { getData } from './api.js'
import Chart from "./components/Chart";
import {Grid, Paper} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";

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


    // Create state variable to hold API response data
    const [repo, setRepo] = useState([])

    // AXIOS API FETCH AMAZON DATA ACCORDING TO ASIN


    const getRepo = async () => {
        try {
            const results = await getData();
            setRepo(results);
        }
        catch (err){
            console.error(err);
        }
    }
    useEffect(() => getRepo(), []);

    const mdTheme = createTheme();

    return (
        <ThemeProvider theme={mdTheme}>
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
                { Table(repo) }
                <Footer/>
            </div>
        </ThemeProvider>

  );
}

export default App;
