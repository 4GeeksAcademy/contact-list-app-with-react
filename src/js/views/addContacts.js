import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const AddContacts = () => {
	const { store, actions } = useContext(Context);

	const [newName, setNewName] = useState("");

	return (
		<div className="container justify-content-center">

			<Link to="/contactlist">
				<button className="btn btn-secondary mt-5 mb-5"><i class="fas fa-arrow-circle-left m-2"></i>Go Back</button>
			</Link>

			<div className="container">
				<h1>Add a new contact</h1>

				<form className="mt-5">
					<div className="form-group">
						<label for="contactName">Name</label>
						<input type="text" onChange={(e) => { setNewName(e.target.value) }} className="form-control" id="contactName" placeholder="Full Name" aria-describedby="emailHelp"/>
					</div>
		
					<button type="submit" onClick={()=> { actions.addContact({name: newName}) }} className="btn btn-primary">Submit</button>
				</form>

			</div>
		</div>
	);
};