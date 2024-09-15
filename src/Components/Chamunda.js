import React from 'react'
import p3 from './Images/p3.jpeg'
import p4 from './Images/p4.jpeg'
import p5 from './Images/p5.jpeg'
import '../Style/chamunda.css'
const Chamunda = () => {
  return (
    <>
    <div className="chamunda">
        <div className="chamunda-img">
        <img src={p3} />
        </div>
        
        <h1>Products</h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-xl-6">
                    <div className="cham-prod">
                    <img src={p4}/>
                    </div>
                    
                </div>
                <div className="col col-12 col-xl-6">
                <div className="cham-prod">
                    <img src={p5}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Chamunda