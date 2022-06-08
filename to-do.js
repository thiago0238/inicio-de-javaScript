const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) { //onsubmit faz com o que um formulario seja aletado quando for chamado a função 
	e.preventDefault();//O método preventDefault() cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá.
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}