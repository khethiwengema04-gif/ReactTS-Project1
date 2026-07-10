import Last from '../../assets/Last.jpeg'
import style from "./Modern.module.css";

export const Modern = () => {
    return (
        <div>
            <div className={style.container}>
                <div style={{
                    // backgroundImage: `url(${Last})`,
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",
                    // width: "100%",
                    // height: "300px",
                    // marginTop: "40px",
                }}>
                    <img src={Last} alt="Last" style={{ width: "100%", height: "auto" }} />
                    <button className={style.button}>
                        GET YOURS NOW
                    </button>
                </div>
            </div>
        </div>


    )
}