import React from "react";
import h2 from './Images/h2.jpg'
import '../Style/About.css'
const About = () => {
  return (
    <>
      <div className="ab" id="about">
        <h1>ABOUT US</h1>
        <div className="container">
          <div className="row">
            <div className="col col-xxl-6 col-12">
              <div className="content">
                <p>
                Welcome to GoLocalGrowth, your digital link to local street vendors and homemade food providers.
                We’re dedicated to spotlighting the unique offerings of street-side businesses, helping them connect with their community and thrive.
                Our platform features a comprehensive directory of vendors with their static addresses, making it easy for you to discover where to find delicious homemade meals and one-of-a-kind crafts.
                GoLocalGrowth allows you to search by area to see what’s available nearby, highlighting the charm and quality of local vendors.
                We’re here to boost their visibility and ensure you can enjoy the best your neighborhood has to offer.
                Whether you’re craving authentic street food or searching for handcrafted treasures, GoLocalGrowth connects you directly to the heart of your community. 
                Join us in supporting local businesses and exploring the vibrant, diverse offerings right in your own backyard.
                <br/><br/>

                ગોલોકલગ્રોથ પર આપનું સ્વાગત છે, જે સ્થાનિક સ્ટ્રીટ વેન્ડરો અને હોમમેડ ફૂડ પ્રોવાઇડરો માટેનું ડિજિટલ લિંક છે.
                અમે સ્ટ્રીટ-સાઇડ બિઝનેસની વિશિષ્ટ પ્રસ્તાવનાઓને પ્રકાશિત કરવામાં વિશ્વસનીય છીએ, જેથી તેઓ તેમની કોમ્યુનિટીની સાથે જોડાઈ શકે અને વિકસિત થઈ શકે.
                આપણા પ્લેટફોર્મ પર, અમે વેન્ડર્સની સ્થિર સરનામાની વિગતો સાથે સંપૂર્ણ ડિરેક્ટરી પ્રદાન કરીએ છીએ, જેથી આપ સરળતાથી શોધી શકો છો કે તમારી નજીક કયા પદાર્થો ઉપલબ્ધ છે.
                ગોલોકલગ્રોથ નો ઉપયોગ કરીને, તમે આપના પેઠે સ્વાદિષ્ટ સ્ટ્રીટ ફૂડ અને અનોખા હેન્ડક્રાફ્ટેડ વસ્તુઓ શોધી શકો છો. 
                અમે સ્થાનિક વ્યવસાયો માટે દૃશ્યમાનતા વધારવા અને આપને આપના પડોશમાં ઉપલબ્ધ શ્રેષ્ઠ વસ્તુઓ માણવાનો અવસર આપવા માટે અહીં છીએ.
                સ્થાનિક બિઝનેસને સપોર્ટ કરવા અને આપના સમુદાયના હૃદય સાથે જોડાવા માટે અમને જોડાવા માટે અમને જોડાઓ.

                </p>
              </div>
            </div>
            <div className="col col-xxl-6 col-12">
              <div className="image-about">
                <img src={h2}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
