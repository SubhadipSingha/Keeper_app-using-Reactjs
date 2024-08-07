import { useState } from "react";


function Input(props){
   
    const [note ,setnote] = useState({
        title:"",
        content:""
    })
    
    
  function submitNote(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
    function HandleChange(event){

       const {name , value} = event.target;

       setnote(prevnote => {
        return {
        ...prevnote , 
        [name]: value}
    })
    }
    return(
        <div>
        <form onSubmit={submitNote}>
          <input name="title" placeholder="Title" value={note.title} onChange={HandleChange}/>
          <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={HandleChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
}
export default Input