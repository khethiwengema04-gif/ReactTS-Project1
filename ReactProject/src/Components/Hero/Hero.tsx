
import FrontP from "../../assets/1st-Pic.png";
import style from "./hero.module.css";

export const Hero = () => {
  return (
    <div className={style.hero}>

      <div
        className={style.imageStyle}
        style={{
          backgroundImage: `url(${FrontP})`
        }}
      >
        <div className={style.buttonStyle}>
          <button className={style.button}>
            Shop Now
          </button>
        </div>

      </div>

    </div>
  );
};
