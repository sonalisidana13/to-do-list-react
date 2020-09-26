import React , {useState} from 'react';
import './ToDo.css';
import { List, ListItem, ListItemText, Button,Modal} from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function ToDoList(props) {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const [editInput, setEditInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    }

    const updateTodo = () => {

        db.collection('toDoList').doc(props.todo.id).set({
            todo: editInput
        }, {merge: true})
        setOpen(false);
    }
   
    return (      
       <>
        <Modal
        open={open}
         onClose={e => setOpen(false)}> 
         <div className={classes.paper}>
            <h1>hello</h1>  
            <input placeholder={props.todo.todo} value={editInput} onChange={event=> setEditInput(event.target.value)}></input>
            <button onClick={e => updateTodo()}>update todo</button>
         </div>
         </Modal>

        <List className="to-do-list">
            <ListItem>
            🚀<ListItemText primary={props.todo.todo}/>
            </ListItem>
            <EditIcon onClick={e => setOpen(true)}></EditIcon>
            <DeleteForeverIcon onClick = {event => db.collection('toDoList').doc(props.todo.id).delete()}></DeleteForeverIcon>
        </List>
        </>
    );
}

export default ToDoList;
