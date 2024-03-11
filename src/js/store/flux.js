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
			contactList: [
				// {
				// 	  "full_name": "cristian",
                //     "email": "cris@gmail.com",
                //     "agenda_slug": "cris",
                //     "address":"47568 NW 34ST, 33434 FL, USA",
                //     "phone":"7864445566"
				// }
			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getContact: async () => {
				

				const res = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/jean')
				const data = await res.json()
				setStore({contactList: data})
			},

			createContact: async (contactName) => {
				const store = getStore()

				const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${contactName}`, {
					method: 'POST',
					body: JSON.stringify([{

						"full_name": contactName,
						"email": `${contactName}dave@gmail.com`,
						"agenda_slug": "my_super_agenda",
						"address":"47568 NW 34ST, 33434 FL, USA",
						"phone":"7864445566"

					}]),

					headers: {
						'Content-Type': 'application/json'
					}, 
				})
				
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
			}
		}
	};
};

export default getState;
