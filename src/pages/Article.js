import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from "loadsh"
import { Spin } from "antd"
import { AD_FLAG } from "./../utils/"
import FixedHorizontalAds from "./FixedHorizontalAds"
import DetailArticle from "./DetailArticle"
import { fetchArticleDetails } from '../actions';


const loadData = (dispatch, Id) => {
 // console.log('article loadData')
  return dispatch(fetchArticleDetails(Id))
}


const Article = () => {

  let dispatch = useDispatch();
  let params = useParams();

  let { Id } = params

  useEffect(() => {
    //console.log('useEffect',params)
    loadData(dispatch, Id);
  }, [Id]);

  let { newsdetails, isFetching } = useSelector(state => state.news)

  if (isFetching === true && newsdetails === undefined) {
    return <Spin />
  }


  // <span>Home{JSON.stringify(content)}</span>


  return <Fragment>

    <div className="single-blog-content mb-20">
      {newsdetails && <DetailArticle article={newsdetails} />}
    </div>
    {AD_FLAG === true &&
      <>
        <FixedHorizontalAds
          client="ca-pub-9146473421633718"
          slot={7398644801}
          format="fluid"
          layoutKey="-gk+4m+28-bb+c5"
          responsive="true" />

        <FixedHorizontalAds
          client="ca-pub-9146473421633718"
          slot={7398644801}
          format="fluid"
          layoutKey="-gk+4m+28-bb+c5"
          responsive="true" />

        <FixedHorizontalAds
          client="ca-pub-9146473421633718"
          slot={7398644801}
          format="fluid"
          layoutKey="-gk+4m+28-bb+c5"
          responsive="true" />

        <FixedHorizontalAds
          client="ca-pub-9146473421633718"
          slot={7398644801}
          format="fluid"
          layoutKey="-gk+4m+28-bb+c5"
          responsive="true" />

        <FixedHorizontalAds
          client="ca-pub-9146473421633718"
          slot={7398644801}
          format="fluid"
          layoutKey="-gk+4m+28-bb+c5"
          responsive="true" />

        <FixedHorizontalAds
          client="ca-pub-9146473421633718"
          slot={4772481466}
          format="fluid"
          layoutKey="-gk+4m+28-bb+c5"
          responsive="true" />
      </>
    }

  </Fragment >


};

export default {
  component: Article,
  loadData,
};
