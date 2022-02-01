import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	// lista: guarda el arrary
	const [lista, setLista] = useState([]);
	// setLIsta actualiza la lista

	const guardarDatos = (e) => {
		e.preventDefault();
		// console.log("guardando datos");
		setLista([...lista, tarea]);
	};
	console.log(lista);
	return (
		<div>
			<form onSubmit={guardarDatos}>
				<div className="form-group">
					<label htmlFor="exampleInputEmail">TODOS</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						onChange={(e) => setTarea(e.target.value)}
						value={tarea}
					/>
					<ul>
						{lista.map((tarea, index) => (
							<li key={index}>{tarea}</li>
							// se debe agregar  un icono que contenga un evento para eliminar un elemnto de la lista
						))}
					</ul>
					<button type="reset" class="btn btn-primary" value={lista}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Home;
