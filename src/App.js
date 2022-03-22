import { useState } from 'react';
import './App.css';

function App() {

	const [tasks, setTasks] = useState([
		/*{
			id: 0,
			task: "Study React",
			checked: true
		}*/
	]);

	const [modal, setModal] = useState(false);

	const openModal = () => {
		setModal(!modal);
	}

	const checkTask = (id) => {
		let newTask = tasks.filter((val) => {
			if(val.id === id){
				val.checked = true;
			}

			return val;
		});

		setTasks(newTask);
	}

	const uncheckTask = (id) => {
		let newTask = tasks.filter((val) => {
			if(val.id === id){
				val.checked = false;
			}

			return val;
		});

		setTasks(newTask);
	}

	const saveTask = () => {
		var task = document.getElementById("taskContent");

		setTasks([
			...tasks,
			{
				id: new Date().getTime(),
				task: task.value,
				checked: false
			}

		]);

		setModal(false);

	}

	return (
		<div className="App">

			{
				modal?
					<div className="modal">
						<div className="modalContent">
							<h3>Add Task</h3>
							<input type="text" id="taskContent"/>
							<button onClick={() => saveTask()}>Add</button>
						</div>

					</div>
				:
				<div></div>
			}

			<div onClick={() => openModal()} className="addTask">
				+
			</div>
			<div className="taskBox">
				<h3>My tasks for today!</h3>

				{
					tasks.map((val) => {

						if(!val.checked){
							return (
								<p onClick={() => { checkTask(val.id) }}>{val.task} <i>&#10006;</i></p>
							);
						}else{
							return (
								<p onClick={() => { uncheckTask(val.id) }} style={{textDecoration: 'line-through'}}>{val.task} <i class="fa fa-check"></i></p>
							);
						}
					})
				}
			</div>
		</div>
	);
}

export default App;
