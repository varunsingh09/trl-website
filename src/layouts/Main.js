import React, { Fragment } from "react";
import Header from "./../common/Header"
import Navigation from "./../common/Navigation"

export default ({ children }) => {

	return (

		<Fragment>
			<Header />
			<Navigation />
			{children}
		</Fragment>
	)
}

