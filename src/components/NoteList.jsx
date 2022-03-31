import React from 'react';
import Note from "./Note";
import {useSelector} from 'react-redux'
import "./NoteList.css"


const NoteList = () => {
    const users = useSelector ((state) => {
      return state.users;
    })
        return (
            <>
    <h1 className="note_heading">Note List</h1>
    {users.map((user, index) => {
            return <Note user={user} key={user.id} />;
          })}
            </>
        );
    }

   

export default (NoteList);