import { Text } from "../Text/Text";
import LightVarseImg from "../../assets/Light-varse.jpg"
import style from "./Furniture.module.css";

export const Furniture = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style["left"]}>
                    <img src={LightVarseImg} alt="Light-varse" />
                </div>

                <div className={style["right"]}>
                    {/* <div className={style["Decoration-Text"]}> */}
                    <Text varient="h1">WHY PREFAIR US</Text>
                    <Text varient="h2">Prioritising Customer Satisfaction</Text>
                    <Text varient="p">
                        Searching for concemporary office furniture and lovely varses?
                        We provide elegant,fashionable, and reasonable priced products that enhance
                        your home or place of business.
                        Come see us today to find excellent value, style, and quality all in one location!
                    </Text>
                    <button className={style.button}>
                        Browse Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default Furniture