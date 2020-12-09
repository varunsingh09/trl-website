import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { AD_FLAG } from "./../../utils/config"
import { fetchHomePageNews } from "../../action/news";
import { Spin } from "antd"
import NewsItem from './NewsItem';
import FixedHorizontalAds from "./FixedHorizontalAds"

const ArticleDetails = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageNews())
  }, [])

  const { news, isFetching } = useSelector((state) => state.news);

  if (isFetching) {
    return <Spin />
  }
  console.log('ArticleDetails')
  return (
    <Fragment>
      <div id="load_dataindex">
        {news && <NewsItem data={news} />}
      </div>
      {AD_FLAG === true && <FixedHorizontalAds
        client="ca-pub-9146473421633718"
        slot={5702419759}
        format="fluid"
        layoutKey="-gk+4m+28-bb+c5"
        responsive="true" />
      }
    </Fragment>


  );
}

export default ArticleDetails