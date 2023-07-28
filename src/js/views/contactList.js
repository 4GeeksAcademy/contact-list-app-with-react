import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const ContactList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			This is a contact list.
		</div>
	);
};
