import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";


export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		   actions.getContact()
		console.log(store.contactList);
	}, [])



	const listData = store.contactList.map(contact => {

		return (
			<div>
				<h1>{contact.full_name}</h1>
				<h1>{contact.email}</h1>
				<h1>{contact.address}</h1>
				<h1>{contact.phone}</h1>
			</div>
		)

	})

	return <>
		<Navbar />
		<div>
			{listData}

		</div>
	</>
};
export default Home;