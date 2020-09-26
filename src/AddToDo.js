import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import db from "./firebase";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Container,
} from "@material-ui/core";
import firebase from "firebase";
import AddIcon from "@material-ui/icons/Add";

function AddToDo() {
  const [toDoList, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  console.log(toDoList);

  //on app loading listen db and fether tasks

  useEffect(() => {
    db.collection("toDoList")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setToDo(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo, status: doc.data().status }))
        );
      });
  }, []);

  //Add new To do
  const addToDo = (event) => {
    //to stop refresh on submit
    event.preventDefault();

    db.collection("toDoList").add({
      todo: newToDo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      status: "To Do",
    });
    //clear input
    setNewToDo("");
  };

  return (
    <Container>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Add Item</InputLabel>
          <Input
            value={newToDo}
            onChange={(event) => setNewToDo(event.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={addToDo}
          variant="contained"
          color="primary"
          disabled={!newToDo}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </form>
      <ul>
        {toDoList.map((todo) => todo.status === 'To Do' ?(
            <ToDoList todo={todo}></ToDoList>
        ):(null))}
      </ul>
    </Container>
  );
}

export default AddToDo;
