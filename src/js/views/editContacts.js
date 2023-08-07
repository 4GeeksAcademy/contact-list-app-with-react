import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";


export const EditContacts = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();

	const [newName, setNewName] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newCity, setNewCity] = useState("");


   useEffect(() => {
        if (store.allcontacts && store.allcontacts.length > 0 && store.allcontacts[params.index]) {
            setNewName(store.allcontacts[params.index].name);
			setNewEmail(store.allcontacts[params.index].email);
			setNewPhone(store.allcontacts[params.index].phone);
			setNewCity(store.allcontacts[params.index].address.city);
        }
   }, [store.allcontacts] )

	return (
		<div className="container justify-content-center">

			<Link to="/contactlist">
				<button className="btn btn-secondary mt-5 mb-5"><i class="fas fa-arrow-circle-left m-2"></i>Go Back</button>
			</Link>

				<h1>Edit your contact information:</h1>

				<form onSubmit= {(e) => {e.preventDefault()}} className="mt-5">
					<div className="form-group">
						<label for="contactName">Full Name</label>
						<input type="text" value={newName} onChange={(e) => { setNewName(e.target.value) }} className="form-control" id="contactName"/>
					</div>

					<div className="form-group">
						<label for="contactEmail">Email</label>
						<input type="email" value={newEmail} onChange={(e) => { setNewEmail(e.target.value) }} className="form-control" id="contactEmail" placeholder="Email"/>
					</div>

					<div className="form-group">
						<label for="contactPhone">Phone</label>
						<input type="text" value={newPhone} onChange={(e) => { setNewPhone(e.target.value) }} className="form-control" id="contactPhone" placeholder="Phone"/>
					</div>

					<div className="form-group">
						<label for="contactCity">City</label>
						<input type="text" value={newCity} onChange={(e) => { setNewCity(e.target.value) }} className="form-control" id="contactCity" placeholder="City"/>
					</div>
		
					<button type="submit" onClick={()=> { actions.editContacts(params.index, newName, newEmail, newPhone, newCity) }} className="btn btn-primary mt-2">Save</button>
				</form>
		</div>
	);
};