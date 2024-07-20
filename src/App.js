import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/client/Homepage";
import Contact from "./pages/client/Contact";
import Board from "./pages/client/About/Board";
import AboutsUs from "./pages/client/About/AboutsUs";
import Program from "./pages/client/Programs/Program";
import JoinUs from "./pages/client/JoinUs/JoinUs";
import GoodCitizenshipProgramme from "./components/GoodCitizenshipProgramme";
import AftercareProgramme from './components/AftercareProgramme';
import SkillDevelopment from './components/SkillDevelopment';
import TalentBankDevelopment from './components/TalentBankDevelopment';
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";
import Partners from "./components/Partners";
import Aboutssf from "./components/Aboutssf";
import AboutUs from "./components/AboutUs";
import DonationDetails from './components/DonationDetails';
import Faq from "./components/Faq";
import History from "./components/History";
import Leadership from "./components/Leadership";
import ScrollToTop from "./components/ScrollToTop";
import DonorsAndNotifications from './components/DonorsAndNotifications';
import Shiningstars from "./components/Shiningstars";
import Donorlist from "./components/Donorlist";
import Writetous from "./components/Writetous";
import Notification from "./components/Notification";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/about" element={<AboutsUs />} />
                <Route exact path="/about/board" element={<Board />} />
                <Route exact path="/programs" element={<Program />} />
                <Route exact path="/programme/goodCitizen" element={<AboutsUs />} />
                <Route exact path="/joinUs" element={<JoinUs />} />
                <Route path="/GoodCitizenshipProgramme" element={<GoodCitizenshipProgramme />} />
                <Route path="/AftercareProgramme" element={<AftercareProgramme />} />
                <Route path="/SkillDevelopment" element={<SkillDevelopment />} />
                <Route path="/TalentBankDevelopment" element={<TalentBankDevelopment />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Donate" element={<Donate />} />
                <Route path="/Partners" element={<Partners />} />
                <Route path="/Aboutssf" element={<Aboutssf />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/donation-details" element={<DonationDetails />} />
                <Route path="/Faq" element={<Faq />} />
                <Route path="/History" element={<History />} />
                <Route path="/Leadership" element={<Leadership />} />
                <Route path='/DonorsAndNotifications' element={<DonorsAndNotifications />} />
                <Route path="/Shiningstars" element={<Shiningstars />} />
                <Route path="/Donorlist" element={<Donorlist/>}/>
                <Route path="/Writetous" element={<Writetous/>}/>
                <Route path="/Notification" element={<Notification/>}/>
            </Routes>
        </Router>
    );
}

export default App;
