import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { AD_FLAG } from "./../../utils/config"
import { fetchHomePageNews } from "../../action/news";
import { Spin } from "antd"
import NewsItem from './NewsItem';
import FixedHorizontalAds from "./FixedHorizontalAds"

const Category = ({ ...props }) => {
    let { match: { params } } = props
    const dispatch = useDispatch();

    let { categoryId } = params

    useEffect(() => {
        dispatch(fetchHomePageNews(categoryId))
    }, [])

    const { news, isFetching } = useSelector((state) => state.news);

    if (isFetching) {
        return <Spin />
    }



    return (
        <Fragment>
            <div id="load_dataindex">
                {news && <NewsItem data={news} />}
            </div>
            {AD_FLAG === true &&
                <FixedHorizontalAds
                    client="ca-pub-9146473421633718"
                    slot={5702419759}
                    format="fluid"
                    layoutKey="-gk+4m+28-bb+c5"
                    responsive="true" />
            }
        </Fragment>

    );
}

export default withRouter(Category)