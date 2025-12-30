import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  

  const addNotes = async (e) => {
    e.preventDefault();

    try{
      const res =  await axios.post("http://localhost:5000/notes",{
        notes: notes
      }
      )
      alert("added succesfully");
    }
    catch(error){
      console.log("Error in adding notes")
    }
  }
  return (
    <div>
      <h1>Welcome to The Notes App</h1>
      <form onSubmit={addNotes}>
        <textarea
        placeholder="Enter Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        />
        <div>
        <button type="submit">Submit Notes</button>
        </div>
      </form>
      <div>

      </div>
    </div>
  );
}

export default App;
