import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_PATH, AD_FLAG, TRL_WIRE_IMAGE_PATH, EXT, TRL_LOGO_PATH } from "./../utils/"
import _ from "loadsh"
import FixedHorizontalAds from "./FixedHorizontalAds"

export default ({ data }) => {


  const extension = (fname) => {
    var pos = fname !== null && fname.lastIndexOf(".");
    var strlen = fname !== null && fname.length;
    if (pos != -1 && strlen != pos + 1) {
      var ext = fname !== null && fname.split(".");
      var len = ext.length;
      var extension = ext && ext[len - 1].toLowerCase();
    } else {
      extension = false;
    }
    return extension;
  }

  return <Fragment>
    {data && data.map((row, index) => {

      //  let imagePath = row.image_source === 1 ? `${TRL_WIRE_IMAGE_PATH}${row.image}` : `${IMAGE_PATH}${row.image}`

      let imgPath = extension(row.image)
      let image = row.image === null ? TRL_LOGO_PATH : imgPath === false ? `${IMAGE_PATH}${row.image}` : `${IMAGE_PATH}${row.image}`



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
            <img type="image/jpeg" src={`${image}`} alt="TRL Image"
              sizes="(max-width: 768px) 50vw, (max-width: 992px) 690px, 910px" className="rounded" />
          </div>
          </div>
          {/* <!-- Post Content --> */}
          <div className="col-8">
            <div className="post-content">
              <Link to={`${row.category}/${row.Tag}/${row.post_ID}`}><h5>{row.heading}</h5></Link>
              <div className="cont">
                <p>
                  {_.truncate(row.content, 0, 300)}

                  <Link to={`${row.category}/${row.Tag}/${row.post_ID}`}>... Read More</Link>
                </p>

                {/* <!-- Post Meta --> */}
                <div className="post-meta">
                  <p>
                    <Link to={`${row.category}/${row.Tag}/${row.post_ID}`}>{row.Hname}</Link> {row.time}
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