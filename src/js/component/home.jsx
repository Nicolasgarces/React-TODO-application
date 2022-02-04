import React, { useState } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("");
	// lista: guarda el arrary
	const [lista, setLista] = useState([]);
	// setLIsta actualiza la lista

	const guardarDatos = (e) => {
		e.preventDefault();
		setLista([
			...lista,
			{ id: lista.length, nombre: tarea },
		]); /*A la funcion setLista encargada de actualizar la variable lista,
		se le crea un parametro que contiene un array el cual contiene 
		la variable id que es igual al array por el largo(lista.length) 
		y la variable nombre que es igual a tarea la cual se crea para poder renderizar en el <li> */
		setTarea(
			""
		); /*a setTarea le damos un parametro con un string vacio, para que luego de escribir
		una tarea el input quede vacio */
	};

	// funcion para borrar
	const borrarDatos = (id) => {
		/*a esta funcion le agragmos el parametro id que pertenece al metodo filter*/
		const listaActualizada = lista.filter(
			(item) => item.id !== id
		); /*aquí creamos el metodo filter
		 que consite en crear una constante llamada listaActualizada que es igual a lista.filter luego se crea un condicional
		 que tiene como parametro item que es igual a item.id (id es la variable creada anteriormente)
		 y le decimos que recorra el array y nos filtre todas las funciones diferentes al id ((item)=> item-id !== id)
		  */
		setLista(
			listaActualizada
		); /*Aqui llamamos la funcion setLista para agregarle como parametro
		 el array actualizado que es la funcion listaActualizada */
	};
	// console.log(lista);
	return (
		<div className="container-lg mt-5">
			<form onSubmit={guardarDatos}>
				{" "}
				{/*aqui utilizamos el evento onSubmit y dentro de el llamamos la funcion guardarDatos */}
				<div className="form-group ">
					<h1 className="d-flex justify-content-center">TODOS</h1>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Escribe una tarea"
						onChange={(e) =>
							setTarea(e.target.value)
						} /*aqui utilizamos el evento onChange y esa es su sintaxis*/
						value={tarea}
					/>
					<ul className="list-group list-group-flush">
						{lista.map(
							(
								item /*mapeamos la variable lista quien contiene el array
						                       y dentro del <li> seguimos desarrollando el map */
							) => (
								<li
									className=" lista list-group-item mt-1 mb-1 "
									key={item.id}>
									{" "}
									{/*llamamos a item y le asignamos e id pero para porder llamarlos tenemos que asignar un key */}
									{item.nombre}{" "}
									{/* en medio de la etiqueta <li> y </li> llamos a itemy le asignamos nombre para poder renderizar*/}
									<i
										className="bi bi-x-lg position-absolute top-40 end-0"
										onClick={() =>
											borrarDatos(item.id)
										}></i>
									{/*dentro del icono creamos la funcion onClick
									                                            para poder eliminar el item que se desee*/}
								</li>
							)
						)}
					</ul>
				</div>
			</form>
		</div>
	);
};

export default Home;
