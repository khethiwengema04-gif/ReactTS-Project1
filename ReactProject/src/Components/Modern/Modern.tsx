import Last from '../../assets/Last.jpeg';
import style from "./Modern.module.css";

export const Modern = () => {
    return (
        <div className={style.container}>

            <div className={style.imageContainer}>

                <img
                    src={Last}
                    alt="Modern furniture collection"
                    className={style.imageStyle}
                />

                <button className={style.button}>
                    GET YOURS NOW
                </button>

            </div>

        </div>
    );
};