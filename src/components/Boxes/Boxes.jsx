import React from "react";
import "./Test.css";
import { Container} from 'react-bootstrap'
import CountUp from 'react-countup';
const Boxes = () => {
  return (
    <>
      <Container>
      <div className="main-box">
        <div className="boxes">
        

   

          <div class="grid-container">
            <div class="item1">
              <div className="box-content">
              <h2>  <CountUp end={7} duration={5} /></h2>
                <p> Year<br /> Experience</p>
              </div>
            </div>
            <div class="item2">
              <div className="box-content">
              <h2>  <CountUp end={12} duration={5} /></h2>
            
           <p>Opened in <br/>The Contry</p>
              </div>
            </div>
            <div class="item3">
              <div className="box-content">
                 <h2>  <CountUp end={10} duration={5} />k+</h2>
           <p>Furniture <br/>soid</p>
              </div>
            </div>
            <div class="item4">
              <div className="box-content">
              <h2>  <CountUp end={260} duration={5} />+</h2>
           <p>Varient <br/>Furniture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>

    </>
  );
};

export default Boxes;
