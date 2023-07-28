const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contacts: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			deleteContacts: (index) => {
				//get the store
				const store = getStore();
				const newContacts = store.todos.filter((todo, i) => {
					return index !== i});
				
					setStore({ contacts: newContacts });	
			},

			addContact: () => {
				//get the store
				const store = getStore();

				const contacts= store.contacts.concat(contact)

				setStore({ contacts: contacts });
			},

			getInitialContacts: ()=> {
				//get the store
				const store = getStore();

				fetch('https://jsonplaceholder.typicode.com/users')
				.then(function(response) {
					if (response.ok) {
						return response.json();
					}
					else {
						throw Error('We could not get the Contact Information')
					}
				})

				.then(data => {

				})

				.catch(error =>{
					console.log(error)
				})

				const newContacts = store.contacts.concat(contact)

				setStore({ contacts: newContacts });

			},
		}
	};
};

export default getState;
