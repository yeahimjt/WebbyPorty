import React, {useState, createContext} from 'react'
import Homepage from './containers/Homepage';
import Nav from './components/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Profile from './containers/Profile';
import Projects from './containers/Projects';
import SkillTease from './containers/SkillTease';
import AboutTease from './containers/AboutTease';
import Contact from './containers/Contact';
import Alert from './components/Alert';
// ..
AOS.init();
export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((cur)=> (cur==="light"?"dark":"light"))
  }
  const [alert, setAlert] = useState(null)

  

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="w-screen overflow-x-hidden">
        <div className="overflow-hidden w-full">
        <Nav/>
        </div>
        <Homepage />
        <AboutTease />
        <Projects />
        <Profile />
        <Contact alert={alert} setAlert={setAlert}/>
        {
        alert ?
        <Alert alert={alert} setAlert={setAlert}/>
        :
        ''
      }
      </div>
      
    </ThemeContext.Provider>
  );
}

export default App;
