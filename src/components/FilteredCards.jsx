import React, { useState } from "react";

import Table from "react-bootstrap/Table";

const FilteredCards = ({ myDates }) => {
	const [searchTerm, setSearchTerm] = useState("");

	// Filtrar las tarjetas en función del término de búsqueda
	const filteredDates = myDates.filter((date) => {
		const lowerSearchTerm = searchTerm.toLowerCase();
		const lowerTitle = date.title.toLowerCase();
		const lowerExtra = date.extra.toLowerCase();
		const lowerDate = date.date.toLowerCase();

		return (
			lowerTitle.includes(lowerSearchTerm) ||
			lowerExtra.includes(lowerSearchTerm) ||
			lowerDate.includes(lowerSearchTerm)
		);
	});
	console.log(myDates);

	return (
		<div>
			<h5 className="subtitle">
				Lista completa de todos los feriados de chile del 2023
			</h5>
			<div className="filter-container">
				<input
					className="search-input"
					type="text"
					placeholder="Buscar fechas"
					name="filter"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			<div className="table-container">
				<Table className="table" striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>#</th>
							<th>Nombre</th>
							<th>Tipo</th>
							<th>Fecha</th>
						</tr>
					</thead>
					<tbody>
						{filteredDates.reverse().map((date, index) => (
							<tr key={date.title}>
								<td>{index + 1}</td>
								<td>{date.title}</td>
								<td>{date.extra}</td>
								<td>{date.date}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default FilteredCards;
