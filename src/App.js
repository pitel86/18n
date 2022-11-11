import './App.css';
import { MyContext } from './context/MyContext';
import {useTranslation} from 'react-i18next'
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Houses from './pages/Houses';

function App() {
  const {t,i18n} = useTranslation(['translation'])
  const changeLanguaje = (code) => {
    i18n.changeLanguage(code)
  }
  return (
    <MyContext.Provider value={{t, changeLanguaje}}>
      <div className="App">
        <Navbar />
        <Main />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/houses" element={<Houses/>}/>
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
