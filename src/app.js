import React, {useEffect, useState} from "react"
import Header from './components/header'
import TopNav from './components/topNav'
import Footer from './components/footer'
import Body from './components/body'
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { getListing } from './api.listing.js'
import { getProductDetails } from "./api.search.js";
import Table from './components/table';
import AmazonTable from './components/amazonTable';

function App() {
    // Create states for e-commerce stores
    const [bodyStock, setBodyStock] = useState(true) // set to true when using real website
    const [bodyBB, setBodyBB] = useState(false)
    const [bodyAmazon, setBodyAmazon] = useState(false)
    const [bodyWalmart, setBodyWalmart] = useState(false)
    const [bodyHow, setBodyHow] = useState(false)  // set to false when using real website)
    const [bodyAbout, setBodyAbout] = useState(false)
    const [repo, setRepo] = useState([]) // holds API response data

    /* returns the list of available offers for the specified product (New, Used, etc…). */
    const amazonListing = async () => {
        try {
            const results = await getListing('nintendo_switch');
            setRepo(results);
        }
        catch (err) { console.error(err); }
    }
    useEffect(() => amazonListing(), []);

    /* returns the Product informations for the specified Marketplace and ASIN. */
    const amazonProductDetails = async () => {
        try {
            const results = await getProductDetails('B07VGRJDFY'); // Nintendo Switch ASIN
            setRepo(results);
        }
        catch (err) { console.error(err); }
    }
    //useEffect(() => amazonProductDetails(), []);

    const mdTheme = createTheme(); // materialUI theme
    return (
        <div className='container'>
            <ThemeProvider theme={mdTheme}>
                {/* HEADER displays project title and logo */}
                <Header />
                {/* TOP NAV BAR displays store buttons, toggles state when clicked */}
                <TopNav
                    homeClick={()       => setBodyStock(!bodyStock)     }
                    bbClick={()         => setBodyBB(!bodyBB)           }
                    amazonClick={()     => setBodyAmazon(!bodyAmazon)   }
                    walmartClick={()    => setBodyWalmart(!bodyWalmart) }
                    howClick={()        => setBodyHow (!bodyHow)        }
                    aboutClick={()      => setBodyAbout(!bodyAbout)     }
                />
                {/* BODY returns HTML/JSX depending on state */}
                <Body
                    bStock={   bodyStock   }
                    bBB={      bodyBB      }
                    bAma={     bodyAmazon  }
                    bWal={     bodyWalmart }
                    bHow={     bodyHow     }
                    bAbout={   bodyAbout   }
                />
                {/* TABLE with Amazon API data
                 { Table(repo) }
                */}
                {/*TODO: TEST AMAZON TABLE*/}
                { AmazonTable(repo) }
                {/* FOOTER has Scalpel label in bottom webpage */}
                <Footer />
            </ThemeProvider>
        </div>
  );
}

export default App;
