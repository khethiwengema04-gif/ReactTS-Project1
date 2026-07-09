import { Text } from "../Text/Text";
import officechair from "../../assets/office-chair.jpg";
import style from "./Design.module.css";

export const Design = () => {
    return (

        <>
            <div className={style.container}>



                <div className={style["left"]}>
                    {/* <div className={style["Decoration-Text"]}> */}
                    <Text varient="h1">Furniture That Inspires Success</Text>
                    <Text varient="h2">Transform Your Space</Text>
                    <Text varient="p">
                        We provide exquisitely designed varses and blend comfort,durability,
                        and style, as well as office furniture of the highest caliber.
                        Our goods are made to improve your area while offering long-lasting
                        value at reasonable costs.
                    </Text>
                    <button className={style.button}>
                        View More
                    </button>
                </div>
                <div className={style.right}>
                    <img src={officechair} alt="office-chair" />
                </div>
            </div>

        </>
    )
}