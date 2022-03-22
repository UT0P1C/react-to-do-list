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

	const saveTask = () => {
		alert("Task saved");
	}

	return (
		<div className="App">

			{
				modal?
					<div className="modal">
						<div className="modalContent">
							<h3>Add Task</h3>
							<input type="text"/>
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
						if(val.checked){
							return (
								<p>{val.task}</p>
							);
						}else{
							return (
								<p style={{textDecoration: 'line-through'}}>{val.task}</p>
							);
						}
					})
				}
			</div>
		</div>
	);
}

export default App;
