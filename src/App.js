import React, { useState,useEffect } from 'react';
import { Button, FormControl, InputLabel, Input, Container } from '@material-ui/core';
import ToDoList from './ToDoList';
import db from './firebase'
import './App.css';
import firebase from 'firebase';

function App() {

	const [toDoList, setToDo] = useState([]);
	const [newToDo, setNewToDo] = useState('');

	//on app loading listen db and fether tasks

	useEffect(() => {
		db.collection('toDoList').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
			console.log(snapshot.docs.map(doc=> doc.data()));
			setToDo(snapshot.docs.map(doc=>({id: doc.id, todo: doc.data().todo})))
		})
	}, []) 

	//Add new To do 
	const addToDo = (event) => {
		//to stop refresh on submit
		event.preventDefault();

		db.collection('toDoList').add({
			todo: newToDo,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			status: 'To Do'
		})
		//clear input
		setNewToDo('');
	}
	return (
		<div className="App">
			<h1>To Do List </h1>
			<Container maxWidth="sm">
			<form>
				<FormControl>
					<InputLabel htmlFor="my-input">Write a todo</InputLabel>
					<Input value={newToDo} onChange={event => setNewToDo(event.target.value)} />
				</FormControl>
				<Button type="submit" onClick={addToDo} variant="contained" color="primary" disabled={!newToDo}>
					Add To do
        		</Button>
				<ul>
					{toDoList.map(todo => (
						<ToDoList todo={todo}></ToDoList>
						
					))}
				</ul>
			</form>
			</Container>
		</div>
	);
}

export default App;
