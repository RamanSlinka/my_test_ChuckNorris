import React, {FC} from "react";


type ChuckPropsType = {
    jokeCard: string
    img: string
}

const Joke: FC<ChuckPropsType> = ({jokeCard, img}) => {
    return (
        <div className="jokeWrapper">
            <img src={img}   alt="ChuckFace" className="ChuckFace"/>

            {jokeCard}
        </div>
    )
}

export default Joke;