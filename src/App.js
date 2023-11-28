import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero_section from './component/Hero_section';
import Featured from './component/Featured';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Section5 from './component/Section5';
import Section6 from './component/Section6';
import Last_section from './component/Last_section';


function App() {
  return (<div className=' overflow-hidden' > <Hero_section /> 
     <Featured/>
    <Section2 />
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6 />
    <Last_section/>
    </div>

  );
}

export default App;