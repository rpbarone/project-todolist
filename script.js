//Variables
var button = document.getElementById('btn-add');
var input = document.getElementById('inp');
var ul = document.getElementById('list-one');
var list = document.querySelectorAll('li');


//Functions

function createListElement () {
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value = "";
			var remove = document.createElement('button');
			remove.appendChild(document.createTextNode('X'));
			li.appendChild(remove);
			list = document.querySelectorAll('li');	
			delbutton = document.getElementById('list-one').querySelectorAll('button');
}

function addTask () {

		if (input.value.length > 0) {
			createListElement();
		}
}

function addTaskByEnter () {

	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}	
}


function crossOrDeleteItem () {

	for(var i = 0; i < list.length; i++) {
		list[i].addEventListener("click", changeSelectedItem);
		delbutton[i].addEventListener("click", removeParent);
	}
}

function changeSelectedItem() {
	this.classList.toggle('done');
}

function removeParent (){
	this.parentElement.classList.add('list-off');
}

//Call Functions
button.addEventListener("click", addTask);
input.addEventListener("keypress", addTaskByEnter);
ul.addEventListener("mousedown", crossOrDeleteItem);
