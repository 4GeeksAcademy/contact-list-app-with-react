import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Contact } from "../component/contacts";

import { Context } from "../store/appContext";


export const ContactList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Link to="/addcontacts">
				<button className="btn btn-success m-5"><i class="fas fa-user-plus m-2"></i>Add new contact</button>
			</Link>
			<ul>
				{store.allcontacts.map((contact, index) => (
					<Contact contact={contact} index={index} deleteContacts={actions.deleteContacts} />
				))}
			</ul>
		</div>
	);
};
