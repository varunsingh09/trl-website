import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomePageNews } from "../../action/news";
import { Spin } from "antd"
import NewsItem from './NewsItem';

const index = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageNews())
  }, [])
  const { news, isFetching } = useSelector((state) => state.news);

  if (isFetching) {
    return <Spin />
  }

  return (<div id="load_dataindex">
      {news && news.map((item, i) => <NewsItem key={i} {...item} />)}
    </div>

  );
}



export default index