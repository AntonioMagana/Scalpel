import Header from './components/Header'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Body from './components/Body'

function App() {
  return (
    <div className='container'>
      <Header />
      <TopNav />
      <div className='divider'></div>
      <Body   />
      <Footer />
    </div>
  );
}

export default App;
