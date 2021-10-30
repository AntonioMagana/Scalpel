import React, {useEffect, useState} from "react"
import Header from './components/Header'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Body from './components/Body'
import api from './api.js'
import Amazon from "./components/Bodies/Amazon";

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
            api.getData()
                .then((response) => {
                    console.log(response.data.results);
                    const myRepo = response.data.results;

                    var isArr = myRepo instanceof Array;
                    isArr = Object.prototype.toString.call(myRepo) === '[object Array]';
                    console.log(isArr);

                    setRepo(myRepo);
                })
        }
        catch (err){
            //console.error(err);
        }
    }
    useEffect(() => getRepo(), []);

/*
    useEffect(() => {
        const getRepo =  async () =>  {
            try {
                const response = await api.getData();
                console.log(response);
                const myRepo = response.data;
                setRepo(myRepo);
            } catch(error) {
                console.log(error);
            }
        };
        getRepo();
    }, []);

 */
    /*
    const getRepo = async (e) => {
        try
        {
            e.preventDefault()
            await api.getData()
                .then(response =>
                {
                    let jsonRes = JSON.stringify(response.data); // Convert Listing Obj to JSON String
                    setRepo(jsonRes)
                })
                .catch((error) => { console.log(error)} )
        }
        catch (err){ console.error(err); }
    }

     */


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

        <div>
            <button onClick={(e) => getRepo(e)} type='button'> Amazon API Data</button>
            <p>{ repo }</p>
            { }
        </div>
         <Amazon key={repos.results}>
                        <p >{repos.seller.name}</p>
                        <p>{repos.current_price}</p>
                        <p>{repos.seller.condition}</p>
                    </Amazon>



        */}
        <ol>
            {repo.map(rep => (
                <li></li>
            ))}
        </ol>
      <Footer/>
    </div>
  );
}

export default App;
