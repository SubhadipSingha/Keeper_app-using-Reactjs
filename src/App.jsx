import Header from './components/header'
import Footer from './components/footer'
import Input from './components/InputArea'
import Note from './components/Note'
import './App.css'
import { useState } from 'react'

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function DeleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }



  return (
    <div>
     <Header/>
     <Input onAdd={addNote}/>
      {  notes.map((noteitem , index) => {
        return( <Note 
          key={index}
          id={index}
          title={noteitem.title}
          content = {noteitem.content} 
          onDelete = {DeleteNote}
          />)
       })}
     <Footer/>
    </div>
  )
}

export default App
