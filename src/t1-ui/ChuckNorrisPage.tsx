import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Content, Loading} from "../App.styles";
import {fetchCardsTC} from "../t2-bll/reducer";
import {AppRootStateType} from "../t2-bll/store";
import User from "./User";


export const Pack = () => {

    const [page, setPage] = useState(1);
    const [users, setUsers] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(true);


    const dispatch = useDispatch()

     const cardChuck: any = useSelector<AppRootStateType>(state => state.app.value)
     const imgChuck: any = useSelector<AppRootStateType>(state => state.app.icon_url)

    useEffect(()  => {
        dispatch(fetchCardsTC())
    },[page, setPage])

    useEffect(() => {

        const loadMore = () => {
            setLoading(true);
            const newUsers = cardChuck;
            setUsers((prev: any) => [...prev, newUsers]);
            setLoading(false);
        }
        loadMore()
    }, [cardChuck, page])



    const handleScroll = (event: any) => {
       // console.log('check')
        dispatch(fetchCardsTC())
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

        if (scrollHeight - scrollTop === clientHeight) {
            setPage(prev => prev + 1);
        }
    };


    return (


        <div className='App'>
            <button onClick={() => setPage(page + 1)}>Click</button>
            <Content>
                <Content onScroll={handleScroll}>
                    {/*{users && users.map((user: any) => <User key={user.cell} user={user} />)}*/}
                    {
                        users.map((el):any =>  <User nameCard={el} img={imgChuck}/>)
                    }

                </Content>
                {loading && <Loading>Loading ...</Loading>}
            </Content>
        </div>
    )
}


