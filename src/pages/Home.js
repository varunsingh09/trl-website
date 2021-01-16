import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from "loadsh"
import { Spin } from "antd"
import { AD_FLAG } from "./../utils/"
import NewsItem from './NewsItem';
import FixedHorizontalAds from "./FixedHorizontalAds"
import { fetchHomePageNews } from '../actions';


const loadData = (dispatch, page) => {
    //  console.log('loadData')
    return dispatch(fetchHomePageNews(page))
}


const Home = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [result, setResult] = useState([]);


    useEffect(() => {
       // console.log('useEffect')
        loadData(dispatch, page);
    }, [page]);

    let { news, isFetching } = useSelector(state => state.news)
    if (isFetching === true && news === undefined) {
        return <Spin />
    }

    const handleShowMorePosts = () => {
        setResult([...result, ...news]);

        setPage((prevPage) => prevPage + 1);
    }

    // <span>Home{JSON.stringify(content)}</span>


    return <Fragment>

        {news && <>
            <NewsItem data={result.length > 0 ? result : news} /> <div id="load_data_messageindex" align="center">
                <button type='button' className='btn btn-danger' onClick={handleShowMorePosts} >Load More </button>
            </div></>}
        {AD_FLAG === true &&
            <FixedHorizontalAds
                client="ca-pub-9146473421633718"
                slot={5702419759}
                format="fluid"
                layoutKey="-gk+4m+28-bb+c5"
                responsive="true" />
        }</Fragment>
};

export default {
    component: Home,
    loadData,
};
