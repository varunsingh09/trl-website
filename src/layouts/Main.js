import React from "react";
import { Link } from 'react-router-dom';

export default ({ children }) => {

	document.body.classList.add('bg-dark')

	console.log("render Main layout")

	return (
		<div>
			<Link to="/admin/cityDetails">EU Country List</Link>
			{children}
		</div>
	)
}

