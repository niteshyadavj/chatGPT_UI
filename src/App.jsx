import './App.css'
import { Cta,Brand,Navbar } from './components/index'
import { Blog,Features,Footer,Header,WhatGPT3,Possibility} from './containers/index';

function App() {
  

  return (
    <div className='App'>
     <div className="gradient__bg">
      <Navbar/>
      <Header/>
     </div>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Footer/>
        
    </div>
  )
}

export default App
