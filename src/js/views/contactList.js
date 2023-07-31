import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Contact } from "../component/contacts";

import { Context } from "../store/appContext";


export const ContactList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul>
				{store.allcontacts.map((contact, index) => (
					<Contact contact={contact} index={index} deleteContacts={actions.deleteContacts} />
				))}
			</ul>
		</div>
	);
};
