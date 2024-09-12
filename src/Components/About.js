import React from "react";
import h2 from './Images/h2.jpg'
import '../Style/About.css'
const About = () => {
  return (
    <>
      <div className="ab">
        <h1>ABOUT US</h1>
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-lg-6">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  quis consequatur saepe illo dolor! Deserunt, vero corrupti
                  tenetur perspiciatis sapiente esse illum delectus, officia
                  assumenda perferendis accusamus ducimus autem voluptate
                  dolores atque! Autem, soluta facilis. Nesciunt magnam quis
                  fugiat, impedit dolorem dignissimos eos quo aut. Corrupti qui
                  quisquam sunt culpa molestiae mollitia recusandae sequi nam
                  incidunt quibusdam odit consectetur quam consequuntur et aut
                  nulla, quasi fugit. Necessitatibus eum ipsum doloribus autem
                  esse, dolores aliquam ad fugit est quod sed possimus? Illo
                  exercitationem odit magnam ipsam consequuntur velit ipsa
                  quidem. Ducimus odio delectus in obcaecati dolor laboriosam ea
                  ex. Totam, tenetur.
                </p>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-6">
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
