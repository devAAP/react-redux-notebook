import React, {useState} from 'react'
import {v4 as uuid} from "uuid"
import {addNoteAction} from "../reducers/action";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";
import "./AddNote.css"

const AddNote = (props) => {
    console.log(props)
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")



const handleSubmit = (e) => {
    e.preventDefault();
    let newNote = {
        id: uuid(),
        title: title,
        description: description,
    }

    dispatch(addNoteAction(newNote));
    
    props.addUser(newNote);
    setTitle("");
    setDescription("");
};   


  return (
    <>
    <div className="noteadd">
      <h1>Add a New Note</h1>
      <div className="form-group"onSubmit={handleSubmit}>
        <input
          type="text"
          className="noteadd-header"
          name="noteadd-header"
          placeholder="Note Title"
          value={title} onChange={(e)=> {setTitle(e.target.value);}}/>
      </div>
      <div className="form-group">
        <textarea 
          name="noteadd-description"
          className="noteadd-description"
          placeholder="Note Description"
          value={description} onChange={(e)=>{setDescription(e.target.value);}}
        ></textarea>
      </div>
      <div className="noteadd-button">
        <button>Add Note</button>
      </div>
    </div>
    <br></br>
  </>
  )
}

const sendActionAsProps = {
    addUser: addNoteAction,
  };
  
  export default connect(null, sendActionAsProps)(AddNote);