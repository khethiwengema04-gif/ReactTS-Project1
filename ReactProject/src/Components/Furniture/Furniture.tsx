
import { Text } from "../Text/Text";
import LightVarseImg from "../../assets/Light-varse.jpg";
import style from "./Furniture.module.css";

export const Furniture = () => {
    return (
        <div className={style.container}>

            <div className={style.left}>
                <img
                    src={LightVarseImg}
                    alt="Light vase"
                />
            </div>

            <div className={style.right}>

                <Text varient="h1">
                    WHY PREFER US
                </Text>

                <Text varient="h2">
                    Prioritising Customer Satisfaction
                </Text>

                <Text varient="p">
                    Searching for contemporary office furniture and lovely
                    vases? We provide elegant, fashionable, and reasonably
                    priced products that enhance your home or place of
                    business. Come see us today to find excellent value,
                    style, and quality all in one location!
                </Text>

                <button className={style.button}>
                    Browse Now
                </button>

            </div>

        </div>
    );
};

export default Furniture;
