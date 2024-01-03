import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LogIn} from './component/Login/Login.js';
import {SignUp} from './component/SignUp/SignIn.js';
import Footer from './component/Footer/footer.js';
import {Body} from './component/Body/body.js';
import { LogInNo } from './component/Login/LoginNo.js';
import {Navbar} from './component/Header/header.js';
import {Shop} from './component/Header_content/Shop.js';
import {About} from './component/Header_content/About.js';
import {Review} from './component/Header_content/Review.js';
import { Terms } from './component/Footer_content/Terms.js';
import { Privacy } from './component/Footer_content/Privacy.js';
import { FAQs } from './component/Footer_content/FAQs.js';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Body />} />
      <Route path='/Body' element={<Body />} />
      <Route path='/LogIn' element={<LogIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/LogInNo' element={<LogInNo />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/About' element={<About />} />
      <Route path='/Review' element={<Review />} />
      <Route path='/Terms' element={<Terms />} />
      <Route path='/Privacy' element={<Privacy />} />
      <Route path='/FAQs' element={<FAQs />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;