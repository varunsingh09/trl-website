import React from "react";

class header1 extends React.Component {
  render() {
    return (
      <header className="header-area1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-10">
                  <a href="https://trlnews.com/">
                    {" "}
                    <img
                      type="image/png"
                      src="https://trlnews.com/img/blog-img/TRL.png"
                      height="28px"
                      width="100px"
                      alt="Logo"
                    />{" "}
                  </a>
                  <a href="https://trlnews.com/">
                    <img
                      type="image/png"
                      src="https://trlnews.com/img/blog-img/News1.png"
                      style={{
                        borderLeft: "2px solid #DCDCDC",
                        margin: "2px"
                      }}
                      height="35px"
                      width="40px"
                      alt="Logo"
                    />
                  </a>
                  <a href="https://trlnews.com/guest">
                    <img
                      type="image/png"
                      src="https://trlnews.com/img/blog-img/Local.png"
                      style={{
                        borderLeft: "2px solid #DCDCDC",
                        borderRight: "2px solid #DCDCDC",
                        margin: "2px"
                      }}
                      height="355px"
                      width="45px"
                      alt="Logo"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.therealleaders.trl&hl=en">
                    <img
                      type="image/png"
                      src="https://trlnews.com/img/blog-img/dl.png"
                      style={{
                        marginTop: "2px"
                      }}
                      height="42px"
                      width="50px"
                      alt="Logo"
                    />
                  </a>
                </div>
                <div className="col-2" align="right">
                  <form action="check" method="post">
                    <input
                      type="image"
                      src="https://trlnews.com/img/blog-img/User.png"
                      height="45px"
                      style={{
                        margin: "2px"
                      }}
                      width="50px"
                      alt="index"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default header1;
