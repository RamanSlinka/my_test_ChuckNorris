import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCardsTC} from "../t2-bll/reducer";
import {AppRootStateType} from "../t2-bll/store";
import Joke from "./Joke";
import "../App.css"
import InfiniteScroll from "react-infinite-scroll-component";


export const ChuckNorrisPage = () => {

    const [page, setPage] = useState(0);
    const [card, setCard] = useState<string[]>([]);
    const dispatch = useDispatch()

    const cardChuck = useSelector<AppRootStateType, string>(state => state.app.value)
    const imgChuck = useSelector<AppRootStateType, string>(state => state.app.icon_url)

    useEffect(() => {
        fetchMoreData()
    }, [page, setPage])

    useEffect(() => {
        const loadMore = () => {
            setCard((prev: string[]) => [...prev, cardChuck]);
        }
        cardChuck && loadMore()
    }, [cardChuck, page])


    const fetchMoreData = () => {
        for (let i = 0; i < 10; i++) {
            dispatch(fetchCardsTC())
        }
    };

    return (
        <div className="wrapperContent">
            <InfiniteScroll
                next={fetchMoreData}
                dataLength={card.length}
                hasMore={true}

                scrollThreshold={0.95}
                loader={<h2>Loading...</h2>}
            >
                {card.map((el): any => <Joke jokeCard={el} img={imgChuck}/>)}
            </InfiniteScroll>

        </div>
    )
}


