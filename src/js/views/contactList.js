import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Contacts } from "../component/contacts";

import { Context } from "../store/appContext";


export const ContactList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul>
				
			</ul>
		</div>
	);
};
