import React, { Fragment } from 'react';
import { IMAGE_PATH, AD_FLAG, EXT } from "./../utils/"
import _ from "loadsh"
import FixedHorizontalAds from "./FixedHorizontalAds"

export default ({ article }) => {


    const handleOnclick = (link) => {
        window.open(link)
    }

    return <Fragment>
        <div className="post-content">
            <blockquote className="mb-30">
                <h5>{article.heading}
                </h5>
                <div className="post-author" />
            </blockquote>
            <div className="imgi" align="center">
                <img
                    type="image/jpeg"
                    src={article.image}
                    className="img-thumbnail"
                />
            </div>
            <div className="post-meta mt-50">
                <div className="row">
                    <div className="col-12 ">
                        <p>
                            <a href="#" className="post-author">
                                {article.Name}
                            </a>
                                , {article.time}
                        </p>
                        <div align="right">
                            <a
                                href="https://www.facebook.com/sharer/sharer.php?u=&t="
                                title="Share on Facebook"
                                target="_blank"
                                onClick={(e) => handleOnclick(`https://www.facebook.com/sharer/sharer.php?u=${article.link}`)}>
                                <img
                                    type="image/png"
                                    src="https://trlnews.com/img/blog-img/Facebook.png"
                                    height="35px"
                                    width="35px"
                                />
                            </a>
                            <a
                                href="https://twitter.com/intent/tweet?text=&t="
                                title="Share on Twitter"
                                target="_blank"
                                onClick={(e) => handleOnclick(`https://twitter.com/intent/tweet?text=${article.link}`)}
                            >
                                <img
                                    type="image/png"
                                    src="https://trlnews.com/img/blog-img/Twitter.png"
                                    height="35px"
                                    width="35px"
                                />
                            </a>
                            <a
                                href="whatsapp://send?text=&t="
                                title="Share on Whatsapp"
                                className="hide"
                                target="_blank"
                                onClick={(e) => handleOnclick(`whatsapp://send?text=${article.link}`)}
                            >
                                <img
                                    type="image/png"
                                    src="https://trlnews.com/img/blog-img/Whatsapp.png"
                                    height="35px"
                                    width="35px"
                                />
                            </a>
                            <a
                                href="https://web.whatsapp.com/send?text=&t="
                                title="Share on Whatsapp"
                                className="unhide"
                                target="_blank"
                                onClick={(e) => handleOnclick(`https://web.whatsapp.com/send?text=${article.link}`)}
                            >
                                <img
                                    type="image/png"
                                    src="https://trlnews.com/img/blog-img/Whatsapp.png"
                                    height="35px"
                                    width="35px"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {AD_FLAG === true && <FixedHorizontalAds
                client="ca-pub-9146473421633718"
                slot={8199547004}
                format="fluid"
                layoutKey="-7j+ed+2i-1n-4w"
                responsive="true" />
            }

            {/*<pre
                onmousedown="return false;"
                onselectstart="return false;"
            > */}
            <h6>
                {article.content}
            </h6>
            {/* </pre> */}
            {/* <ins
                className="adsbygoogle"
                style={{
                    display: "block"
                }}
                data-ad-format="fluid"
                data-ad-layout-key="-7j+ed+2i-1n-4w"
                data-ad-client="ca-pub-9146473421633718"
                data-ad-slot={8199547004}
            /> */}
            {AD_FLAG === true && <FixedHorizontalAds
                client="ca-pub-9146473421633718"
                slot={8199547004}
                format="fluid"
                layoutKey="-7j+ed+2i-1n-4w"
                responsive="true" />
            }
            <div className="post-meta second-part" align="right">
                <h6>
                    <i
                        className="fa fa-eye"
                        style={{
                            fontSize: "18px"
                        }}
                    >
                        {" "}
                    </i>{" "}
                    {article.Count === 0 ? 7 : article.Count * parseInt(7)} ,{article.category}
                </h6>
            </div>
        </div>

    </Fragment >

};