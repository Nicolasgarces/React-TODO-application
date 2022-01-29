import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

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
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						onChange={(e) => setTarea(e.target.value)}
						value={tarea}
					/>
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<ul>
				<ol>
					{setLista.map((lista) => (
						<li key={lista}>{lista}</li>
					))}
				</ol>
			</ul>
		</div>
	);
};

export default Home;
