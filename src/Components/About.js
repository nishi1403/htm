import React from "react";
import '../Style/About.css'
const About = () => {
  return (
    <div id="about">
      <div className="about-back">
        <h1>ABOUT</h1>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-xl-6">
              <p className="about-paragraph">
                <span>GoLocalGrow</span> is a platform with a simple but
                powerful mission: to connect people with local street vendors
                and homemade food providers in their neighborhoods. Our focus is
                on empowering small businesses by helping them become more
                visible and accessible to the community. We’re not a buying or
                selling website – we’re something better. We provide a static
                directory where users can search for vendors based on their
                location and find out exactly what’s available around them.
              </p>
            </div>
            <div className="col col-12 col-sm-12 col-xl-6">
              <p className="about-paragraph-gujarati">
                <span>ગોલોકલગ્રોથ</span> એ એક સરળ પરંતુ શક્તિશાળી મિશન સાથેનું
                પ્લેટફોર્મ છે: તમારા પડોશમાં સ્થાનિક સ્ટ્રીટ વેન્ડર્સ અને હોમમેડ
                ફૂડ પ્રોવાઇડર્સ સાથે લોકોને જોડવાનું. અમારી પ્રાથમિકતા નાના
                વ્યવસાયોને સમુદાય માટે વધુ દૃશ્યમાન અને સુલભ બનાવવા પર કેન્દ્રિત
                છે. અમે ખરીદી અથવા વેચાણ માટેનું કોઈ પ્લેટફોર્મ નથી – અમે તે
                કરતા વધુ કંઈક છે. અમે વપરાશકર્તાઓને તેમની આસપાસના વિસ્તારના
                આધારે વેચાણકર્તાઓ શોધવાની સવલત આપીએ છીએ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
