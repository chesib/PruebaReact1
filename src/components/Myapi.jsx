import React from "react";
import { useState, useEffect } from "react";
import FilteredCards from "./FilteredCards";

const Myapi = () => {
	const [myDates, setMyDates] = useState([]);

	const dates = async () => {
		try {
			const res = await fetch(
				"https://api.victorsanmartin.com/feriados/en.json"
			);
			const data = await res.json();
			setMyDates(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		dates();
	}, []);

	return (
		<>
			<div>
				<FilteredCards myDates={myDates}></FilteredCards>
			</div>
		</>
	);
};

export default Myapi;
