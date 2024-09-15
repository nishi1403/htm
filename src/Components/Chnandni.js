import React from 'react'
import h2 from './Images/h2.jpg'
import p1 from './Images/p1.jpeg'
import p2 from './Images/p2.jpeg'
import '../Style/chandni.css'
import chan from './Images/chan.png'
const Chnandni = () => {
  return (
    <>
    <div className="chandni">
        <div className="chandni-img">
        <img src={chan} />
        </div>
        
        <h1>Products</h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-xl-6">
                    <div className="cham-prod">
                    <img src={p1}/>
                    </div>
                    
                </div>
                <div className="col col-12 col-xl-6">
                <div className="cham-prod">
                    <img src={p2}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Chnandni




