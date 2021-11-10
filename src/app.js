import React, {useEffect, useState} from "react"
import Header from './components/header'
import TopNav from './components/topNav'
import Footer from './components/footer'
import Body from './components/body'
import Table from './components/table'
import db from './firebase'
import { getListing } from './api.js'
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"

function App() {
    // Create states for e-commerce stores
    const [bodyStock, setBodyStock] = useState(true) // set to true when using real website
    const [bodyBB, setBodyBB] = useState(false)
    const [bodyAmazon, setBodyAmazon] = useState(false)
    const [bodyWalmart, setBodyWalmart] = useState(false)
    const [bodyHow, setBodyHow] = useState(false)  // set to false when using real website)
    const [bodyAbout, setBodyAbout] = useState(false)
    const [repo, setRepo] = useState([]) // holds API response data

    //Firebase Database
    const itemsRef = db.firestore().collection("items");

    // AXIOS API FETCH AMAZON DATA ACCORDING TO ASIN
    const getRepo = async () => {
        try {
            const results = await getListing('nintendo_switch');
            setRepo(results);
        }
        catch (err) { console.error(err); }
    }
    useEffect(() => getRepo(), []);
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
                {/* TABLE with Amazon API data */}
                { Table(repo) }
                {/* FOOTER has Scalpel label in bottom webpage */}
                <Footer />
            </ThemeProvider>
        </div>
  );
}

export default App;
