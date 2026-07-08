import    './hero.module.css'
import FrontP  from "../../assets/1st-Pic.png"


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
height: "300px",
marginTop: "40px",
}}
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
</div>
);
};