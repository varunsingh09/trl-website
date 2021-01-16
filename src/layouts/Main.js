import React, { Fragment } from "react";
import Header from "./../components/Header"
import Header2 from "./../components/Header2"
import Navigation from "./../components/Navigation"
import { AD_FLAG } from "./../utils/"
import FixedHorizontalAds from "./../pages/FixedHorizontalAds"

export default ({ children }) => {

	return (

		<Fragment>
			<Header />
			<Navigation />
			<div className="main-content-wrapper section-padding-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-lg-8">
							<div className="world-latest-articles">
								<div className="row">
									<div className="col-12">
										<div className="menu">
											<div className="title">
												<h5>
													<Navigation />
												</h5>
											</div>
										</div>

										{AD_FLAG === true && <FixedHorizontalAds
											client="ca-pub-9146473421633718"
											slot={5702419759}
											format="fluid"
											layoutKey="-gk+4m+28-bb+c5"
											responsive="true"
										/>
										}
										{children}
										<br />
										<div id="load_data_messageindex" align="center" />
										{AD_FLAG === true && <FixedHorizontalAds
											client="ca-pub-9146473421633718"
											slot={5702419759}
											format="fluid"
											layoutKey="-gk+4m+28-bb+c5"
											responsive="true"
										/>
										}
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-8 col-lg-4">
							<div
								className="post-sidebar-area wow fadeInUpBig"
								data-wow-delay="0.1s"
							>
								<div className="sidebar-widget-area">
									{ }
									{AD_FLAG === true && <FixedHorizontalAds
										client="ca-pub-9146473421633718"
										slot={7398644801}
										format="auto"
										layoutKey="-gk+4m+28-bb+c5"
										responsive="true" />
									}
									{AD_FLAG === true &&
										<FixedHorizontalAds

											client="ca-pub-9146473421633718"
											slot={7398644801}
											format="auto"
											layoutKey="-gk+4m+28-bb+c5"
											responsive="true" />
									}
									{ }
									{AD_FLAG === true &&
										<FixedHorizontalAds
											client="ca-pub-9146473421633718"
											slot={7398644801}
											format="auto"
											layoutKey="-gk+4m+28-bb+c5"
											responsive="true" />
									}
									{ }
									{AD_FLAG === true &&
										<FixedHorizontalAds

											client="ca-pub-9146473421633718"
											slot={7398644801}
											format="auto"
											layoutKey="-gk+4m+28-bb+c5"
											responsive="true" />
									}
									{ }
									{AD_FLAG === true &&
										<FixedHorizontalAds

											client="ca-pub-9146473421633718"
											slot={7398644801}
											format="auto"
											layoutKey="-gk+4m+28-bb+c5"
											responsive="true" />
									}
									{ }
									{AD_FLAG === true &&
										<FixedHorizontalAds
											client="ca-pub-9146473421633718"
											slot={4772481466}
											format="auto"
											layoutKey="-gk+4m+28-bb+c5"
											responsive="true" />
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</Fragment>
	)
}

