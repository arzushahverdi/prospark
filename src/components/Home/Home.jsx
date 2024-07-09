import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import { useArrayContext } from "../../context/arrayContext";
import { useStrategyContext } from "../../context/strategyContext";

const Home = () => {
  const rowArray = useArrayContext();
  const strategyArray = useStrategyContext();
  return (
    <div className={style.home}>
      <div className={style.homefirstsec}>
        <h1>DRIVE MORE WITH</h1>
        <h1 style={{ color: "#7158dc" }}>DIGITAL MARKETING</h1>
        <p>
          Our Agency Drives Results, and Fuels Success in the Dynamic Landscape
          of Online Marketing. Let's Transform Your Vision.
        </p>
        <Link className={style.getintouch}>
          <button className={style.contact} style={{marginTop: "50px"}}>↓ GET IN TOUCH</button>
        </Link>
      </div>
      <div className={style.homesecondsec}>
        <h1>We Are</h1>
        <div className={style.sparkbox}>
          <img
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
            alt=""
          />
          <h1>Spark</h1>
        </div>
        <p>
          We understand the importance of digital marketing and are dedicated to
          helping businesses achieve their online goals. Here are just a few
          reasons why you should choose us for your digital marketing needs.
        </p>
        <img
          src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5f170c1f3f04f7487e3b5_We%20Are%20Video%20Image-p-800.webp"
          alt=""
          className={style.sparkimg}
        />
      </div>
      <div className={style.homethirdsec}>
        <h1>Our Clever</h1>
        <div className={style.sparkbox}>
          <img
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
            alt=""
          />
          <h1>Approach</h1>
        </div>
        <div className={style.columnssec}>
          {rowArray &&
            rowArray.map((element, index) => (
              <React.Fragment key={index}>
                <div className={style.columns}>
                  <p>{element.num}</p>
                  <div className={style.columnstext}>
                    <h3>{element.header}</h3>
                    <p>{element.description}</p>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
        </div>
        <Link to="/pricing" className={style.links}>
          <button className={style.contact}>GET IN TOUCH →</button>
        </Link>
      </div>
      <div className={style.home4sec}>
        <h1>Grow Using</h1>
        <div className={style.sparkbox}>
          <img
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
            alt=""
          />
          <h1>Our Strategy</h1>
        </div>
        <div className={style.strategycolumns}>
          {strategyArray &&
            strategyArray.map((item, index) => (
              <React.Fragment key={index}>
                <div className={style.boxes}>
                  <div className={style.boxes_text}>
                    <img src={item.logo} alt="Strategy Logo" className={style.logoimg}/>
                    <p style={{fontSize: "32px", width: "396px", color: "#18122F"}}>{item.head}</p>
                    <div className={style.littlebox}>
                      <img src={item.star} alt="Star" />
                      <span>{item.text1}</span>
                    </div>
                    <div className={style.littlebox}>
                      <img src={item.star} alt="Star" />
                      <span>{item.text2}</span>
                    </div>
                  </div>
                  <img src={item.img} alt="Strategy" className={style.mainimg}/>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
