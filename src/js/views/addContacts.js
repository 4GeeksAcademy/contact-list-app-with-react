import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const AddContacts = () => {
	const { store, actions } = useContext(Context);

	const [newName, setNewName] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newCity, setNewCity] = useState("");

	return (
		<div className="container justify-content-center">

			<Link to="/contactlist">
				<button className="btn btn-secondary mt-5 mb-5"><i class="fas fa-arrow-circle-left m-2"></i>Go Back</button>
			</Link>

			<div className="container">
				<h1>Add a new contact</h1>

				<form onSubmit= {(e) => {e.preventDefault()}} className="mt-5">
					<div className="form-group">
						<label for="contactName">Full Name</label>
						<input type="text" onChange={(e) => { setNewName(e.target.value) }} className="form-control" id="contactName" placeholder="Full Name"/>
					</div>

					<div className="form-group">
						<label for="contactEmail">Email</label>
						<input type="email" onChange={(e) => { setNewEmail(e.target.value) }} className="form-control" id="contactEmail" placeholder="Email"/>
					</div>

					<div className="form-group">
						<label for="contactPhone">Phone</label>
						<input type="text" onChange={(e) => { setNewPhone(e.target.value) }} className="form-control" id="contactPhone" placeholder="Phone"/>
					</div>

					<div className="form-group">
						<label for="contactCity">City</label>
						<input type="text" onChange={(e) => { setNewCity(e.target.value) }} className="form-control" id="contactCity" placeholder="City"/>
					</div>
		
					<button type="submit" onClick={()=> { actions.addContact({name: newName, email: newEmail, phone: newPhone, city: newCity }) }} className="btn btn-primary mt-2">Submit</button>
				</form>

			</div>
		</div>
	);
};