import React, {useState, createContext} from 'react'
import Nav from './components/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Alert from './components/Alert';
import { Link, Route, Routes } from 'react-router-dom';
import Mainpage from './containers/Mainpage';
import CentralTech from './containers/CentralTech';
import ScrollToTop from './components/ScrollToTop';
import MyLlave from './containers/MyLlave';
import FilmReview from './containers/FilmReview';
AOS.init();
export const ThemeContext = createContext(null)
export const ProjectAnimationContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')
  const [projectState, setProjectState] = useState({
    initial: false,
    clicked: false,
    redirect: ''
  })
  const toggleTheme = () => {
    setTheme((cur)=> (cur==="light"?"dark":"light"))
  }
  const [alert, setAlert] = useState(null)
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ProjectAnimationContext.Provider value={{projectState, setProjectState}}>
      <div className="w-screen overflow-x-hidden">
        {theme === "light" ?
          <Link to="/">
            <svg className="absolute top-8 left-8 z-20" width="54" height="74" viewBox="0 0 54 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14.5" cy="7.5" r="7.5" fill="#17D9E4"/>
              <path d="M3.09212 18.7907C4.66633 19.0159 16.679 16.633 22.4886 15.4134C22.8634 21.7928 23.3882 38.0415 22.4886 52.001C21.6595 64.8666 9.30566 71.3892 1.79958 73.5076C1.12763 73.9686 0.505375 74.0751 0 73.9536C0.558095 73.836 1.16131 73.6877 1.79958 73.5076C4.24233 71.8317 7.34191 65.4706 7.87102 48.3423C8.54568 26.5023 5.90322 20.4794 4.49766 20.1979C3.37323 19.6351 1.51792 18.5656 3.09212 18.7907Z" fill="#4B4B4B"/>
              <path d="M24.1753 14.8505C29.7974 12.8804 40.3109 9.9534 43.0095 5V15.4134H53.9727V21.0423H43.0095V45.8093C43.2906 47.8732 44.9211 52.001 49.1939 52.001C52.1424 52.001 53.3865 51.6437 53.8128 51.2988C53.8751 51.1504 53.9283 51.0088 53.9727 50.8753C54.0308 50.9916 54.0043 51.1439 53.8128 51.2988C52.8255 53.6524 49.5676 57.6996 43.0095 57.9114C34.2952 58.1928 30.3597 54.2526 30.0786 52.001C29.8537 50.1998 29.9849 30.6114 30.0786 21.0423H24.1753V14.8505Z" fill="#4B4B4B"/>
            </svg>
          </Link>
          :
          <Link to="/">
            <svg className="absolute top-8 left-8 z-20" width="54" height="74" viewBox="0 0 54 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14.5" cy="7.5" r="7.5" fill="#17D9E4"/>
              <path d="M3.09212 18.7907C4.66633 19.0159 16.679 16.633 22.4886 15.4134C22.8634 21.7928 23.3882 38.0415 22.4886 52.001C21.6595 64.8666 9.30566 71.3892 1.79958 73.5076C1.12763 73.9686 0.505375 74.0751 0 73.9536C0.558095 73.836 1.16131 73.6877 1.79958 73.5076C4.24233 71.8317 7.34191 65.4706 7.87102 48.3423C8.54568 26.5023 5.90322 20.4794 4.49766 20.1979C3.37323 19.6351 1.51792 18.5656 3.09212 18.7907Z" fill="white"/>
              <path d="M24.1753 14.8505C29.7974 12.8804 40.3109 9.9534 43.0095 5V15.4134H53.9727V21.0423H43.0095V45.8093C43.2906 47.8732 44.9211 52.001 49.1939 52.001C52.1424 52.001 53.3865 51.6437 53.8128 51.2988C53.8751 51.1504 53.9283 51.0088 53.9727 50.8753C54.0308 50.9916 54.0043 51.1439 53.8128 51.2988C52.8255 53.6524 49.5676 57.6996 43.0095 57.9114C34.2952 58.1928 30.3597 54.2526 30.0786 52.001C29.8537 50.1998 29.9849 30.6114 30.0786 21.0423H24.1753V14.8505Z" fill="white"/>
            </svg>
          </Link>
        
        }
        <div className="overflow-hidden w-full">
        <Nav/>
        </div>
        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Mainpage setAlert={setAlert}/>}/>
          <Route path="/central-tech" element={<CentralTech />}/>
          <Route path="/my-llave" element={<MyLlave />}/>
          <Route path="/film-review" element={<FilmReview />}/>
        </Routes>
        </ScrollToTop>
        {
        alert ?
        <Alert alert={alert} setAlert={setAlert}/>
        :
        ''
      }
      </div>
      </ProjectAnimationContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
