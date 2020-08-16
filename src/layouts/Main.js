import React from "react";

export default ({ children }) => {

	document.body.classList.add('bg-dark')

	console.log("render Main")

	return (
		<div>
			{children}
		</div>
	)
}

