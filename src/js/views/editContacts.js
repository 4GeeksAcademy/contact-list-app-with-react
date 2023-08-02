import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";


export const EditContacts = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();
	const [newName, setNewName] = useState("");

   useEffect[() => {
        if (store.allcontacts && store.allcontacts.length > 0 && store.allcontacts[params.index]) {
            setNewName(store.allcontacts[params.index].name)
        }
   }, [store.allcontacts] ]

	return (
		<div className="container justify-content-center">

			<Link to="/contactlist">
				<button className="btn btn-secondary mt-5 mb-5"><i class="fas fa-arrow-circle-left m-2"></i>Go Back</button>
			</Link>

			<div className="container">
                <h1>{store.allcontacts && store.allcontacts.length > 0 && store.allcontacts[params.index] ? store.allcontacts[params.index].name: ""}</h1>

				<h2>Edit your contact information:</h2>

				<form className="mt-5">
					<div className="form-group">
						<label for="contactName">Full Name</label>
						<input type="text" value={newName} onChange={(e) => { setNewName(e.target.value) }} className="form-control" id="contactName" placeholder="Full Name" aria-describedby="emailHelp"/>
					</div>
		
					<button type="submit" onClick={()=> {  }} className="btn btn-primary">Save</button>
				</form>

			</div>
		</div>
	);
};