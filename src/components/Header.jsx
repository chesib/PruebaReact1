import React from "react";

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="logo">
					<h1>Feriados nacionales</h1>
				</div>

				<nav>
					<ul>
						<li>
							<a href="/">Inicio</a>
						</li>
						<li>
							<a href="/feriados">Feriados</a>
						</li>
						<li>
							<a href="/acerca">Acerca de</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
