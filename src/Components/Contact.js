import React from "react";
import "../Style/Contact.css";


const Contact = () => {
  return (
    <div id="contact" className="cont">
      <h1>CONTACT US</h1>

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-xl-6">
            <div className="content-img">
              <form action="https://formspree.io/f/mdknvlgj" method="POST">
                {/* Self-closing input tags */}
                <input type="text" placeholder="Username" name="username" required autoComplete="off" />
                <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
                <textarea name="Message" id="" cols="30" rows="10" required autoComplete="off" placeholder="Enter your message"></textarea>
                
                {/* Corrected self-closing input tag */}
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="col col-sm-12 col-xl-6">
            <div className="content-guj">
              <p>
              We’d love to hear from you! If you have any questions or suggestions about our platform, please reach out.
              At GoLocalGrowth, we’re here to help you connect with local street vendors and homemade food providers.
              Feel free to drop us a message with your inquiries or feedback. Your input helps us improve and better serve our community. 
              Thank you for supporting local businesses!
              <br/><br/>
              અમને તમારી પાસે થી સાંભળવાનું ખૂબ જ પસંદ છે! અમારી પ્લેટફોર્મ વિશે કોઈ પ્રશ્નો કે સૂચનાઓ હોય તો કૃપા કરીને અમને સંપર્ક કરો.
               ગોલોકલગ્રોથ પર, અમે સ્થાનિક સ્ટ્રીટ વેન્ડરો અને હોમમેડ ફૂડ પ્રોવાઇડરો સાથે તમને જોડવામાં મદદ કરવા માટે અહીં છીએ. 
               તમારા પ્રશ્નો અથવા પ્રતિસાદ સાથે અમને મેસેજ મોકલો. તમારી નોંધ આપણા સમુદાયને સારી રીતે સેવા આપવાનો અમારું ઉદ્દેશ છે. 
               સ્થાનિક વ્યવસાયોને સપોર્ટ કરવા બદલ આભાર!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
