import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { IMAGE_PATH, AD_FLAG } from "./../../utils"
import _ from "loadsh"
import FixedHorizontalAds from "./FixedHorizontalAds"

export default ({ data }) => {
  // console.log("======", data)

  return <Fragment>
    {data.map((row, index) => {
      return <Fragment key={index}>
        {index === 2 && AD_FLAG === true &&
          <FixedHorizontalAds
            client="ca-pub-9146473421633718"
            slot={5702419759}
            format="fluid"
            layoutKey="-gk+4m+28-bb+c5"
            responsive="true" />
        }
        <div className=" single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig"
          data-wow-delay="0.2s">
          {/* <!-- Post Thumbnail --> */}
          <div className="col-4"><div className="post-thumbnail">
            <img type="image/jpeg" src={`${IMAGE_PATH}/${row.image}.jpg`} alt="TRL Image"
              sizes="(max-width: 768px) 50vw, (max-width: 992px) 690px, 910px" className="rounded" />
          </div>
          </div>
          {/* <!-- Post Content --> */}
          <div className="col-8">
            <div className="post-content">
              <NavLink to={`/${row.category}/${row.Tag}/${row.post_ID}`}><h5>{row.heading}</h5></NavLink>
              <div className="cont">
                <p>
                  {_.truncate(row.content, 0, 300)}

                  <NavLink to={`/${row.category}/${row.Tag}/${row.post_ID}`}>... Read More</NavLink>
                </p>

                {/* <!-- Post Meta --> */}
                <div className="post-meta">
                  <p>
                    <NavLink to={`/${row.category}/${row.Tag}/${row.post_ID}`}>{row.Hname}</NavLink> {row.time}
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    })}
  </Fragment>

};