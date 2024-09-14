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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                expedita molestiae sint reprehenderit, voluptate, quia aperiam
                animi fuga modi asperiores porro ipsam quidem, cupiditate
                excepturi recusandae tempore perspiciatis corrupti. Consequatur
                corporis iste ipsum, quas nostrum repellat pariatur ad minus
                dolorum soluta voluptas facere nisi error cum reprehenderit
                obcaecati nihil, vitae quibusdam quo libero placeat assumenda?
                Cum libero illo necessitatibus pariatur debitis ad, magni fugiat
                dolorem aliquid sit voluptate quae assumenda, facere fugit! Vel
                vero molestias maxime ratione aut explicabo rerum recusandae
                nisi sapiente quisquam nobis, veniam, quibusdam, asperiores
                culpa iste minima voluptas. Dolorem aliquid ipsa aperiam, rerum
                repellendus nostrum accusantium?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
