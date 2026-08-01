import './hero.module.css'
import FrontP from "../../assets/1st-Pic.png"
import style from "./hero.module.css"


export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div
          style={{
            backgroundImage: `url(${FrontP})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "600px",
            marginTop: "40px",
          }}
        // <img src={FrontP} alt="FrontP" style={{width:"100%",height: "auto" }}/>
        >
          <div>
            <button className='button'>
              Shop Now
            </button>
          </div>

        </div>
      </div>
      <div className="section">
        <div className="container"></div>
      </div>
    </div >
  );
};