import React from "react";

export const Contact = (props) => (
	<div className="card mb-3">
		<div className="row no-gutters">

			<div className="col-2">
				<img className="rounded-circle thumbnail img-responsive"src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="..."/>
			</div>

			<div className="col-6">
				<div className="card-body">
					<h5 className="card-title">{props.contact.name}</h5>
					<p className="card-text"><i class="fas fa-map-marker-alt m-1"></i>{props.contact.address.city}</p>
					<p className="card-text"><i class="fas fa-phone m-1"></i>{props.contact.phone}</p>
					<p className="card-text"><i class="fas fa-envelope m-1"></i>{props.contact.email}</p>

				</div>
			</div>

			<div className="col-2 buttons">
				<button type="button" className="btn btn-secondary m-2" href="#"><i class="far fa-edit"></i></button>
				<button type="button" className="btn btn-danger m-2" href="#" onClick={() => { props.deleteContacts(props.index) }}><i class="fas fa-trash-alt"></i></button>
				
			</div>
			
		</div>
	</div>
);

