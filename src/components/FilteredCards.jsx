import React, { useState } from "react";

import Table from "react-bootstrap/Table";

const FilteredCards = ({ myDates }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [orden, setOrden] = useState("default"); // Estado para controlar el tipo de orden

	const handleOrdenChange = (e) => {
		setOrden(e.target.value);
		if (ordenSelect === "default") {
			// Restaurar el orden original
			setOriginalOrder([...myDates]);
		}
	};

	const ordenarElementos = (elementos) => {
		return elementos.sort((a, b) => {
			if (orden === "nombre") {
				return a.title.localeCompare(b.title);
			} else if (orden === "tipo") {
				return a.extra.localeCompare(b.extra);
			}
		});
	};

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

	const sortedDates = ordenarElementos([...filteredDates]);

	return (
		<div>
			<div className="filter-container">
				<input
					className="search-input"
					type="text"
					placeholder="Buscar fechas"
					name="filter"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>

				<label className="lblfor" htmlFor="ordenSelect">
					Ordenar por:
				</label>

				<select
					className="select-form"
					id="ordenSelect"
					value={orden}
					onChange={handleOrdenChange}
				>
					{" "}
					<option value="default">Fecha</option>
					<option value="nombre">Nombre</option>
					<option value="tipo">Tipo</option>
				</select>
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
						{sortedDates.map((date, index) => (
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
