import React from "react";

const Header2 = () => {

  return (
    <header className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg">
              <div className="collapse navbar-collapse" id="worldNav">
                <ul className="navbar-nav ml-4">
                  <li className="nav-item active">
                    <a
                      className="nav-link active"
                      href="https://trlnews.com/Home"
                    >
                      होम <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://trlnews.com/World">
                      विश्व{" "}
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/States"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      राज्य{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Bihar"
                      >
                        बिहार{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Chhattisgarh"
                      >
                        छत्तीसगढ़
                        </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Gujarat"
                      >
                        गुजरात{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Himachal Pradesh"
                      >
                        हिमाचल प्रदेश{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Haryana"
                      >
                        हरियाणा{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Jammu"
                      >
                        जम्मू कश्मीर{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Jharkhand"
                      >
                        {" "}
                          झारखण्ड{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Madhya Pradesh"
                      >
                        मध्य प्रदेश{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Maharashtra"
                      >
                        महाराष्ट्र
                        </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Punjab"
                      >
                        पंजाब{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Rajasthan"
                      >
                        राजस्थान{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Uttar Pradesh"
                      >
                        उत्तर प्रदेश{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Uttarakhand"
                      >
                        {" "}
                          उत्तराखण्ड
                        </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/OtherStates"
                      >
                        अन्य राज्य{" "}
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/city"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      आपका शहर{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Pathankot"
                      >
                        पठानकोट{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Gurdaspur"
                      >
                        गुरदासपुर{" "}
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/Politics"
                    >
                      राजनीती{" "}
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/Sports"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      खेल{" "}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Cricket"
                      >
                        क्रिकेट{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/Football"
                      >
                        फुटबॉल{" "}
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://trlnews.com/othersports"
                      >
                        अन्य खेल
                        </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/Technology"
                    >
                      टेक्नोलॉजी{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/Entertainment"
                    >
                      मनोरंजन{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/Business"
                    >
                      बिज़नेस{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/Education"
                    >
                      शिक्षा{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/Startups"
                    >
                      स्टार्टअप्स{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/Lifestyle"
                    >
                      लाइफस्टाइल{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://trlnews.com/Jobs">
                      नौकरी
                      </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/Agriculture"
                    >
                      कृषि
                      </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/TermsCondition"
                    >
                      निबंधन और शर्तें
                      </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://trlnews.com/PrivacyPolicy"
                    >
                      गोपनीयता नीति
                      </a>
                  </li>
                </ul>{" "}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>

  );

}

export default Header2;
