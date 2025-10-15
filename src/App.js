import DarkMode from './components/DarkMode';
import FormationsExperiences from './components/FormationsExperiences';
import Profil from './components/Profil';
import User from './components/User';
import Skills from './components/Skills';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';


import './App.css';

function App() {

  const handleGenerateCv = () => {
    const cvTemplate = document.getElementById("cv-print")
    if (!cvTemplate) return
    // prepare print styles: set A4 width and remove dark mode for print
    cvTemplate.style.width = "210mm"
    cvTemplate.classList.add("cv-print")
    document.body.classList.remove("dark")
    // allow styles to apply then trigger browser print
    setTimeout(() => {
      window.print()
      // restore
      cvTemplate.style.width = "100%"
      cvTemplate.classList.remove("cv-print")
    }, 300)
  }
  return (
    <div id={"cv-print"} className="App">

      <div className="grid__container">
        <div className="sidebar">
          <div className="actions">
          <DarkMode />
          <button onClick={handleGenerateCv}> 
          <PictureAsPdfOutlinedIcon />
          </button>
          </div>
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
