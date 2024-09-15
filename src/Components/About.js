import React from "react";

const Information = () => {
  return (
    <div className="info-container">
      <div className="info-column">
        <h1 className="info-heading">ABOUT US</h1>
        <br />
        <p className="info-paragraph">
          <span>GoLocalGrow</span> is a platform with a simple but powerful mission: to connect people with local street vendors and homemade food providers in their neighborhoods. Our focus is on empowering small businesses by helping them become more visible and accessible to the community. We’re not a buying or selling website – we’re something better. We provide a static directory where users can search for vendors based on their location and find out exactly what’s available around them.
        </p>
      </div>

      <div className="info-column info-column-gujarati">
        <h1 className="info-heading-gujarati">અમારા વિશે</h1>
        <br />
        <p className="info-paragraph-gujarati">
          <span>ગોલોકલગ્રોથ</span> એ એક સરળ પરંતુ શક્તિશાળી મિશન સાથેનું પ્લેટફોર્મ છે: તમારા પડોશમાં સ્થાનિક સ્ટ્રીટ વેન્ડર્સ અને હોમમેડ ફૂડ પ્રોવાઇડર્સ સાથે લોકોને જોડવાનું. અમારી પ્રાથમિકતા નાના વ્યવસાયોને સમુદાય માટે વધુ દૃશ્યમાન અને સુલભ બનાવવા પર કેન્દ્રિત છે. અમે ખરીદી અથવા વેચાણ માટેનું કોઈ પ્લેટફોર્મ નથી – અમે તે કરતા વધુ કંઈક છે. અમે વપરાશકર્તાઓને તેમની આસપાસના વિસ્તારના આધારે વેચાણકર્તાઓ શોધવાની સવલત આપીએ છીએ.
        </p>
      </div>

      {/* Inline style block */}
      <style jsx>{`
        .info-container {
          display: flex;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px;
          background: linear-gradient(135deg, #f2f2f2, #e3e3e3);
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .info-column {
          width: 45%;
          padding: 20px;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          text-align: justify;
          color: #555;
        }

        .info-heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
          letter-spacing: 2px;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          text-align: left;
        }

        .info-paragraph {
          font-size: 1.1rem;
        }

        /* Gujarati column specific styles */
        .info-column-gujarati {
          font-family: 'Noto Sans Gujarati', sans-serif;
        }

        .info-heading-gujarati {
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
          text-align: right;
        }

        .info-paragraph-gujarati {
          color: #444;
          font-size: 1.2rem;
          background: rgba(255, 239, 186, 0.5);
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .info-container {
            flex-direction: column;
          }

          .info-column {
            width: 100%;
            padding: 10px;
          }

          .info-heading {
            font-size: 2rem;
          }

          .info-paragraph {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Information;
